// Pages
import Profile from "./Pages/Profile/Profile";
import Settings from "./Pages/SettingsPage/Settings";
import Chats from "./Pages/Chats/Chats";
import Favorites from "./Pages/Favorites/Favorites";
import ContactList from "./Pages/ContactList/ContactList";
import RegisterLogin from "./Pages/RegisterLogin/RegisterLogin";
// React router
import { Routes, Route, useLocation } from "react-router-dom";
// Hooks
import { useEffect, useState } from "react";
// Components
import ProtectedRoutes from "./Components/ProtectedRoutes/ProtectedRoutes";

function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

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
        {/* Páginas Privadas */}
        <Route element={<ProtectedRoutes currentUser={currentUser} />}>
          <Route
            path="/chats"
            element={
              <Chats
                darkTheme={darkTheme}
                setSidebarOpen={setSidebarOpen}
                sidebarOpen={sidebarOpen}
                currentUser={currentUser}
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
                currentUser={currentUser}
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
                currentUser={currentUser}
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
                currentUser={currentUser}
              />
            }
          ></Route>
          <Route
            path="/user/:username"
            element={
              <Profile
                darkTheme={darkTheme}
                setSidebarOpen={setSidebarOpen}
                sidebarOpen={sidebarOpen}
                currentUser={currentUser}
              />
            }
          ></Route>
        </Route>
        {/* Página Pública */}
        <Route
          path="/"
          element={
            <RegisterLogin
              setCurrentUser={setCurrentUser}
              currentUser={currentUser}
            />
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
