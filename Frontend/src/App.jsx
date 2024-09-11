// import './App.css'

import ChannelsList from "../components/ChannelsList.jsx";
import LoginDrawer from "../components/LoginDrawer.jsx";
import SearchBar from "../components/SearchBar.jsx";
import SideBar1 from "../components/SideBar1.jsx";
import SignupDrawer from "../components/SignupDrawer.jsx";
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <SearchBar />
      <SideBar1 />
      <ChannelsList />
      <div className="flex space-x-1">
        <SignupDrawer />
        <LoginDrawer />
      </div>
    </>
  );
}

export default App;
