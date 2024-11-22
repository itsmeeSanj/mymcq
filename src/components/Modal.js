import React from "react";

const styleModal = {
  border: "1px solid #ddd",
  borderRadius: "5px",
  padding: "12px",
  position: "absolute",
  right: "0",
  background: "#fff",
  top: "100%",
  width: "250px",
};

export default function Modal({ children }) {
  return <div style={styleModal}>{children}</div>;
}
