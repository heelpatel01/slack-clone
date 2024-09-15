import React, { useState, useEffect, useContext, useCallback } from "react";
import { IoFilterOutline } from "react-icons/io5";
import { FaRegPenToSquare } from "react-icons/fa6";
import ChatArea from "./ChatArea";
import axiosInstance from "../Utils/AxiosInstance";
import SignupDrawer from "./SignupDrawer";
import LoginDrawer from "./LoginDrawer";
import { AuthContext } from "../src/contexts/AuthProvider";

function ChannelsList() {
  const [showInput, setShowInput] = useState(false);
  const [newChannel, setNewChannel] = useState("");
  const [channelsList, setChannelsList] = useState([]);
  const [selectedChannel, setSelectedChannel] = useState("No-Channel");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const authState = useContext(AuthContext);
  const [channelId, setChannelId] = useState(null);

  const checkUser = useCallback(async () => {
    try {
      const { data } = await axiosInstance.get("/user/checkUserLogin");
      setIsLoggedIn(data.isLoggedIn);
    } catch (error) {
      console.log("Error checking user login status:", error);
    }
  }, []);

  const handleCreateChannel = async () => {
    if (!isLoggedIn) {
      setShowInput(false);
      console.log("Please log in first.");
      return;
    }

    if (newChannel.trim()) {
      try {
        const { data } = await axiosInstance.post("/channel/createChannel", {
          name: newChannel,
        });
        if (data?.channels?.name) {
          console.log("Channel created successfully:", data.channels.name);
          setShowInput(false);
          setNewChannel("");
          fetchChannelsList(); // Refresh the channel list after creation
        }
      } catch (error) {
        console.error("Error creating channel:", error);
      }
    }
  };

  const fetchChannelsList = useCallback(async () => {
    try {
      const { data } = await axiosInstance.get("/channel/fetchChannels");
      if (data?.channels) {
        setChannelsList(data.channels);
      } else {
        console.error("Error fetching channels list.");
      }
    } catch (error) {
      console.error("Error fetching channels list:", error);
    }
  }, []);

  useEffect(() => {
    checkUser();
    fetchChannelsList();
  }, [checkUser, fetchChannelsList, authState.universalLoggedin]);

  return (
    <div className="p-1 h-screen w-80 mt-12 bg-[#1A1D21] border-solid ml-20 fixed overflow-auto rounded-md">
      <div className="flex space-x-2 items-center">
        <div className="mr-24 text-white">Channels</div>

        <label className="inline-flex items-center cursor-pointer">
          <span className="ms-3 text-sm font-medium text-gray-900 dark:text-white">
            Unreads
          </span>
          <input type="checkbox" className="sr-only peer" />
          <div className="relative w-8 h-4 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-900 peer-checked:bg-[#39E500]"></div>
        </label>
        <IoFilterOutline className="cursor-pointer text-white" />
        <FaRegPenToSquare
          className="cursor-pointer text-white"
          onClick={() => setShowInput(!showInput)}
        />
      </div>

      {/* New Channel Input Section */}
      {showInput && (
        <div className="mt-4 bg-[#000000] p-2 rounded-lg">
          <input
            type="text"
            value={newChannel}
            onChange={(e) => setNewChannel(e.target.value)}
            placeholder="Enter channel name"
            className="w-full p-2 text-white bg-[#1A1D21] border-b-2 border-[#0576B9] outline-none"
          />
          <button
            onClick={handleCreateChannel}
            className="mt-2 w-full p-2 bg-[#0576B9] text-white rounded-lg hover:bg-[#39E500] transition duration-300"
          >
            Create
          </button>
        </div>
      )}

      <div className="channel-list flex-col mt-4">
        <ul className="space-y-2">
          {channelsList.length > 0 ? (
            channelsList.map((channel, idx) => (
              <li
                key={idx}
                className="flex items-center font-bold text-white py-2 px-4 bg-gray-800 rounded-lg hover:bg-[#CC4400] transition duration-300 cursor-pointer shadow-md"
                onClick={() => {
                  setSelectedChannel(channel.name);
                  setChannelId(channel._id);
                }}
              >
                <img
                  src="https://as2.ftcdn.net/v2/jpg/01/15/52/31/1000_F_115523122_e4ry4EKsouP9kl2auNN1wSREoJq3kdcE.jpg"
                  alt="Channel icon"
                  className="w-8 h-8 rounded-2xl mr-4"
                />
                {channel.name}
              </li>
            ))
          ) : (
            <li className="text-white">No channels available</li>
          )}
        </ul>
      </div>

      {isLoggedIn ? (
        <ChatArea
          selectedChannel={selectedChannel}
          channelId={channelId}
        />
      ) : (
        <div className="relative flex space-x-1">
          <SignupDrawer />
          <LoginDrawer />
        </div>
      )}
    </div>
  );
}

export default ChannelsList;
