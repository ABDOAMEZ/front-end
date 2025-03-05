import { BrowserRouter , Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Home from './pages/Home';
import VerificationAccount from './pages/VerificationAccount';
import ChatBot from './components/chatbot/ChatBot';   
import { useEffect } from 'react';


function App() {
  
  return (
    <BrowserRouter>

      <Header />
      <ChatBot />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/forgot-password" element={<VerificationAccount />} />

      </Routes>
        
    </BrowserRouter>
  );
}

export default App;
