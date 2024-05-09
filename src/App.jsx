// Components
import Sidebar from "./Components/Sidebar/Sidebar";
// Pages
import Profile from "./Components/Pages/Profile/Profile";
import Settings from "./Components/Pages/SettingsPage/Settings";
import Chats from "./Components/Pages/Chats/Chats";
import Favorites from "./Components/Pages/Favorites/Favorites";
import Groups from "./Components/Pages/Groups/Groups";
import PasswordSetting from "./Components/Pages/SettingsPage/PasswordSetting";
// React router
import { Routes, Route } from "react-router-dom";
// Hooks
import { useState } from "react";

function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <div id="app" className="w-dvw">
      <Sidebar darkTheme = {darkTheme} />
        <Routes>
          <Route path="/" element={<Chats />}></Route>
          <Route path="/favorites" element={<Favorites />}></Route>
          <Route path="/groups" element={<Groups />}></Route>
          <Route
            path="/settings"
            element={
              <Settings darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
            }
          ></Route>
          <Route path="/settings/password" element={<PasswordSetting/>}></Route>
          <Route path="/profile" element={<Profile />}></Route>
        </Routes>
    </div>
  );
}

export default App;
