import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from'react-redux';
import { store } from './services/store';
import { GoogleOAuthProvider } from '@react-oauth/google';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      
      <GoogleOAuthProvider clientId="928927878059-nee4uhgsgfrorth4je3mklqkv25olhv0.apps.googleusercontent.com">
        <App />
      </GoogleOAuthProvider>
      
    </Provider> 
  </React.StrictMode>
);


