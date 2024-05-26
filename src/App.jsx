import Profile from "./Pages/Profile/Profile";
import Settings from "./Pages/SettingsPage/Settings";
import Chats from "./Pages/Chats/Chats";
import Favorites from "./Pages/Favorites/Favorites";
import ContactList from "./Pages/ContactList/ContactList";
import RegisterLogin from "./Pages/RegisterLogin/RegisterLogin";
// React router
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
// Hooks
import { useEffect, useState } from "react";
// Components
import ProtectedRoutes from "./Components/ProtectedRoutes/ProtectedRoutes";
// Firebase
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "./Process/Firebase";
//loader
import Loader from "./Components/Loader/Loader";

function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [userUID, setUserUID] = useState(() => {
    try {
      const userUID = localStorage.getItem("userUID");
      return userUID;
    } catch (error) {
      console.log(error);
      return null;
    }
  });

  useEffect(() => {
    const fetchUserByUserUID = async () => {
      setIsLoading(true);
      const usersRef = collection(db, "users");
      const filteredUser = [];
      try{
        const q = query(usersRef, where("userUID", "==", userUID));
        const querySnapShot = await getDocs(q);
        querySnapShot.forEach((doc) => {
          filteredUser.push(doc.data());
        });

      }catch(error){
        console.log(error)
      }
      console.log(filteredUser[0])
      setCurrentUser(filteredUser[0]);
      setIsLoading(false);
    };

    if (userUID) {
      fetchUserByUserUID();
    } else {
      setIsLoading(false);
    }
  }, []);

  let location = useLocation();

  useEffect(() => {
    setSidebarOpen(false);
  }, [location.pathname]);

  console.log(currentUser)

  if (isLoading) {
    return <Loader/>;
  }

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
        <Route path="/" element={currentUser ? <Navigate to="/chats"/> : <Navigate to="/login"/>}></Route>
        {/* Páginas Privadas */}
        <Route element={<ProtectedRoutes currentUser={currentUser} setCurrentUser={setCurrentUser}/>}>
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
          path="/login"
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
