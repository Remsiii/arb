import React from 'react';
import logo from './logo.svg';
import './styles/App.css';
import Home from './pages/Home';
import { BrowserRouter as Router } from 'react-router-dom';
import { ShoppingCartProvider } from './contexts/ShoppingCartContext';


function App() {
  return (
    <div className="App">
      <ShoppingCartProvider>
      <Router>
      <Home />
      </Router>
      </ShoppingCartProvider>
    </div>
  );
}

export default App;
