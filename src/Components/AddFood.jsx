import React from "react";
import { useContext } from "react";

import { toast } from "react-toastify";

import { AuthContext } from "../Authentication/AuthContext";
import axios from "axios";

const AddFood = () => {
  const { user } = useContext(AuthContext);

  const handleAddFood = (e) => {
    e.preventDefault();
    const form = e.target;
    const foodData = {
      foodName: form.foodName.value,
      foodImage: form.foodImage.value,
      quantity: form.quantity.value,
      pickupLocation: form.pickupLocation.value,
      expireDate: form.expireDate.value,
      notes: form.notes.value,
      donorName: user?.displayName,
      donorEmail: user?.email,
      donorImage: user?.photoURL,
      status: "available",
    };

    
    axios.post('https://food-share-dun.vercel.app/foodPost',{
      foodData
    }  ).then( (res) =>{}  )
    .catch((error) =>{ toast.error(error) } )


  
    toast.success("Food item added successfully!");
    form.reset();
  };

  return (
    <div className="max-w-4xl mx-auto my-12 p-6 rounded-2xl shadow-md bg-[#a988d6ad] border border-[#a8a4ae]">
     
      <h2 className="text-3xl font-semibold text-center text-[#301452] mb-8">
        🍽️ Add a New Food Item
      </h2>
      <form onSubmit={handleAddFood} className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Food Name */}
        <div>
          <label className="block text-[#301452] font-medium mb-1">Food Name</label>
          <input
            type="text"
            name="foodName"
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#A3DC9A] bg-white"
            placeholder="Enter food name"
          />
        </div>

      
        <div>
          <label className="block text-[#301452] font-medium mb-1">Food Image URL</label>
          <input
            type="text"
            name="foodImage"
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#A3DC9A] bg-white"
            placeholder="Enter image URL"
          />
        </div>

       
        <div>
          <label className="block text-[#301452] font-medium mb-1">Food Quantity</label>
          <input
            type="number"
            name="quantity"
            required
            min="1"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#A3DC9A] bg-white"
            placeholder="How many servings?"
          />
        </div>

        
        <div>
          <label className="block text-[#301452] font-medium mb-1">Pickup Location</label>
          <input
            type="text"
            name="pickupLocation"
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#A3DC9A] bg-white"
            placeholder="Enter location"
          />
        </div>

        
        <div>
          <label className="block text-[#301452] font-medium mb-1">Expire Date & Time</label>
          <input
            type="datetime-local"
            name="expireDate"
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#A3DC9A] bg-white"
          />
        </div>

        
        <div>
          <label className="block text-[#301452] font-medium mb-1">Additional Notes</label>
          <textarea
            name="notes"
            rows="3"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#A3DC9A] bg-white resize-none"
            placeholder="Any important info (e.g., halal, spicy, etc.)"
          ></textarea>
        </div>

        
        <div className="col-span-full bg-[#FFEAEA] rounded-md p-4 mt-2">
          <h4 className="text-[#301452] font-semibold mb-2">Donor Info</h4>
          <p><span className="font-medium">Name:</span> {user?.displayName || "N/A"}</p>
          <p><span className="font-medium">Email:</span> {user?.email || "N/A"}</p>
        </div>

        
        <div className="col-span-full text-center mt-4">
          <button
            type="submit"
            className="bg-[#A3DC9A] hover:bg-[#9ECAD6] text-[#3b3b3b] font-semibold px-6 py-2 rounded-full shadow-md transition duration-300"
          >
            ➕ Add Food
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddFood;
