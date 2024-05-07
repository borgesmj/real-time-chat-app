// Components
import Sidebar from "./Components/Sidebar/Sidebar";
// Pages
import Profile from "./Components/Pages/Profile/Profile";
import Settings from "./Components/Pages/SettingsPage/Settings";
import Chats from "./Components/Pages/Chats/Chats";
import Favorites from "./Components/Pages/Favorites/Favorites";
import Groups from "./Components/Pages/Groups/Groups";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div id="app" className=" ligth-theme w-dvw">
      <Sidebar />
      <div className="ml-12 options-bar p-4">
      <Routes>
        <Route path="/" element={<Chats />}></Route>
      </Routes>
      <Routes>
        <Route path="/favorites" element={<Favorites />}></Route>
      </Routes>
      <Routes>
        <Route path="/groups" element={<Groups />}></Route>
      </Routes>
      <Routes>
        <Route path="/settings" element={<Settings />}></Route>
      </Routes>
      <Routes>
        <Route path="/profile" element={<Profile />}></Route>
      </Routes>
      </div>
    </div>
  );
}

export default App;
