import React from "react";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    // Redirect to home or other relevant page
    navigate("/");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Thank You for Your Payment!</h1>
      <p>Your transaction was successful. We appreciate your support.</p>
      <p>If you have any questions, feel free to contact our support team.</p>

      <button
        onClick={handleContinue}
        style={{
          padding: "10px 20px",
          backgroundColor: "#4caf50",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          marginTop: "20px",
        }}
      >
        Continue
      </button>
    </div>
  );
};

export default Success;