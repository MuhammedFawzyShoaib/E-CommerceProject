import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './Components/Home.jsx';
import NavBar from './Components/NavBar.jsx';
import Footer from './Components/Footer.jsx';
import Header from './Components/Header.jsx';
import Filter from './Components/Filter.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavBar />
    <Header />
    <Filter />
    <App />
    <Home />
    <Footer />
  </StrictMode>,
)
// 