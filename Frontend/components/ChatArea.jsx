import React from "react";
import Messages from "./Messages";
import { Input } from "react-chat-elements";

function ChatArea() {
  return (
    <div className="fixed block ml-80 -mt-64">
      {/* Channel Name */}
      <div className="flex justify-center items-center">
        <img
          src="https://ca.slack-edge.com/T06L3R0J3-U06BXCD6NRK-705cafff859e-192"
          className="h-10 w-10 mr-2 rounded-xl ml-3"
        />
        <div> Team-Google </div>
      </div>

      {/* Chat messages area */}
      <div className="h-96 w-96 p-4  bg-gray-100 text-black flex flex-col">
        <Messages />
      </div>
      {/* Input Box Area */}
      <div>
        <input></input>
      </div>
    </div>
  );
}

export default ChatArea;
