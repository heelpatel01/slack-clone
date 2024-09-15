import React from "react";
import PropTypes from "prop-types";

function Messages({ messages }) {
  return (
    <div>
      {messages.map((msg, idx) => (
        <div key={idx} className="text-white mb-2">
          <strong>{msg.userName}:</strong> {msg.message}
        </div>
      ))}
    </div>
  );
}

Messages.propTypes = {
  messages: PropTypes.array.isRequired, // Validate messages prop
};

export default Messages;
