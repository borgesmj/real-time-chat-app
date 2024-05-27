import Profile from "./Pages/Profile/Profile";
import Settings from "./Pages/SettingsPage/Settings";
import Chats from "./Pages/Chats/Chats";
import Favorites from "./Pages/Favorites/Favorites";
import ContactList from "./Pages/ContactList/ContactList";
import RegisterLogin from "./Pages/RegisterLogin/RegisterLogin";
// React router
import { Routes, Route, useLocation, Navigate, useNavigate } from "react-router-dom";
// Hooks
import { useEffect, useState } from "react";
// Components
import ProtectedRoutes from "./Components/ProtectedRoutes/ProtectedRoutes";
// Firebase
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "./Process/Firebase";
// Loader
import Loader from "./Components/Loader/Loader";
// Modal
import Modal from "./Components/Modal/Modal";
// Process
import { LogOut } from './Process/Auth';

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
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const navigate = useNavigate(); 
  const location = useLocation(); 


  useEffect(() => { 
    const fetchUserByUserUID = async () => {
      setIsLoading(true);
      const usersRef = collection(db, "users");
      const filteredUser = [];
      try {
        const q = query(usersRef, where("userUID", "==", userUID));
        const querySnapShot = await getDocs(q);
        querySnapShot.forEach((doc) => {
          filteredUser.push(doc.data());
        });
      } catch (error) {
        console.log(error);
      }
      console.log(filteredUser[0]);
      setCurrentUser(filteredUser[0]);
      setIsLoading(false);
    };

    if (userUID) {
      fetchUserByUserUID();
    } else {
      setIsLoading(false);
    }
  }, [userUID]); 

  useEffect(() => { 
    setSidebarOpen(false);
  }, [location.pathname]);

  const closeModal = () => {
    const modal = document.querySelector(".modalContent");
    modal.classList.add("scale-out-vertical");
    setTimeout(() => {
      setModalIsOpen(false);
    }, 500);
  };

  const handleLogOut = () => {
    closeModal();
    LogOut();
    setTimeout(() => {
      
      navigate("/login");
    }, 500);
  };

  if (isLoading) {
    return <Loader />;
  }

  console.log('loading')

  return (
    <div
      id="app"
      className={`w-dvw h-dvh md:p-2 flex justify-center items-center ${
        !darkTheme
          ? "bg-gradient-to-tr from-[#EEEEEE] from-80% via-[#f5f5f5] to-[#c7c7c7]"
          : "bg-gradient-to-tr from-[#263238] from-10% via-[#455a64] to-[#fafafa]"
      }`}
    >
      <Routes>
        <Route
          path="/"
          element={
            currentUser ? <Navigate to="/chats" /> : <Navigate to="/login" />
          }
        />
        {/* Páginas Privadas */}
        <Route
          element={
            <ProtectedRoutes
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
            />
          }
        >
          <Route
            path="/chats"
            element={
              <Chats
                darkTheme={darkTheme}
                setSidebarOpen={setSidebarOpen}
                sidebarOpen={sidebarOpen}
                currentUser={currentUser}
                setModalIsOpen={setModalIsOpen}
              />
            }
          />
          <Route
            path="/settings"
            element={
              <Settings
                setDarkTheme={setDarkTheme}
                darkTheme={darkTheme}
                setSidebarOpen={setSidebarOpen}
                sidebarOpen={sidebarOpen}
                currentUser={currentUser}
                setModalIsOpen={setModalIsOpen}
              />
            }
          />
          <Route
            path="/favorites"
            element={
              <Favorites
                darkTheme={darkTheme}
                setSidebarOpen={setSidebarOpen}
                sidebarOpen={sidebarOpen}
                currentUser={currentUser}
                setModalIsOpen={setModalIsOpen}
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <ContactList
                darkTheme={darkTheme}
                setSidebarOpen={setSidebarOpen}
                sidebarOpen={sidebarOpen}
                currentUser={currentUser}
                setModalIsOpen={setModalIsOpen}
              />
            }
          />
          <Route
            path="/user/:username"
            element={
              <Profile
                darkTheme={darkTheme}
                setSidebarOpen={setSidebarOpen}
                sidebarOpen={sidebarOpen}
                currentUser={currentUser}
                setModalIsOpen={setModalIsOpen}
              />
            }
          />
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
        />
      </Routes>
      {modalIsOpen && (
        <Modal>
          <div className="modalContent scale-in-ver-center bg-white w-[350px] p-8 flex flex-col justify-center items-center shadow-xl">
            <p className="text-[28px] font-medium">¿Desea cerrar sesión?</p>
            <div className="w-full flex justify-between mt-4">
              <button
                className="w-[100px] bg-white p-4 rounded-xl border-solid border-2 border-[#FF0000]"
                onClick={handleLogOut}
              >
                Aceptar
              </button>
              <button
                className="w-[100px] bg-red-400 p-4 rounded-xl border-solid border-2 border-[#FF0000] text-white font-semibold"
                onClick={closeModal}
              >
                Cancelar
              </button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default App;
