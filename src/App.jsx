// Pages
import Profile from "./Pages/Profile/Profile";
import Settings from "./Pages/SettingsPage/Settings";
import Chats from "./Pages/Chats/Chats";
import Favorites from "./Pages/Favorites/Favorites";
import ContactList from "./Pages/ContactList/ContactList";
import LoginSignin from "./Pages/LoginSignin/LoginSignin";
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

  return (
    <div
      id="app"
      className={`w-dvw h-dvh md:p-2 flex justify-center items-center ${
        !darkTheme
          ? "bg-gradient-to-tr from-[#EEEEEE] from-80% via-[#f5f5f5] to-[#c7c7c7]"
          : "bg-gradient-to-tr from-[#263238] from-10% via-[#455a64] to-[#fafafa]"
      }`}
    >
      <Routes className="">
        <Route
          path="/chats"
          element={
            <Chats
              darkTheme={darkTheme}
              setSidebarOpen={setSidebarOpen}
              sidebarOpen={sidebarOpen}
            />
          }
        ></Route>
        <Route
          path="/settings"
          element={
            <Settings
              setDarkTheme={setDarkTheme}
              darkTheme={darkTheme}
              setSidebarOpen={setSidebarOpen}
              sidebarOpen={sidebarOpen}
            />
          }
        ></Route>
        <Route
          path="/favorites"
          element={
            <Favorites
              darkTheme={darkTheme}
              setSidebarOpen={setSidebarOpen}
              sidebarOpen={sidebarOpen}
            />
          }
        ></Route>
        <Route
          path="/contacts"
          element={
            <ContactList
              darkTheme={darkTheme}
              setSidebarOpen={setSidebarOpen}
              sidebarOpen={sidebarOpen}
            />
          }
        ></Route>
        <Route
          path="/profile"
          element={
            <Profile
              darkTheme={darkTheme}
              setSidebarOpen={setSidebarOpen}
              sidebarOpen={sidebarOpen}
            />
          }
        ></Route>
        <Route path="/" element={<LoginSignin/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
