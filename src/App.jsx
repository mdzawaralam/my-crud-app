import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import { AuthProvider } from './contexts/AuthContext';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import ProductList from './pages/ProductList';
import AddProduct from './pages/AddProduct';
import EditProduct from './pages/EditProduct';
import AI from './pages/AI';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<PublicRoute><Home /></PublicRoute>} />
            <Route path="about" element={<PublicRoute><About /></PublicRoute>} />
            <Route path="services" element={<PublicRoute><Services /></PublicRoute>} />
            <Route path="contact" element={<PublicRoute><Contact /></PublicRoute>} />
            <Route path="ai" element={<PublicRoute><AI /></PublicRoute>} />
            <Route path="login" element={<PublicRoute><Login /></PublicRoute>} />
            <Route path="register" element={<PublicRoute><Register /></PublicRoute>} />
            <Route 
              path="products" 
              element={
                <PrivateRoute>
                  <ProductList />
                </PrivateRoute>
              } 
            />
            <Route 
              path="add-product" 
              element={
                <PrivateRoute>
                  <AddProduct />
                </PrivateRoute>
              } 
            />
            <Route 
              path="edit-product/:id" 
              element={
                <PrivateRoute>
                  <EditProduct />
                </PrivateRoute>
              } 
            />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
