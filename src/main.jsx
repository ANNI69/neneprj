import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ContactUs from './ContactUs.jsx'
import Aboutus from './Aboutus.jsx'
import InputPage from './InputPage.jsx'
import ResultPage from './ResultPage.jsx'
// import ContactUs from './ContactUs.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/about" element={<Aboutus />} />
          <Route path="/input" element={<InputPage />} />
          <Route path="/result" element={<ResultPage />} />
        </Routes>
      </Router>
  </StrictMode>,
)
