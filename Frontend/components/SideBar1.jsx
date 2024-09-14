import React from "react";
import groupImage from "../src/assets/slackCLoneCloneImage2.jpg";
import pFp from "../src/assets/ProfileImage.jpg";
import { TbHomeFilled } from "react-icons/tb";
import { LuMessagesSquare } from "react-icons/lu";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoIosMore } from "react-icons/io";
import { IoMdAdd } from "react-icons/io";

function SideBar1() {
  // return (
  //   <>
  //     {/* <div className="w-14  ml-3 mt-12 align-middle justify-center bg-cover fixed grid"> */}
  //     <div className="w-14 ml-3 mt-16 fixed grid bg-[#1A1D21]">

  //       {/* Group Icon */}

  //       <div className="flex flex-col items-center">
  //         <img
  //           src={groupImage}
  //           className="h-10 w-10 rounded-xl object-cover mb-2"
  //           alt="Group Icon"
  //         />

  //         <ul className="mt-4 flex flex-col justify-center items-center">
  //           <li className="flex flex-col items-center text-center mb-4">
  //             <TbHomeFilled className="text-3xl mt-2 cursor-pointer" />
  //             <div className="text-xs">Home</div>
  //           </li>
  //           <li className="flex flex-col items-center text-center mb-4">
  //             <LuMessagesSquare className="text-3xl mt-2 cursor-pointer" />
  //             <div className="text-xs">DMs</div>
  //           </li>
  //           <li className="flex flex-col items-center text-center mb-4">
  //             <IoIosNotificationsOutline className="text-3xl mt-2 cursor-pointer" />
  //             <div className="text-xs">Activities</div>
  //           </li>
  //           <li className="flex flex-col items-center text-center mb-4">
  //             <IoIosMore className="text-3xl mt-2 cursor-pointer" />
  //             <div className="text-xs">More</div>
  //           </li>
  //         </ul>

  //         <div className="flex flex-col  justify-center items-center mt-72">
  //           <IoMdAdd className="cursor-pointer text-3xl mt-2 text-gray-300 bg-gray-700 rounded-full p-1" />
  //           <img
  //             src={pFp}
  //             className="cursor-pointer mt-4 h-10 w-10 rounded-xl object-cover mb-2"
  //             alt="Group Icon"
  //           />
  //         </div>
  //       </div>

  //       {/* <div className='flex-col  mt-2 justify-center align-middle '>
  //       <TbHomeFilled className='text-3xl'/>
  //       <div>Home</div>
  //       </div>
  //       <div className='flex-col  mt-2 justify-center align-middle '>
  //       <LuMessagesSquare className='text-3xl'/>
  //       DMs
  //       </div>
  //       <div className='flex-col  mt-2 justify-center align-middle '>
  //       <IoIosNotificationsOutline className='text-3xl'/>
  //       Activities
  //       </div>
  //       <div className='flex-col  mt-2 justify-center align-middle '>
  //       <IoIosMore className='text-3xl'/>
  //       More
  //       </div> */}
  //     </div>
  //   </>
  // );

  return(<div className="w-14 ml-3 mt-12 align-middle justify-center bg-cover fixed grid h-full">
    <div className="flex flex-col h-full items-center">
      <img
        src={groupImage}
        className="h-10 w-10 rounded-xl object-cover mb-2"
        alt="Group Icon"
      />
      <ul className="mt-4 flex flex-col justify-center items-center space-y-4">
        <li className="flex flex-col items-center text-center">
          <TbHomeFilled className="text-3xl cursor-pointer" />
          <div className="text-xs">Home</div>
        </li>
        <li className="flex flex-col items-center text-center">
          <LuMessagesSquare className="text-3xl cursor-pointer" />
          <div className="text-xs">DMs</div>
        </li>
        <li className="flex flex-col items-center text-center">
          <IoIosNotificationsOutline className="text-3xl cursor-pointer" />
          <div className="text-xs">Activities</div>
        </li>
        <li className="flex flex-col items-center text-center">
          <IoIosMore className="text-3xl cursor-pointer" />
          <div className="text-xs">More</div>
        </li>
      </ul>
      <div className="flex flex-col justify-center items-center mt-80 mb-4">
        <IoMdAdd className="cursor-pointer text-3xl text-gray-300 bg-gray-700 rounded-full p-1" />
        <img
          src={pFp}
          className="cursor-pointer mt-4 h-10 w-10 rounded-xl object-cover"
          alt="Profile Icon"
        />
      </div>
    </div>
  </div>
  )
}

export default SideBar1;
