import React, { useState, useEffect } from "react";
import { AiOutlineSend, AiOutlinePaperClip } from "react-icons/ai";
import { BsEmojiSmile } from "react-icons/bs";
import PropTypes from "prop-types";
import axiosInstance from "../Utils/AxiosInstance";
import dayjs from "dayjs";

function ChatArea(props) {
  const [message, setMessage] = useState("");
  const [allMessages, setAllMessages] = useState([]);
  const [showInviteDialog, setShowInviteDialog] = useState(false);
  const [usersToInvite, setUsersToInvite] = useState([]);

  // Fetch messages initially and start polling for new messages
  useEffect(() => {
    if (!props.channelId) return;

    // Function to fetch messages
    const fetchMessages = async () => {
      try {
        const response = await axiosInstance.get(
          `/message/channels/${props.channelId}/messages`
        );
        if (response.data && response.data.success) {
          setAllMessages(response.data.content);
        }
      } catch (error) {
        console.log("Error fetching messages:", error);
      }
    };

    // Initial fetch
    fetchMessages();

    // Poll every 5 seconds
    const intervalId = setInterval(() => {
      fetchMessages();
    }, 5000);

    // Cleanup interval on component unmount or when channelId changes
    return () => {
      setAllMessages([]);
      clearInterval(intervalId);
    };
  }, [props.channelId]);

  // Function to send a message
  const messageCreation = async () => {
    if (message.trim() === "") return;

    try {
      const response = await axiosInstance.post(
        `/message/channels/${props.channelId}/messages`,
        { message: message }
      );

      if (response.data && response.data.success) {
        setMessage("");
        setAllMessages([...allMessages, response.data.content]); // Append new message
      } else {
        console.log("Failed to create message");
      }
    } catch (error) {
      console.log("Error while creating a message", error);
    }
  };

  // Function to fetch users who are not in the channel
  const fetchUsersToInvite = async () => {
    try {
      const response = await axiosInstance.get(
        `/user/channels/${props.channelId}/invite/`
      );
      if (response.data && response.data.success) {
        setUsersToInvite(response.data.message);
        setShowInviteDialog(true);
      } else {
        console.log("Failed to fetch users to invite");
      }
    } catch (error) {
      console.log("Error fetching users to invite", error);
    }
  };

  const inviteUser = async (userId) => {
    try {
      const response = await axiosInstance.post(
        `/channel/${props.channelId}/invite/${userId}`
      );
      if (response.data && response.data.success) {
        console.log("User invited successfully");
        setUsersToInvite(usersToInvite.filter((user) => user._id !== userId));
      } else {
        console.log("Failed to invite user");
      }
    } catch (error) {
      console.log("Error inviting user:", error);
    }
  };

  // Group messages by date
  const groupMessagesByDate = (messages) => {
    return messages.reduce((acc, msg) => {
      const messageDate = dayjs(msg.createdAt).format("YYYY-MM-DD");
      if (!acc[messageDate]) {
        acc[messageDate] = [];
      }
      acc[messageDate].push(msg);
      return acc;
    }, {});
  };

  const groupedMessages = groupMessagesByDate(allMessages);

  return (
    <div
      className="fixed bottom-0 right-0 w-80 h-96 bg-gray-950 rounded-lg p-4 flex flex-col"
      style={{ right: 0, bottom: 0, height: "94vh", width: "72vw" }}
    >
      {/* Channel Name */}
      <div className="flex items-center mb-3">
        <img
          src="https://ca.slack-edge.com/T06L3R0J3-U06BXCD6NRK-705cafff859e-192"
          className="h-10 w-10 mr-2 rounded-xl"
          alt="Channel"
        />
        <div className="text-white">{props.selectedChannel}</div>
      </div>

      {/* Invite Button */}
      <button
        onClick={fetchUsersToInvite}
        className="mb-2 p-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
      >
        Invite Users
      </button>

      {/* Chat messages area */}
      <div className="flex-1 overflow-auto bg-gray-800 rounded-lg p-2">
        {Object.keys(groupedMessages).length > 0 ? (
          Object.keys(groupedMessages).map((date) => (
            <div key={date}>
              {/* Date separator */}
              <div className="text-center text-gray-400 my-3">
                {dayjs(date).format("MMMM D, YYYY")}
              </div>

              {/* Messages for this date */}
              {groupedMessages[date].map((msg) => (
                <div
                  key={msg._id}
                  className={`mb-4 flex ${
                    msg.sender === "your_user_id"
                      ? "justify-end"
                      : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-xs p-3 rounded-lg shadow-lg ${
                      msg.sender === "your_user_id"
                        ? "bg-blue-500 text-white"
                        : "bg-gray-700 text-gray-100"
                    }`}
                  >
                    <div className="font-semibold text-sm text-green-400">
                      {msg.sender === "your_user_id"
                        ? "You"
                        : msg.sender.userName}
                    </div>
                    <div>{msg.message}</div>
                    <div className="text-xs text-gray-400 mt-1">
                      {dayjs(msg.createdAt).format("h:mm A")}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))
        ) : (
          <div className="text-gray-500">No messages yet...</div>
        )}
      </div>

      {/* Input Box Area */}
      <div className="flex items-center p-2 bg-gray-950 border-t border-gray-700">
        <button className="p-2 rounded-lg hover:bg-gray-700 transition">
          <BsEmojiSmile size={24} className="text-white" />
        </button>

        <input
          type="text"
          placeholder="Message..."
          className="flex-1 mx-2 p-2 rounded-lg text-white bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={message}
          onKeyDown={(e) => {
            console.log("check208", e.key);

            if (e.key === "Enter") {
              messageCreation();
            }
          }}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button className="p-2 rounded-lg hover:bg-gray-700 transition">
          <AiOutlinePaperClip size={24} className="text-white" />
        </button>

        <button
          className="p-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition"
          onClick={messageCreation}
          // onKeyDown={messageCreation}
        >
          <AiOutlineSend size={24} />
        </button>
      </div>

      {/* Invite Dialog */}
      {showInviteDialog && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="bg-white text-black p-6 rounded-lg shadow-lg w-1/2">
            <h2 className="text-lg font-bold mb-4">Invite Users</h2>
            <ul className="space-y-2">
              {usersToInvite.length > 0 ? (
                usersToInvite.map((user) => (
                  <li
                    key={user._id}
                    className="flex justify-between items-center"
                  >
                    <span>{user.userName}</span>
                    <button
                      className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                      onClick={() => inviteUser(user._id)}
                    >
                      Invite
                    </button>
                  </li>
                ))
              ) : (
                <li>No users available to invite.</li>
              )}
            </ul>
            <button
              className="mt-4 p-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
              onClick={() => setShowInviteDialog(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

ChatArea.propTypes = {
  selectedChannel: PropTypes.string.isRequired, // Validate selectedChannel as a required string
  channelId: PropTypes.string.isRequired || null, // Validate channelId as a required string
};

export default ChatArea;
