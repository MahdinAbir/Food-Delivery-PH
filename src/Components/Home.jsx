// Home.jsx

import { motion } from "framer-motion";

import { FaUtensils, FaCheckCircle, FaHandsHelping } from "react-icons/fa";
import { Link } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import BannerSlider from "./BannerSlider";


const Home = () => {

  const [featuredFoods, setFeaturedFoods] = useState([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
  axios
    .get("https://food-share-dun.vercel.app/foodPost-available")
    .then((res) => {
      setFeaturedFoods(res.data.slice(0, 6)); // show max 6 foods
      setLoading(false);
    })
    .catch((error) => {
      console.error("Error fetching featured foods:", error);
      setLoading(false);
    });
}, []);

  
  return (
    <div className="bg-[#FFF9BD] text-[#2f2f2f]">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16 gap-10">
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex-1 space-y-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-[#1B0B2F] leading-tight">
            Share Food. <br /> Spread Kindness.
          </h1>
          <p className="text-lg text-gray-700">
            A community-driven food sharing platform that connects surplus meals with those in need.
          </p>
          <div className="space-x-4">
            <Link to="/available-foods" className="btn bg-[#FFCFCF] hover:bg-[#f99fe4] border-none text-[#2f2f2f] font-semibold">
              View Foods
            </Link>
            <Link to="/auth/add-food" className="btn bg-[#1B0B2F] hover:bg-green-600 border-none text-white font-semibold">
              Start Sharing
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex-1"
        >
         <motion.img
  src="https://i.ibb.co/0yX3P0qP/pexels-picha-6210433.jpg"
  alt="Food Sharing Illustration"
  className="w-full   md:max-w-md max-w-sm mx-auto"
  animate={{
    y: [0, -10, 0], // 
  }}
  transition={{
    duration: 6,
    repeat: Infinity,
    repeatType: "loop",
    ease: "easeInOut",
  }}
/>
        </motion.div>
      </section>

<BannerSlider></BannerSlider>
      
<section className="px-6 md:px-20 py-16 bg-[#a988d6ad] w-full">
  <h2 className="text-3xl font-bold text-center text-[#2f2f2f] mb-12">
   FEATURED FOODS
  </h2>

  {loading ? (
    <p className="text-center text-lg text-gray-600">Loading featured foods...</p>
  ) : featuredFoods.length === 0 ? (
    <div className="flex items-center justify-center h-[50vh]">
      <p className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#9ECAD6] text-center">
        No Food Available Right Now 🍽️
      </p>
    </div>
  ) : (
    <div
      className={`grid gap-6 w-full justify-center  ${
        featuredFoods.length === 1
          ? "grid-1  "
          : featuredFoods.length === 2
          ? "grid-cols-1 sm:grid-cols-2"
          : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
      }`}
    >
      {featuredFoods.map((food) => (
        <div
          key={food.foodData._id}
          className="bg-white border border-[#A3DC9A] rounded-2xl p-6 shadow-md hover:shadow-xl  transition-all text-center"
        >
          <h3 className="text-xl font-semibold text-[#1B0B2F] mb-2">
            {food.foodData.foodName}
          </h3>
          <p className="text-sm text-[#4B5563] mb-1">
            <span className="font-medium">Quantity:</span> {food.foodData.quantity}
          </p>
          <p className="text-sm text-[#4B5563] mb-1">
            <span className="font-medium">Location:</span>{" "}
            {food.foodData.pickupLocation}
          </p>
          <p className="text-sm text-[#4B5563]">
            <span className="font-medium">Expires On:</span>{" "}
            {new Date(food.foodData.expireDate).toLocaleDateString()}
          </p>
        </div>
      ))}
    </div>
  )}

  {featuredFoods.length > 0 && (
    <div className="text-center mt-12">
      <Link
        to="/available-foods"
        className="btn btn-outline text-[#1B0B2F] border-[#1B0B2F] hover:bg-[#1B0B2F] hover:text-white"
      >
        Show All
      </Link>
    </div>
  )}
</section>


      
      <section className="px-6 md:px-20 py-16 bg-white">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#2f2f2f]">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <FaUtensils className="text-5xl mx-auto text-[#1B0B2F]" />
            <h3 className="text-xl font-semibold mt-4">Add Food</h3>
            <p className="text-gray-600">Share any surplus food you have with the community.</p>
          </div>
          <div>
            <FaHandsHelping className="text-5xl mx-auto text-[#1B0B2F]" />
            <h3 className="text-xl font-semibold mt-4">Request Food</h3>
            <p className="text-gray-600">View available items and request what you need.</p>
          </div>
          <div>
            <FaCheckCircle className="text-5xl mx-auto text-[#1B0B2F]" />
            <h3 className="text-xl font-semibold mt-4">Pickup & Enjoy</h3>
            <p className="text-gray-600">Arrange pickup and enjoy fresh food, no waste.</p>
          </div>
        </div>
      </section>

     
      <section className="bg-[#a988d6ad] py-16 text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#2f2f2f]">
          Join Our Community
        </h2>
        <p className="mb-8 text-gray-700">Together, we can reduce food waste and fight hunger.</p>
        <Link to="/auth/register" className="btn bg-[#1B0B2F] hover:bg-green-700 text-white font-semibold">
          Sign Up Now
        </Link>
      </section>
      

      {/* Footer */}
      <footer className="bg-[#FFFDEC] text-center py-6 border-t border-[#E0E0E0] ">
        <p className="text-gray-600">© 2025 FoodShare. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
