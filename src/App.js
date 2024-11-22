import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import AddCategory from "./AddCategory";
import CategoryPage from "./Category"; 

function App() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("http://localhost:5000/category");
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
       
        <nav className="bg-green-500 p-4">
          <ul className="flex justify-center space-x-4">
            <li>
              <Link to="/" className="text-white font-semibold">Add Category</Link>
            </li>
            <li>
              <Link to="/category" className="text-white font-semibold">View Categories</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route
            path="/" element={<AddCategory categories={categories} />}
          />
          <Route path="/category" element={<CategoryPage categories={categories} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
