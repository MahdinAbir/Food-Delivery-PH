import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../Authentication/AuthContext";
import Loader from "./Loader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ManageMyFoods = () => {
  const { user } = useContext(AuthContext);
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);

  const [showModal, setShowModal] = useState(false);
  const [selectedFood, setSelectedFood] = useState(null);
  const [formData, setFormData] = useState({
    foodName: "",
    quantity: "",
    pickupLocation: "",
    expireDate: "",
    notes: "",
    foodImage: "",
    status: "",
  });

  useEffect(() => {
    if (!user) return;

    user.getIdToken().then((token) => {
      axios
        .get("https://food-share-dun.vercel.app/myFoods", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setFoods(res.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Failed to fetch foods:", error);
          toast.error("Failed to load your foods.");
          setLoading(false);
        });
    });
  }, [user]);

  const openUpdateModal = (food) => {
    setSelectedFood(food);
    setFormData({
      foodName: food.foodData?.foodName || "",
      quantity: food.foodData?.quantity || "",
      pickupLocation: food.foodData?.pickupLocation || "",
      expireDate: food.foodData?.expireDate
        ? new Date(food.foodData.expireDate).toISOString().slice(0, 10)
        : "",
      notes: food.foodData?.notes || "",
      foodImage: food.foodData?.foodImage || "",
      status: food.foodData?.status || "available",
    });
    setShowModal(true);
  };

  const closeUpdateModal = () => {
    setShowModal(false);
    setSelectedFood(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdateSubmit = () => {
    if (!selectedFood) return;

    user.getIdToken().then((token) => {
      const updatePayload = {};
      Object.entries(formData).forEach(([key, value]) => {
        if (value !== "") {
          updatePayload[`foodData.${key}`] = value;
        }
      });

      updatePayload["foodData.updatedAt"] = new Date();

      axios
        .patch(
          `https://food-share-dun.vercel.app/foodPost-available/${selectedFood._id}`,
          updatePayload,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then(() => {
          toast.success("Food updated successfully!");
          closeUpdateModal();
          return axios.get("https://food-share-dun.vercel.app/myFoods", {
            headers: { Authorization: `Bearer ${token}` },
          });
        })
        .then((res) => {
          setFoods(res.data);
        })
        .catch((error) => {
          console.error("Update failed:", error);
          toast.error("Failed to update food.");
        });
    });
  };

  const handleDelete = (foodId) => {
    if (!window.confirm("Are you sure you want to delete this food?")) return;

    user.getIdToken().then((token) => {
      axios
        .delete(`https://food-share-dun.vercel.app/foodPost-available/${foodId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(() => {
          toast.success("Food deleted successfully!");
          setFoods((prev) => prev.filter((f) => f._id !== foodId));
        })
        .catch((error) => {
          console.error("Delete failed:", error);
          toast.error("Failed to delete food.");
        });
    });
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      
      <div className="max-w-4xl mx-auto my-12 px-4">
        <h2 className="text-3xl font-semibold text-center text-[#5A6B7B] mb-6">
          🍱 Manage My Foods
        </h2>
        <div className="overflow-x-auto bg-white shadow-md rounded-lg border border-[#E2E8F0]">
          <table className="min-w-full table-auto">
            <thead className="bg-[#F0F4F8] text-[#6B7280]">
              <tr>
                <th className="px-4 py-3 text-left">Image</th>
                <th className="px-4 py-3 text-left">Name</th>
                <th className="px-4 py-3 text-left">Quantity</th>
                <th className="px-4 py-3 text-left">Expire Date</th>
                <th className="px-4 py-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {foods.length === 0 ? (
                <tr>
                  <td colSpan="5" className="text-center py-8 text-gray-400 italic">
                    No foods added yet.
                  </td>
                </tr>
              ) : (
                foods.map((item) => (
                  <tr
                    key={item._id}
                    className="border-b hover:bg-[#F9FAFB] transition duration-200"
                  >
                    <td className="px-4 py-3">
                      <img
                        src={item.foodData?.foodImage}
                        alt={item.foodData?.foodName}
                        className="w-12 h-12 object-cover rounded-md"
                      />
                    </td>
                    <td className="px-4 py-3 text-sm font-medium text-gray-700">
                      {item.foodData?.foodName}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600">
                      {item.foodData?.quantity}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600">
                      {item.foodData?.expireDate
                        ? new Date(item.foodData.expireDate).toLocaleDateString()
                        : "N/A"}
                    </td>
                    <td className="px-4 py-3 text-center space-x-3">
                      <button
                        onClick={() => openUpdateModal(item)}
                        className="bg-green-500 hover:bg-green-600 text-white text-sm px-4 py-1 rounded shadow-md transition"
                      >
                        ✏️ Update
                      </button>
                      <button
                        onClick={() => handleDelete(item._id)}
                        className="bg-red-500 hover:bg-red-600 text-white text-sm px-4 py-1 rounded shadow-md transition"
                      >
                        🗑️ Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Update Modal */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50"
          onClick={closeUpdateModal}
        >
          <div
            className="bg-white rounded-lg p-6 w-96 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-xl font-semibold mb-4">Update Food</h3>

            <label className="block mb-2">
              Name:
              <input
                type="text"
                name="foodName"
                value={formData.foodName}
                onChange={handleInputChange}
                placeholder="Food Name"
                className="w-full border rounded px-3 py-2 mt-1"
              />
            </label>

            <label className="block mb-2">
              Quantity:
              <input
                type="text"
                name="quantity"
                value={formData.quantity}
                onChange={handleInputChange}
                placeholder="Quantity"
                className="w-full border rounded px-3 py-2 mt-1"
              />
            </label>

            <label className="block mb-2">
              Pickup Location:
              <input
                type="text"
                name="pickupLocation"
                value={formData.pickupLocation}
                onChange={handleInputChange}
                placeholder="Pickup Location"
                className="w-full border rounded px-3 py-2 mt-1"
              />
            </label>

            <label className="block mb-2">
              Expire Date:
              <input
                type="date"
                name="expireDate"
                value={formData.expireDate}
                onChange={handleInputChange}
                className="w-full border rounded px-3 py-2 mt-1"
              />
            </label>

            <label className="block mb-2">
              Notes:
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleInputChange}
                placeholder="Additional notes"
                className="w-full border rounded px-3 py-2 mt-1"
                rows={3}
              />
            </label>

            <label className="block mb-4">
              Image URL:
              <input
                type="text"
                name="foodImage"
                value={formData.foodImage}
                onChange={handleInputChange}
                placeholder="Image URL"
                className="w-full border rounded px-3 py-2 mt-1"
              />
            </label>

            <label className="block mb-4">
              Status:
              <select
                name="status"
                value={formData.status}
                onChange={handleInputChange}
                className="w-full border rounded px-3 py-2 mt-1"
              >
                <option value="available">Available</option>
                <option value="requested">Requested</option>
                <option value="expired">Expired</option>
              </select>
            </label>

            <div className="flex justify-end space-x-3">
              <button
                onClick={closeUpdateModal}
                className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleUpdateSubmit}
                className="px-4 py-2 rounded bg-green-600 text-white hover:bg-green-700 transition"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ManageMyFoods;
