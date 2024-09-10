

// import React from "react";
// import { IoFilterOutline } from "react-icons/io5";
// import { FaRegPenToSquare } from "react-icons/fa6";

// function ChannelsList() {
//   return (
//     <div className="p-1 h-5/6 w-80 mt-12 bg-slate-700 border-solid ml-20 fixed block">
//       <div className="flex space-x-2 items-center">
//         <div className="mr-24">Channels</div>

//         <label className="inline-flex items-center cursor-pointer ">
//           <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
//             Unreads
//           </span>
//           <input type="checkbox" value="" className="sr-only peer" />
//           <div className="relative w-8 h-4 bg-gray-200 peer-focus:outline-none  peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-900 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[1px] after:start-[1px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-pink-600"></div>
//         </label>
//         <IoFilterOutline className="cursor-pointer" />
//         <FaRegPenToSquare className="cursor-pointer" />
//       </div>

//       {/* Updated ul and li Components */}
//       <div className="channel-list flex-col mt-4">
//         <ul className="space-y-2">
//           {["Team-Google", "Team-Facebook", "Team-Amazon", "Team-Banyanboard"].map((channel, idx) => (
//             <li
//               key={idx}
//               className="font-bold text-white py-2 px-4 bg-gray-800 rounded-lg hover:bg-pink-600 transition duration-300 cursor-pointer shadow-md"
//             >
//               {channel}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default ChannelsList;


import React from "react";
import { IoFilterOutline } from "react-icons/io5";
import { FaRegPenToSquare } from "react-icons/fa6";
import ChatArea from "./ChatArea";

function ChannelsList() {
  const imageUrl =
    "https://as2.ftcdn.net/v2/jpg/01/15/52/31/1000_F_115523122_e4ry4EKsouP9kl2auNN1wSREoJq3kdcE.jpg";

  return (
    <div className="p-1 h-5/6 w-80 mt-12 bg-slate-700 border-solid ml-20 fixed block">
      <div className="flex space-x-2 items-center">
        <div className="mr-24">Channels</div>

        <label className="inline-flex items-center cursor-pointer ">
          <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
            Unreads
          </span>
          <input type="checkbox" value="" className="sr-only peer" />
          <div className="relative w-8 h-4 bg-gray-200 peer-focus:outline-none  peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-900 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[1px] after:start-[1px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-pink-600"></div>
        </label>
        <IoFilterOutline className="cursor-pointer" />
        <FaRegPenToSquare className="cursor-pointer" />
      </div>

      <div className="channel-list flex-col mt-4">
        <ul className="space-y-2">
          {["Team-Google", "Team-Facebook", "Team-Amazon", "Team-Banyanboard"].map(
            (channel, idx) => (
              <li
                key={idx}
                className="flex items-center font-bold text-white py-2 px-4 bg-gray-800 rounded-lg hover:bg-pink-600 transition duration-300 cursor-pointer shadow-md"
              >
                {/* Image on the Left */}
                <img
                  src={imageUrl}
                  alt="Channel icon"
                  className="w-8 h-8 rounded-2xl mr-4"
                />
                {channel}
              </li>
            )
          )}
        </ul>
      </div>
      

      <ChatArea/>
    </div>
  );
}

export default ChannelsList;
