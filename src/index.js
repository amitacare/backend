import React from 'react';
import ReactDOM from 'react-dom';
import { BookProvider } from "./context/books";
import App from './App';
import './index.css';
import './index.scss';
import { CartProvider } from './context/cart';

    
ReactDOM.render(
  <BookProvider>
    <CartProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </CartProvider>
  </BookProvider>,
  document.getElementById('root')
);
