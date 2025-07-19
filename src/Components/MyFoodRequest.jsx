import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../Authentication/AuthContext";
import Loader from "./Loader"; // your loader component

const MyFoodRequest = () => {
  const { user } = useContext(AuthContext);
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.email) return;

    setLoading(true);

    axios
      .get(`http://localhost:3000/foodRequest`, {
        params: {
          email: user.email,
          status: "requested",
        },
      })
      .then((res) => {
        setRequests(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching requests:", error);
        setLoading(false);
      });
  }, [user]);

  if (loading) return <Loader />;

  if (requests.length === 0)
    return (
      <p className="text-center text-gray-500 mt-6">
        You have not requested any foods yet.
      </p>
    );

  return (
    <div className="max-w-5xl mx-auto my-10 p-6 bg-[#FFFDEC] rounded-xl shadow-md">
      <h2 className="text-2xl font-bold text-center text-[#748DAE] mb-6">
        My Food Requests
      </h2>
      <div className="overflow-x-auto">
        <table className="table w-full border border-gray-300">
          <thead className="bg-[#A3DC9A] text-gray-800">
            <tr>
              <th>Food Name</th>
              <th>Donor Name</th>
              <th>Pickup Location</th>
              <th>Expire Date</th>
              <th>Request Date</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((food) => (
              <tr key={food._id} className="hover:bg-[#F7F7F7]">
                <td>{food.foodData.foodName}</td>
                <td>{food.foodData.donorName}</td>
                <td>{food.foodData.pickupLocation}</td>
                <td>{new Date(food.foodData.expireDate).toLocaleDateString()}</td>
                <td>{new Date(food.foodData.requestDate).toLocaleString()}</td>
                <td>{food.foodData.notes || "N/A"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyFoodRequest;
