// import './App.css'

import ChannelsList from "../components/ChannelsList.jsx";
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
      <SignupDrawer />
    </>
  );
}

export default App;
