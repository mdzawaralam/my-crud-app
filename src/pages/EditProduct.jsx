import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import apiClient from '../services/apiClient';
import './AddProduct.css';

function EditProduct() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [formData, setFormData] = useState({
    product_name: '',
    price: '',
    description: '',
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState('');
  const [fetchLoading, setFetchLoading] = useState(true);

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const fetchProduct = async () => {
    try {
      const response = await apiClient.get(`/products/${id}`);
      const product = response.data?.data || response.data;
      setFormData({
        product_name: product.product_name || '',
        price: product.price || '',
        description: product.description || '',
      });
      setApiError('');
    } catch (error) {
      setApiError('Failed to load product');
    } finally {
      setFetchLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.product_name) {
      newErrors.product_name = 'Product name is required';
    }
    if (!formData.price) {
      newErrors.price = 'Price is required';
    }
    if (!formData.description) {
      newErrors.description = 'Description is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setApiError('');

    if (validate()) {
      setLoading(true);
      try {
        await apiClient.put(`/products/${id}`, formData);
        alert('Product updated successfully!');
        navigate('/products');
      } catch (error) {
        setApiError(error.response?.data?.message || 'Failed to update product');
      } finally {
        setLoading(false);
      }
    }
  };

  if (fetchLoading) {
    return (
      <div className="add-product-page">
        <div className="form-container">
          <p style={{ textAlign: 'center', color: '#7f8c8d' }}>Loading product...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="add-product-page">
      <div className="form-container">
        <h1>Edit Product</h1>
        <form onSubmit={handleSubmit} className="product-form">
          <div className="form-group">
            <label htmlFor="product_name">Product Name</label>
            <input
              type="text"
              id="product_name"
              name="product_name"
              value={formData.product_name}
              onChange={handleChange}
              placeholder="Enter product name"
            />
            {errors.product_name && <span className="error">{errors.product_name}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input
              type="text"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="Enter price"
            />
            {errors.price && <span className="error">{errors.price}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter description"
              rows="4"
            />
            {errors.description && <span className="error">{errors.description}</span>}
          </div>

          {apiError && <div className="api-error">{apiError}</div>}

          <div className="form-actions">
            <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? 'Updating...' : 'Update Product'}
            </button>
            <button type="button" className="cancel-btn" onClick={() => navigate('/products')}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditProduct;
