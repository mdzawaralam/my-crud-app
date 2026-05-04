import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import apiClient from '../services/apiClient';
import './ProductList.css';

function ProductList() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await apiClient.get('/products');
      // Handle nested data structure: response.data.data
      const productsData = response.data?.data || response.data;
      setProducts(productsData);
    } catch (err) {
      setError('Failed to load products');
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (id) => {
    navigate(`/edit-product/${id}`);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
        await apiClient.delete(`/products/${id}`);
        setProducts(products.filter(product => product._id !== id));
      } catch (err) {
        alert('Failed to delete product');
      }
    }
  };

  if (loading) {
    return <div className="product-loading">Loading products...</div>;
  }

  if (error) {
    return <div className="product-error">{error}</div>;
  }

  return (
    <div className="product-list-page">
      <div className="product-header">
        <h1>Products</h1>
        <button className="add-product-btn" onClick={() => navigate('/add-product')}>
          + Add Product
        </button>
      </div>
      
      {products.length === 0 ? (
        <div className="no-products">No products found</div>
      ) : (
        <div className="product-table">
          <div className="table-header">
            <span className="col-id">ID</span>
            <span className="col-name">Product Name</span>
            <span className="col-price">Price</span>
            <span className="col-description">Description</span>
            <span className="col-actions">Actions</span>
          </div>
          <div className="table-body">
            {products.map((product) => (
              <div key={product._id} className="table-row">
                <span className="col-id">{product._id}</span>
                <span className="col-name">{product.product_name}</span>
                <span className="col-price">${product.price}</span>
                <span className="col-description">{product.description}</span>
                <span className="col-actions">
                  <button 
                    className="action-btn edit-btn" 
                    onClick={() => handleEdit(product._id)}
                    title="Edit"
                  >
                    ✏️
                  </button>
                  <button 
                    className="action-btn delete-btn" 
                    onClick={() => handleDelete(product._id)}
                    title="Delete"
                  >
                    🗑️
                  </button>
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductList;