import { useEffect, useState } from "react";
import ChannelsList from "../components/ChannelsList.jsx";
import LoginDrawer from "../components/LoginDrawer.jsx";
import SearchBar from "../components/SearchBar.jsx";
import SideBar1 from "../components/SideBar1.jsx";
import SignupDrawer from "../components/SignupDrawer.jsx";
import axiosInstance from "../Utils/AxiosInstance.js";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true); // Optional loading state

  useEffect(() => {
    const checkUser = async () => {
      try {
        const response = await axiosInstance.get("/user/checkUserLogin");
        if (response.data.isLoggedIn) {
          setIsLoggedIn(true);
        }
      } catch (error) {
        console.log("Error checking user login status:", error);
      } finally {
        setLoading(false); // Finish loading once the check is complete
      }
    };

    checkUser(); // Run this on component mount
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Optional loading message
  }

  return (
    <>
      <SearchBar />
      <SideBar1 />
      <ChannelsList />
      <div className="flex space-x-1">
        {!isLoggedIn && <SignupDrawer />}
        {!isLoggedIn && <LoginDrawer />}
      </div>
    </>
  );
}

export default App;
