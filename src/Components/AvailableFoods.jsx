import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router";
import Loader from "./Loader";


const AvailableFood = () => {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:3000/foodPost-available") // your backend endpoint
      .then((res) => {
        setFoods(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching food data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loader></Loader>
  }

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center text-[#748DAE]">
        Available Food Items
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {foods.map((food) => (
          <div
            key={food.foodData._id}
            className="bg-[#FFF9BD] border border-[#A3DC9A] rounded-2xl p-5 shadow-lg hover:shadow-2xl transition-all"
          >
            <h2 className="text-xl font-semibold text-[#9ECAD6] mb-2">{food.foodData.foodName}</h2>
            <p className="text-sm text-[#748DAE] mb-1">
              <span className="font-medium">Quantity:</span> {food.quantity}
            </p>
            <p className="text-sm text-[#748DAE] mb-1">
              <span className="font-medium">Location:</span> {food.foodData.pickupLocation}
            </p>
            <p className="text-sm text-[#748DAE] mb-2">
              <span className="font-medium">Expires On:</span>{" "}
              {new Date(food.foodData.expireDate).toLocaleDateString()}
            </p>
            <Link
              to={`/available-foods/${food._id}`}
              className="inline-block mt-3 bg-[#F5CBCB] text-[#4B5563] font-semibold py-2 px-4 rounded-lg shadow hover:bg-[#FFD6BA] transition"
            >
              Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvailableFood;
