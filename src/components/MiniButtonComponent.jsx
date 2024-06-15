import React from "react";
import { useState } from "react";
import "./styles.css";
import PulseLoader from "react-spinners/PulseLoader";

function MiniButtonComponent({ text, onClick, style, loading }) {
  const [touchStart, setTouchStart] = useState(false);
  return (
    <button
      onTouchStart={() => {
        setTouchStart(true);
      }}
      onTouchEnd={() => {
        setTouchStart(false);
      }}
      onClick={onClick}
      style={{
        width: "100%",
        padding: "11px 11px",
        backgroundColor: "#1a74e4",
        borderRadius: "8px",
        textAlign: "center",
        color: "#fff",
        marginTop: "16px",
        border: "none",
        borderWidth: "0px",
        fontSize: "16px",
        fontWeight: "bold",
        opacity: touchStart ? 0.6 : 1,
        ...style,
      }}
    >
      {loading ? (
        <PulseLoader
        loading={loading}
        size={6}
        color="#fff"

      />
      ) : (
        <p>{text}</p>
      )}
    </button>
  );
}

export default MiniButtonComponent;
