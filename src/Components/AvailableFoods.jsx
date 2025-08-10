import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router";
import Loader from "./Loader";

const AvailableFood = () => {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [column, setcolumn] = useState(true); 


  useEffect(() => {
    axios
      .get("https://food-share-dun.vercel.app/foodPost-available")
      .then((res) => {
        setFoods(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching food data:", error);
        setLoading(false);
      });
  }, []);

  const filteredFoods = foods.filter((food) =>
    food.foodData.foodName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="max-w-7xl mx-auto p-4 min-h-screen flex flex-col justify-start items-center  bg-gray-50 shadow-2xl my-5 ">
      <h1 className="text-3xl font-bold mb-6 text-center text-[#301452]">
        Available Food Items
      </h1>

      {/* Search input */}
      <input
        type="text"
        placeholder="Search food by name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-6 p-2 border border-[#301452] rounded-md w-full max-w-md focus:outline-none focus:ring-2 focus:ring-[#1B0B2F]"
      />
      <button
  onClick={() => setcolumn(!column)} // Step 2
  className="mb-4 px-4 py-2 bg-[#1B0B2F] text-white rounded hover:bg-[#5b6f90] transition"
>
  Change Layout
</button>


      {foods.length === 0 ? (
        <div className="flex items-center justify-center w-full h-[60vh]">
          <p className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#301452] text-center">
            No Food Available Right Now 🍽️
          </p>
        </div>
      ) : filteredFoods.length === 0 ? (
        <div className="flex items-center justify-center w-full h-[60vh]">
          <p className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#301452] text-center">
            No Food Available Based On Your Search Name 🔍
          </p>
        </div>
      ) : (
        <div
  className={`grid grid-cols-1 sm:grid-cols-2 ${
    column ? "lg:grid-cols-3" : "lg:grid-cols-2"
  } gap-6 w-full`}
>

          {filteredFoods.map((food) => (
            <div
              key={food._id}
              className="bg-[#a988d6ad] border border-[#A3DC9A] rounded-2xl p-5 shadow-lg hover:shadow-2xl transition-all"
            >
              <h2 className="text-xl font-semibold text-[#301452] mb-2">
                {food.foodData.foodName}
              </h2>
              <p className="text-sm text-[#1B0B2F] mb-1">
                <span className="font-medium">Quantity:</span> {food.foodData.quantity}
              </p>
              <p className="text-sm text-[#1B0B2F] mb-1">
                <span className="font-medium">Location:</span>{" "}
                {food.foodData.pickupLocation}
              </p>
              <p className="text-sm text-[#1B0B2F] mb-2">
                <span className="font-medium">Expires On:</span>{" "}
                {new Date(food.foodData.expireDate).toLocaleDateString()}
              </p>
              <Link
                to={`/available-foods/${food._id}`}
                className="inline-block mt-3 bg-[#dcdcdd] text-[#4B5563] font-semibold py-2 px-4 rounded-lg shadow hover:bg-[#FFD6BA] transition"
              >
                Details
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AvailableFood;
