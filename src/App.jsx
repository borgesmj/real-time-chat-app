import Profile from "./Pages/Profile/Profile";
import Settings from "./Pages/SettingsPage/Settings";
import Chats from "./Pages/Chats/Chats";
import Favorites from "./Pages/Favorites/Favorites";
import ContactList from "./Pages/ContactList/ContactList";
import RegisterLogin from "./Pages/RegisterLogin/RegisterLogin";
import NotFound from "./Pages/NotFound/NotFound";
// React router
import {
  Routes,
  Route,
  useLocation,
  Navigate,
  useNavigate,
} from "react-router-dom";
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
import { LogOut } from "./Process/Auth";
import { chatListener } from "./Process/ChatListener";

function App() {
  const [darkTheme, setDarkTheme] = useState(true);
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
  const [currentUserDocID, setCurrentUserDocID] = useState("");
  const [currentUserChats, setCurrentUserChats] = useState([]);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const darkTheme = window.localStorage.getItem("darkTheme");
    if (darkTheme) {
      setDarkTheme(JSON.parse(darkTheme)); // Convertir el string a booleano
    } else {
      setDarkTheme(true);
    }
  }, []);
  useEffect(() => {
    const fetchUserByUserUID = async () => {
      setIsLoading(true);
      const usersRef = collection(db, "users");
      const filteredUser = [];
      try {
        const q = query(usersRef, where("userUID", "==", userUID));
        const querySnapShot = await getDocs(q);
        querySnapShot.forEach((doc) => {
          setCurrentUserDocID(doc.id);
          filteredUser.push(doc.data());
        });
      } catch (error) {
        console.log(error);
      }
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

  useEffect(() => {
    let unsubscribe;
    if (currentUser) {
      unsubscribe = chatListener(currentUser, setCurrentUserChats);
    }
    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, [currentUser]);

  useEffect(() => {
    window.localStorage.setItem("darkTheme", JSON.stringify(darkTheme)); // Convertir el booleano a string
  }, [darkTheme]);

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

  return (
    <div
      id="app"
      className={`w-dvw h-dvh md:p-2 flex justify-center items-center bg-[var(--bg-100)] ${
        !darkTheme ? "ligth-theme" : "dark-theme"
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
                currentUserChats={currentUserChats}
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
            path="/friends"
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
                currentUserDocID={currentUserDocID}
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
              darkTheme={darkTheme}
              setDarkTheme={setDarkTheme}
            />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {modalIsOpen && (
        <Modal>
          <div className="modalContent scale-in-ver-center bg-[var(--bg-100)] w-[350px] p-8 flex flex-col justify-center items-center shadow-xl rounded-lg">
            <p className="text-[28px] font-medium text-[var(--text-100)]">
              ¿Desea cerrar sesión?
            </p>
            <div className="w-full flex justify-between mt-4">
              <button
                className="w-[100px] bg-transparent-accent p-4 rounded-xl border-2 border-[var(--accent-100)] text-[var(--accent-100)] transition duration-300 ease-in-out transform hover:bg-[var(--accent-100)] hover:text-[var(--text-100)] hover:scale-105"
                onClick={handleLogOut}
              >
                Aceptar
              </button>
              <button
                className="w-[100px] bg-[var(--accent-200)] p-4 rounded-xl border-2 border-[var(--accent-200)] text-white font-semibold transition duration-300 ease-in-out transform hover:bg-[var(--transparent-accent)] hover:text-[var(--accent-200)] hover:scale-105"
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
