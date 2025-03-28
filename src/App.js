import { BrowserRouter , Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Home from './pages/Home';
import VerificationAccount from './pages/VerificationAccount';
import ChatBot from './components/chatbot/ChatBot';   
import { useEffect } from 'react';
import AfterSalesProtection from './pages/AfterSalesProtection';
import MoneyBackPolicy from './pages/MoneyBackPolicy';
import SafeAndPayments from './pages/safeAndPayments';
import ShippingAndLogistics from './pages/shipping&logistics';
import About from './components/Aboutus/about';
import BecomeSeller from './pages/BecomeSeller';
import SllerForm from './components/BecomeSeller/Simple_form';
import Rejister from './components/register/Rejister';
import Login from './components/login/Login';
import ProfilePage from './pages/ProfilePage';
import AddProduct from './pages/AddProduct';
import ListProduct from './pages/ListProduct';
import AddCategory from './pages/AddCategory';
import SubcategoryPage from './components/header/SubcategoryPage';
import CategoryPage from './components/header/CategoryPage';



function App() {
  
  return (
    <BrowserRouter>

      <Header />
      <ChatBot />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/forgot-password" element={<VerificationAccount />} />
        <Route path="/After-sales protections" element={<AfterSalesProtection />} />
        <Route path="/Money-back policy" element={<MoneyBackPolicy />} />
        <Route path="/Safe & easy payments" element={<SafeAndPayments />} />
        <Route path="/Shipping & logistics services" element={<ShippingAndLogistics />} />
        <Route path="/about us" element={<About />} />
        <Route path="/become seller" element={<BecomeSeller />} />
        <Route path="/Simple_form" element={<SllerForm />} />
        <Route path="/register" element={<Rejister />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/add Peoducts" element={<AddProduct />} />
        <Route path="/products List" element={<ListProduct />} />
        <Route path="/add category" element={<AddCategory />} />
        <Route path="/category/:id" element={<SubcategoryPage />} />
        <Route path="/subcategory/:id" element={<CategoryPage />} />
      </Routes>
        
    </BrowserRouter>
  );
}

export default App;
