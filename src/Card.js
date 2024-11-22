import React from "react";

function PetCard({ pet }) {
  return (
    <div className="bg-white p-4 shadow-md rounded-lg border border-gray-200">
      <img
        src={`http://localhost:5000/${pet.image}`}
        alt={pet.name}
        className="w-full h-40 object-cover rounded-lg mb-4"
      />
      <h2 className="text-lg font-bold">{pet.name}</h2>
      <p className="text-sm text-gray-700">Breed: {pet.breed}</p>
      <p className="text-sm text-gray-700">Age: {pet.age}</p>
      <p className="text-sm text-gray-700">Color: {pet.color}</p>
      <p className="text-sm text-gray-700">Cost: ${pet.cost}</p>
      <p className="text-sm text-gray-700">{pet.description}</p>
    </div>
  );
}

export default PetCard;
