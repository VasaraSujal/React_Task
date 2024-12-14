import { useState } from 'react'
import {BrowserRouter as Router, Route , Routes } from 'react-router-dom'
import Navbar from './Components/Navbar.jsx'
import Meal from './Components/Meal.jsx'
import Cocktail from './Components/Cocktail.jsx'
import Book from './Components/Book.jsx'
import Bank from './Components/Bank.jsx'
import Home from './Components/Home.jsx'


function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Meal" element={<Meal />} />
          <Route path="/Cocktail" element={<Cocktail />} />
          <Route path="/Book" element={<Book />} />
          <Route path="/Bank" element={<Bank />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
