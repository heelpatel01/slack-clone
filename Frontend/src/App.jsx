// import './App.css'

import ChannelsList from "../components/ChannelsList"
import SearchBar from "../components/SearchBar"
import SideBar1 from "../components/sideBar1"
import ChatArea from "../components/ChatArea"
import SignupDrawer from "../components/SignupDrawer"
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <SearchBar/>
      <SideBar1/>
      <ChannelsList/>
      <SignupDrawer/>
    </>
  )
}

export default App
