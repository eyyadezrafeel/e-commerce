import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Requests() {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch all store requests
  const fetchRequests = async () => {
    try {
      setLoading(true);
      const res = await axios.get("http://localhost:5000/api/store/requests", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`, // admin token
        },
      });
      setRequests(res.data);
    } catch (error) {
      console.error("Error fetching requests:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  // Accept a request
const handleAccept = async (id) => {
  try {
    console.log('Accepting request with ID:', id);
    const response = await axios.patch(
      `http://localhost:5000/api/store/requests/${id}/accept`, 
      null, 
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    console.log('Accept response:', response.data);
    setRequests((prev) => prev.filter((r) => r._id !== id));
  } catch (error) {
    console.error("Error accepting request:", error);
    console.error("Error response:", error.response?.data);
    console.error("Error status:", error.response?.status);
  }
};

  // Reject a request
 const handleReject = async (id) => {
  try {
    console.log('Rejecting request with ID:', id);
    const response = await axios.patch(
      `http://localhost:5000/api/store/requests/${id}/reject`, 
      null, 
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    console.log('Reject response:', response.data);
    setRequests((prev) => prev.filter((r) => r._id !== id));
  } catch (error) {
    console.error("Error rejecting request:", error);
    console.error("Error response:", error.response?.data);
    console.error("Error status:", error.response?.status);
  }
};

  if (loading) return <p>Loading requests...</p>;
  if (!requests.length) return <p>No pending requests</p>;

  return (
    <div className="p-6 space-y-4 mt-30">
      <h2 className="text-2xl font-bold">Pending Store Requests</h2>
      {requests.map((req) => (
        <div
          key={req._id}
          className="border p-4 rounded-md flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
        >
          <div>
            <p><strong>Store Name:</strong> {req.storeName}</p>
            <p><strong>Store Email:</strong> {req.storeEmail}</p>
            <p><strong>Phone:</strong> {req.phoneNumber || "N/A"}</p>
            <p><strong>Description:</strong> {req.description}</p>
            <p><strong>User:</strong> {req.user?.name || req.userEmail}</p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => handleAccept(req._id)}
              disabled = {loading}
              className="bg-green-500 text-white px-4 py-2 rounded-md cursor-pointer"
            >
              Accept
            </button>
            <button
              onClick={() => handleReject(req._id)}
              className="bg-red-500 text-white px-4 py-2 rounded-md cursor-pointer"
            >
              Reject
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
