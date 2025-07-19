// Home.jsx

import { motion } from "framer-motion";

import { FaUtensils, FaCheckCircle, FaHandsHelping } from "react-icons/fa";
import { Link } from "react-router";

const Home = () => {
  return (
    <div className="bg-amber-50 text-[#2f2f2f]">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16 gap-10">
        <motion
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex-1 space-y-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-[#86A788] leading-tight">
            Share Food. <br /> Spread Kindness.
          </h1>
          <p className="text-lg text-gray-700">
            A community-driven food sharing platform that connects surplus meals with those in need.
          </p>
          <div className="space-x-4">
            <Link to="/available-foods" className="btn bg-[#FFCFCF] hover:bg-[#f99fe4] border-none text-[#2f2f2f] font-semibold">
              View Foods
            </Link>
            <Link to="/add-food" className="btn bg-[#86A788] hover:bg-green-600 border-none text-white font-semibold">
              Start Sharing
            </Link>
          </div>
        </motion>

        <motion.div
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex-1"
        >
          <img
            src="https://i.ibb.co/5khdBv2/food-sharing.png"
            alt="Food Sharing Illustration"
            className="w-full max-w-md mx-auto"
          />
        </motion.div>
      </section>

      {/* Featured Foods */}
      <section className="px-6 md:px-20 py-16 bg-[#FFE2E2]">
        <h2 className="text-3xl font-bold text-center text-[#2f2f2f] mb-12">Featured Foods</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="card bg-white shadow-lg rounded-xl overflow-hidden">
              <figure><img src="https://source.unsplash.com/300x200/?food" alt="Food" /></figure>
              <div className="card-body">
                <h2 className="card-title">Delicious Meal #{i + 1}</h2>
                <p>Quantity: {Math.floor(Math.random() * 5) + 1}</p>
                <p>Location: Dhaka</p>
                <div className="card-actions justify-end">
                  <Link to="/login" className="btn btn-sm bg-[#FFCFCF] hover:bg-[#FFC2C2] text-[#2f2f2f]">View Details</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/available-foods" className="btn btn-outline text-[#86A788] border-[#86A788] hover:bg-[#86A788] hover:text-white">
            Show All
          </Link>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-6 md:px-20 py-16 bg-white">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#2f2f2f]">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <FaUtensils className="text-5xl mx-auto text-[#86A788]" />
            <h3 className="text-xl font-semibold mt-4">Add Food</h3>
            <p className="text-gray-600">Share any surplus food you have with the community.</p>
          </div>
          <div>
            <FaHandsHelping className="text-5xl mx-auto text-[#86A788]" />
            <h3 className="text-xl font-semibold mt-4">Request Food</h3>
            <p className="text-gray-600">View available items and request what you need.</p>
          </div>
          <div>
            <FaCheckCircle className="text-5xl mx-auto text-[#86A788]" />
            <h3 className="text-xl font-semibold mt-4">Pickup & Enjoy</h3>
            <p className="text-gray-600">Arrange pickup and enjoy fresh food, no waste.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#FFCFCF] py-16 text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#2f2f2f]">
          Join Our Community
        </h2>
        <p className="mb-8 text-gray-700">Together, we can reduce food waste and fight hunger.</p>
        <Link to="/register" className="btn bg-[#86A788] hover:bg-green-700 text-white font-semibold">
          Sign Up Now
        </Link>
      </section>

      {/* Footer */}
      <footer className="bg-[#FFFDEC] text-center py-6 border-t border-[#E0E0E0] mt-8">
        <p className="text-gray-600">© 2025 FoodShare. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
