import React from "react";
import { AiOutlineSend, AiOutlinePaperClip } from "react-icons/ai"; // Icons
import { BsEmojiSmile } from "react-icons/bs";
import {  } from "react-icons/ai"; // Icons


import Messages from "./Messages";
import { Input } from "react-chat-elements";

function ChatArea() {
  return (
    <div className="ml-80 ">
      {/* Channel Name */}
      <div
        style={{ marginLeft: "" }}
        className="flex w-96 -mt-64 -ml-28 mb-3 justify-center items-center"
      >
        <img
          src="https://ca.slack-edge.com/T06L3R0J3-U06BXCD6NRK-705cafff859e-192"
          className="h-10 w-10 mr-2 rounded-xl ml-3"
        />
        <div> Team-Google </div>
      </div>

      {/* Chat messages area */}
      <div
        style={{ height: "39rem", width: "65rem" }}
        className="h-96 w-96 p-4  bg-gray-950 rounded-sm text-black flex flex-col"
      >
        <Messages />
      </div>

      {/* Input Box Area */}
      <div style={{ height: '', width: '65rem' }} className="flex flex-col justify-end">
  <div className="flex items-center p-3 bg-gray-950 border-t border-gray-300 rounded-lg">
    
    {/* Emoji Icon */}
    <button className="p-2 rounded-lg hover:bg-gray-950 transition">
      <BsEmojiSmile size={24} />
    </button>

    {/* Input Field */}
    <input
      type="text"
      placeholder="Message #general"
      className="flex-1 mx-3 p-3 rounded-lg text-white bg-gray-900 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />

    {/* File Attachment Icon */}
    <button className="p-2 rounded-lg hover:bg-gray-950 transition">
      <AiOutlinePaperClip size={24} />
    </button>

    {/* Send Icon */}
    <button className="p-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition">
      <AiOutlineSend size={24} />
    </button>
  </div>
</div>

    </div>
  );
}

export default ChatArea;
