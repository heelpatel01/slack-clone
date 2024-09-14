import { VscArrowLeft, VscArrowRight } from "react-icons/vsc";
import { PiClock } from "react-icons/pi";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";

export default function SearchBar() {
  const [search, setSearch] = useState(""); // This state is not used in this code snippet
  const [query, setQuery] = useState("");

  const handleSearchChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    // Implement search logic here
    console.log("Search:", query);
  };

  // return (
  //   // <div className="mt-1 space-x-2 flex flex-col md:flex-row items-center p-2 fixed ">
  //   <div className="top-0 left-0 right-0 mt-1 space-x-2 flex flex-col md:flex-row items-center p-2 fixed z-50 bg-[#1A1D21]">

  //     <div className="flex space-x-2 h-6 mb-2 md:mb-0 ml-96 ">
  //       <VscArrowLeft className="w-5 h-5 text-gray-400 cursor-pointer hover:text-white" />
  //       <VscArrowRight className="w-5 h-5 text-gray-400 cursor-pointer hover:text-white" />
  //       <PiClock className="w-5 h-5 text-gray-400 cursor-pointer hover:text-white" />
  //       <div className="flex items-center">
  //         <div className="bg-slate-100 flex items-center h-6 w-96 px-1 py-1 text-white rounded-md border-2 border-gray-300 overflow-hidden font-sans">
  //           <input
  //             type="text" // Changed from email to text for general search
  //             placeholder="Search..."
  //             className="flex-grow outline-none bg-transparent text-gray-600 text-xs px-1 py-0.5"
  //             value={query}
  //             onChange={handleSearchChange}
  //           />
  //           <svg
  //             xmlns="http://www.w3.org/2000/svg"
  //             viewBox="0 0 192.904 192.904"
  //             className="w-3 h-3 text-gray-600 ml-1"
  //           >
  //             <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z" />
  //           </svg>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );

  return (<div className="mt-1 space-x-2 flex flex-col md:flex-row items-center p-2 fixed top-0 left-20 z-10 w-full bg-[#1A1D21] ">
    <div className="flex w-full justify-center space-x-2 h-6 mb-2 md:mb-0">
      <VscArrowLeft className="w-5 h-5 text-gray-400 cursor-pointer hover:text-white" />
      <VscArrowRight className="w-5 h-5 text-gray-400 cursor-pointer hover:text-white" />
      <PiClock className="w-5 h-5 text-gray-400 cursor-pointer hover:text-white" />
      <div className="flex items-center">
        <div className="bg-slate-100 flex items-center h-6 w-96 px-1 py-1 text-white rounded-md border-2 border-gray-300 overflow-hidden font-sans">
          <input
            type="text"
            placeholder="Search..."
            className="flex-grow outline-none bg-transparent text-gray-600 text-xs px-1 py-0.5"
            value={query}
            onChange={handleSearchChange}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 192.904 192.904"
            className="w-3 h-3 text-gray-600 ml-1"
          >
            <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z" />
          </svg>
        </div>
      </div>
    </div>
  </div>
  )

}
