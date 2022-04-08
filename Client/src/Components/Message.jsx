import React, { useState } from "react";
import "../css/feedback.css";

const Message = ({ type, children }) => {
  const [message, setMessage] = useState(true);
  setTimeout(() => setMessage(false), 4000);
  return (
    <div
      className={
        message ? `feedback-message ${type}` : `feedback-message ${type} d-none`
      }
    >
      <p className="info">{children}</p>
      <span
        className="fas fa-times close-feedback-btn"
        onClick={() => setMessage(false)}
      ></span>
    </div>
  );
};

export default Message;
