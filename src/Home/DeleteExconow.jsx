import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const DeleteExconow = () => {
  const [excodata, setExcoData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch Exco data
  useEffect(() => {
    const fetchExcoData = async () => {
      try {
        const response = await axios.get("https://taiwoakinpennu2.pythonanywhere.com/port/");
        console.log("Fetched data:", response.data); // Debugging the response
        if (Array.isArray(response.data)) {
          setExcoData(response.data);
        } else {
          throw new Error("API response is not an array");
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching exco data:", error);
        setLoading(false);
      }
    };

    fetchExcoData();
  }, []);

  // Handle Delete request
  const handleDelete = async (id) => {
    // Optimistically remove the item from the UI
    const updatedData = excodata.filter((el) => el.id !== id);
    setExcoData(updatedData);

    try {
      await axios.delete(`https://taiwoakinpennu2.pythonanywhere.com/port/${id}/`);
      toast.success("Exco deleted successfully!");
    } catch (error) {
      console.error("Error deleting exco:", error);
      alert("Failed to delete exco.");

      // Revert state if the deletion fails
      setExcoData(excodata);
    }
  };

  // Debugging: log the loading state and exco data
  if (loading) {
    return <div>Loading...</div>;
  }

  if (excodata.length === 0) {
    return <div>No Exco data available.</div>;
  }

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      {excodata.map((el) => {
        console.log(el); // Debugging the entire object to confirm all fields are present
        return (
          <div
            key={el.id}
            style={{
              width: "300px",
              border: "1px solid #ccc",
              borderRadius: "10px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              padding: "20px",
              backgroundColor: "#fff",
              textAlign: "center",
            }}
          >
            {el.photo && (
              <img
                src={el.photo}
                alt={`${el.name}'s photo`}
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                  borderRadius: "10px 10px 0 0",
                  marginBottom: "15px",
                }}
              />
            )}
            <h3 style={{ fontSize: "1.2em", color: "#333", marginBottom: "10px" }}>{el.name}</h3>
            <p style={{ fontSize: "0.9em", color: "#555", margin: "5px 0" }}>
              <strong>Department:</strong> {el.department}
            </p>
            <p style={{ fontSize: "0.9em", color: "#555", margin: "5px 0" }}>
              <strong>Degree:</strong> {el.degree}
            </p>
            <p style={{ fontSize: "0.9em", color: "#555", margin: "5px 0" }}>
              <strong>Mobile:</strong> {el.mobile}
            </p>
            <button
              onClick={() => handleDelete(el.id)}
              style={{
                marginTop: "15px",
                padding: "10px 15px",
                border: "none",
                borderRadius: "5px",
                backgroundColor: "#ff4d4f",
                color: "#fff",
                cursor: "pointer",
                fontSize: "0.9em",
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default DeleteExconow;
