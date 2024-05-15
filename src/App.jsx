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
      <Routes className="">
        <Route path="/" element={<Chats darkTheme={darkTheme} />}></Route>
        <Route
          path="/settings"
          element={
            <Settings darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
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
