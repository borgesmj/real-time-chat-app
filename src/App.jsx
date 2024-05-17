// Components
import Sidebar from "./Components/Sidebar/Sidebar";
// Pages
// import Profile from "./Pages/Profile/Profile";
import Settings from "./Pages/SettingsPage/Settings";
import Chats from "./Pages/Chats/Chats";
// import Favorites from "./Pages/Favorites/Favorites";
// import Groups from "./Pages/Groups/Groups";
// import PasswordSetting from "./Pages/SettingsPage/PasswordSetting";
// import ProfileSettings from "./Pages/SettingsPage/ProfileSettings";
// React router
import { Routes, Route, useLocation } from "react-router-dom";
// Hooks
import { useEffect, useState } from "react";

function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  let location = useLocation();

  useEffect(() => {
    setSidebarOpen(false);
  }, [location.pathname]);

  const openSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div
      id="app"
      className={`w-dvw h-dvh p-2 flex justify-center items-center ${
        !darkTheme
          ? "bg-gradient-to-tr from-[#EEEEEE] from-80% via-[#f5f5f5] to-[#c7c7c7]"
          : "bg-gradient-to-tr from-[#263238] from-10% via-[#455a64] to-[#fafafa]"
      }`}
    >
      <Routes className="">
        <Route path="/" element={<Chats darkTheme={darkTheme} openSidebar={openSidebar} sidebarOpen={sidebarOpen} />}></Route>
        <Route
          path="/settings"
          element={
            <Settings darkTheme={darkTheme} setDarkTheme={setDarkTheme} sidebarOpen={sidebarOpen} />
          }
        ></Route>
        {/* 
          <Route path="/favorites" element={<Favorites />}></Route>
          <Route path="/groups" element={<Groups />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
        */}
      </Routes>
    </div>
  );
}

export default App;
