import { useState, useEffect } from "react";
import axios from "axios";
import PetCard from "./Card";

function CategoryPage({ categories }) {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [pets, setPets] = useState([]);

  useEffect(() => {
    if (selectedCategory) {
      const fetchPets = async () => {
        try {
          const response = await axios.get(
           ` http://localhost:5000/pets/category?categoryId=${selectedCategory}`
          );
          console.log(response);
          setPets(response.data);
        } catch (error) {
          alert("Error fetching pets:", error);
        }
      };

      fetchPets();
    } else {
      setPets([]);
    }
  }, [selectedCategory]);

  return (
    <div className="p-6 bg-gradient-to-br from-gray-100 to-gray-200 min-h-screen">
    
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          🐾 Explore Our Pet Categories 🐾
        </h1>
        <p className="text-gray-600 mt-2">
          Select a category to see the adorable pets waiting for their forever homes!
        </p>
      </header>

      <div className="flex justify-center mb-6">
        <div className="w-full max-w-md">
          <label
            htmlFor="category"
            className="block text-sm font-medium text-gray-700"
          >
            Select Category
          </label>
          <select
            id="category"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full p-3 mt-1 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition duration-200"
          >
            <option value="">All Categories</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {pets.map((pet) => (
          <div
            key={pet.id}
            className="transform hover:scale-105 transition-transform duration-200"
          >
            <PetCard pet={pet} />
          </div>
        ))}
      </div>

      {selectedCategory && pets.length === 0 && (
        <div className="text-center text-gray-500 mt-8">
          <p className="text-lg">No pets available in this category.</p>
        </div>
      )}
    </div>
  );
}

export default CategoryPage;