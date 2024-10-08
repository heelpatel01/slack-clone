// import React, { useState } from "react";
// import { AiOutlineSend, AiOutlinePaperClip } from "react-icons/ai";
// import PropTypes from "prop-types";
// import { BsEmojiSmile } from "react-icons/bs";

// import Messages from "./Messages";
// import axiosInstance from "../Utils/AxiosInstance";

// function ChatArea(props) {
//   const [message, setMessage] = useState("");
//   const [allMessages, setAllMessages] = useState([]);

//   async function messageCreation(e) {
//     if (message.trim() == "") {
//       return;
//     }
//     try {
//       const response = await axiosInstance.post(
//         `/message/channels/${props.channelId}/messages`,
//         {
//           message: message,
//         }
//       );

//       console.log(response);

//       if (response.data && response.data.success) {
//         console.log("Message Created Successfully");
//         setMessage("");
//       } else {
//         console.log("Failed to create message");
//         return;
//       }
//     } catch (error) {
//       console.log("Error while creating a message");
//       return;
//     }
//   }

//   async function fetchAllMessages(e) {
//     if (props.channelId == null) return;
//     const response = await axiosInstance.get(
//       `/message/channels/${props.channelId}/messages`
//     );

//     if (response.data && response.data.success) {
//       setAllMessages(response.data.content);
//     }
//   }
//   return (
//     <div
//       className="fixed bottom-0 right-0 w-80 h-96 bg-gray-950 rounded-lg p-4 flex flex-col"
//       style={{ right: 0, bottom: 0, height: "94vh", width: "72vw" }}
//     >
//       {/* Channel Name */}
//       <div className="flex items-center mb-3">
//         <img
//           src="https://ca.slack-edge.com/T06L3R0J3-U06BXCD6NRK-705cafff859e-192"
//           className="h-10 w-10 mr-2 rounded-xl"
//           alt="Channel"
//         />
//         <div className="text-white">{props.selectedChannel}</div>
//       </div>

//       {/* Chat messages area */}
//       <div className="flex-1 overflow-auto bg-gray-800 rounded-lg p-2">
//         {/* <Messages /> */}
//       </div>

//       {/* Input Box Area */}
//       <div className="flex items-center p-2 bg-gray-950 border-t border-gray-700">
//         <button className="p-2 rounded-lg hover:bg-gray-700 transition">
//           <BsEmojiSmile size={24} className="text-white" />
//         </button>

//         <input
//           type="text"
//           placeholder="Message..."
//           className="flex-1 mx-2 p-2 rounded-lg text-white bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//         />

//         <button className="p-2 rounded-lg hover:bg-gray-700 transition">
//           <AiOutlinePaperClip size={24} className="text-white" />
//         </button>

//         <button className="p-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition">
//           <AiOutlineSend size={24} onClick={messageCreation} />
//         </button>
//       </div>
//     </div>
//   );
// }

// ChatArea.propTypes = {
//   selectedChannel: PropTypes.string.isRequired, // Validate selectedChannel as a required string
// };

// export default ChatArea;
