// Components
import Sidebar from "./Components/Sidebar/Sidebar";
// Pages
// import Profile from "./Pages/Profile/Profile";
// import Settings from "./Pages/SettingsPage/Settings";
// import Chats from "./Pages/Chats/Chats";
// import Favorites from "./Pages/Favorites/Favorites";
// import Groups from "./Pages/Groups/Groups";
// import PasswordSetting from "./Pages/SettingsPage/PasswordSetting";
// import ProfileSettings from "./Pages/SettingsPage/ProfileSettings";
// React router
import { Routes, Route } from "react-router-dom";
// Hooks
import { useState } from "react";

function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const openSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div
      id="app"
      className={`w-dvw h-dvh p-2 ${
        !darkTheme ? "bg-[#6AB7FF]" : "bg-[#64FFDA]"
      }`}
    >
      <Sidebar
        darkTheme={darkTheme}
        sidebarOpen={sidebarOpen}
        openSidebar={openSidebar}
        setSidebarOpen={setSidebarOpen}
      />
      dsfdskjdskfjslkjlk
      {/* <Routes>
          <Route path="/" element={<Chats  darkTheme={darkTheme} />}></Route>
          <Route path="/favorites" element={<Favorites />}></Route>
          <Route path="/groups" element={<Groups />}></Route>
          <Route
            path="/settings"
            element={
              <Settings darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
            }
          ></Route>
          <Route path="/settings/password" element={<PasswordSetting darkTheme={darkTheme}/>}></Route>
          <Route path="/settings/profile" element={<ProfileSettings darkTheme={darkTheme}/>}></Route>
          <Route path="/profile" element={<Profile />}></Route>
        </Routes> */}
    </div>
  );
}

export default App;
