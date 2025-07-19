import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import Loader from "./Loader";
import { AuthContext } from "../Authentication/AuthContext";
import { toast, ToastContainer } from "react-toastify";

const FoodDetails = () => {
  const { id } = useParams();
  const [food, setFood] = useState(null);
  const [loading, setLoading] = useState(true);
  const [additionalNotes, setAdditionalNotes] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const {user} = useContext(AuthContext);
  const userEmail = user?.email || "" ;
  console.log(user);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/foodPost-available/${id}`)
      .then((res) => {
        setFood(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching food details:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <Loader />;

  if (!food || !food.foodData)
    return (
      <p className="text-center text-red-600 mt-6">Food item not found.</p>
    );

  const data = food.foodData;
  const requestDate = new Date().toISOString();

  const handleRequest = async () => {
    try {
      await axios.patch(`http://localhost:3000/foodPost-available/${food._id}`, {
        status: "requested",
        AdditionalNotes: additionalNotes, 
      });
console.log(additionalNotes);
      toast.success("Request successful!");
      setModalOpen(false);

      // Optionally refresh or redirect to update UI
    } catch (error) {
      console.error("Request failed:", error);
      toast.error("Failed to request food. Try again.");
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-[#FFEAEA] rounded-2xl shadow-md mt-10">
        <ToastContainer></ToastContainer>
      <h1 className="text-2xl text-center font-bold text-[#748DAE] mb-4">
        {data.foodName}
      </h1>
      <p className="text-[#4B5563] mb-2">
        <strong>Donator:</strong> {data.donorName}
      </p>
      <p className="text-[#4B5563] mb-2">
        <strong>Email:</strong> {data.donorEmail}
      </p>
      <p className="text-[#4B5563] mb-2">
        <strong>Quantity:</strong> {data.quantity}
      </p>
      <p className="text-[#4B5563] mb-2">
        <strong>Pickup Location:</strong> {data.pickupLocation}
      </p>
      <p className="text-[#4B5563] mb-2">
        <strong>Expires On:</strong> {new Date(data.expireDate).toLocaleDateString()}
      </p>
      <p className="text-[#4B5563] mb-4">
        <strong> Notes:</strong> {data.notes || "N/A"}
      </p>

      {/* Request Button */}
      <button
        className="btn btn-primary w-full"
        onClick={() => setModalOpen(true)}
      >
        Request
      </button>

      {/* DaisyUI Modal */}
      <input
        type="checkbox"
        id="request-modal"
        className="modal-toggle"
        checked={modalOpen}
        onChange={() => setModalOpen(!modalOpen)}
      />
      <label htmlFor="request-modal" className="modal cursor-pointer">
        <label
          className="modal-box relative max-w-lg"
          htmlFor=""
          onClick={(e) => e.stopPropagation()}
        >
          <h3 className="text-lg font-bold mb-4">Request Food</h3>

          <label className="block font-medium">Food Name</label>
          <input
            type="text"
            value={data.foodName}
            readOnly
            className="input input-bordered w-full mb-3"
          />

          <label className="block font-medium">Food Image</label>
          <img
            src={data.image}
            alt={data.foodName}
            className="mb-3 max-h-40 object-contain rounded"
          />

          <label className="block font-medium">Food ID</label>
          <input
            type="text"
            value={food._id}
            readOnly
            className="input input-bordered w-full mb-3"
          />

          <label className="block font-medium">Donator Email</label>
          <input
            type="email"
            value={data.donorEmail}
            readOnly
            className="input input-bordered w-full mb-3"
          />

          <label className="block font-medium">Donator Name</label>
          <input
            type="text"
            value={data.donorName}
            readOnly
            className="input input-bordered w-full mb-3"
          />

          <label className="block font-medium">User Email</label>
          <input
            type="email"
            value={`${userEmail}`}
            readOnly
            className="input input-bordered w-full mb-3"
          />

          <label className="block font-medium">Request Date</label>
          <input
            type="text"
            value={new Date(requestDate).toLocaleString()}
            readOnly
            className="input input-bordered w-full mb-3"
          />

          <label className="block font-medium">Pickup Location</label>
          <input
            type="text"
            value={data.pickupLocation}
            readOnly
            className="input input-bordered w-full mb-3"
          />

          <label className="block font-medium">Expire Date</label>
          <input
            type="text"
            value={new Date(data.expireDate).toLocaleDateString()}
            readOnly
            className="input input-bordered w-full mb-3"
          />

          <label className="block font-medium"> Additional Notes</label>
          <textarea
            value={additionalNotes}
            onChange={(e) => setAdditionalNotes(e.target.value)}
            placeholder="Add any notes"
            className="textarea textarea-bordered w-full mb-4"
            rows={3}
          />

          <div className="modal-action">
            <button onClick={handleRequest} className="btn btn-success">
              Request
            </button>
            <label
              htmlFor="request-modal"
              className="btn"
              onClick={() => setModalOpen(false)}
            >
              Cancel
            </label>
          </div>
        </label>
      </label>
    </div>
  );
};

export default FoodDetails;
