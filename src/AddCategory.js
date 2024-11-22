import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddCategory({ categories }) {
  const [category, setCategory] = useState("");
  const navigate = useNavigate();

  async function handleAddCategory(e) {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/category", {
        name: category,
      });
      if (response.status === 201) {
        alert("Category successfully added");
        setCategory("");

    
        categories.push(response.data);
      } else {
        alert("Unexpected response from the server");
      }
    } catch (error) {
      console.error("Error while adding category:", error);
      alert(`Error: ${error.response?.data?.error || "Something went wrong"}`);
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-100 to-blue-50">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold text-center text-green-600 mb-6">
          🐾 Add a New Category 🐾
        </h1>
        <form onSubmit={handleAddCategory} className="space-y-4">
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700">
              Category Name
            </label>
            <input
              id="category"
              type="text"
              placeholder="Enter or select a category"
              className="w-full p-2 mt-1 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
              onChange={(e) => setCategory(e.target.value)}
              value={category}
              list="category-list"
              required
            />
            <datalist id="category-list">
              {categories.map((cat) => (
                <option key={cat._id} value={cat.name} />
              ))}
            </datalist>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
          >
            Add Category
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddCategory;
