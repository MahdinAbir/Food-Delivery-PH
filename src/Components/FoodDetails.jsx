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
  const { user } = useContext(AuthContext);
  const userEmail = user?.email || "";
  const requestDate = new Date().toISOString();

  useEffect(() => {
    if (!user) return;

    user.getIdToken().then((token) => {
      axios
        .get(`http://localhost:3000/foodPost-available/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setFood(res.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching food details:", error);
          setLoading(false);
        });
    });
  }, [id, user]);

  if (loading) return <Loader />;
  if (!food || !food.foodData)
    return <p className="text-center text-red-600 mt-6">Food item not found.</p>;

  const data = food.foodData;

  const handleRequest = async () => {
    try {
      const token = await user.getIdToken();
      await axios.patch(
        `http://localhost:3000/foodPost-available/${food._id}`,
        {
          status: "requested",
          AdditionalNotes: additionalNotes,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success("Request successful!");
      setModalOpen(false);
      setTimeout(() => {
        window.history.back();
      }, 2000);
    } catch (error) {
      console.error("Request failed:", error);
      toast.error("Failed to request food. Try again.");
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-[#FFEAEA] rounded-2xl shadow-md mt-10">
      <ToastContainer />
      
      <h1 className="text-2xl text-center font-bold text-[#748DAE] mb-4">
        {data.foodName}
      </h1>
      <p className="text-[#4B5563] mb-2"><strong>Donator:</strong> {data.donorName}</p>
      
      <p className="text-[#4B5563] mb-2"><strong>Email:</strong> {data.donorEmail}</p>
      <p className="text-[#4B5563] mb-2"><strong>Quantity:</strong> {data.quantity}</p>
      <p className="text-[#4B5563] mb-2"><strong>Pickup Location:</strong> {data.pickupLocation}</p>
      <p className="text-[#4B5563] mb-4"><strong>Expires On:</strong> {new Date(data.expireDate).toLocaleDateString()}</p>
      <p className="text-[#4B5563] mb-4"><strong>Notes:</strong> {data.notes || "N/A"}</p>

      <button
        className="btn btn-primary w-full"
        onClick={() => setModalOpen(true)}
      >
        Request
      </button>

      {/* ✅ MODAL rendered conditionally */}
      {modalOpen && (
        <div className="modal modal-open">
          <div
            className="modal-box relative max-w-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-lg font-bold mb-4">Request Food</h3>

            <input
              type="text"
              value={data.foodName}
              readOnly
              className="input input-bordered w-full mb-3"
              placeholder="Food Name"
            />
            
            <input
              type="text"
              value={food._id}
              readOnly
              className="input input-bordered w-full mb-3"
              placeholder="Food ID"
            />
            <input
              type="email"
              value={data.donorEmail}
              readOnly
              className="input input-bordered w-full mb-3"
              placeholder="Donor Email"
            />
            <input
              type="text"
              value={data.donorName}
              readOnly
              className="input input-bordered w-full mb-3"
              placeholder="Donor Name"
            />
            <input
              type="email"
              value={userEmail}
              readOnly
              className="input input-bordered w-full mb-3"
              placeholder="User Email"
            />
            <input
              type="text"
              value={new Date(requestDate).toLocaleString()}
              readOnly
              className="input input-bordered w-full mb-3"
              placeholder="Request Date"
            />
            <input
              type="text"
              value={data.pickupLocation}
              readOnly
              className="input input-bordered w-full mb-3"
              placeholder="Pickup Location"
            />
            <input
              type="text"
              value={new Date(data.expireDate).toLocaleDateString()}
              readOnly
              className="input input-bordered w-full mb-3"
              placeholder="Expire Date"
            />

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
              <button onClick={() => setModalOpen(false)} className="btn">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FoodDetails;
