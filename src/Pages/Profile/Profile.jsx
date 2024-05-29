import PageTemplate from "../../Templates/PageTemplate";
import Section from "../../Components/Section/Section";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../Process/Firebase";

const Profile = ({
  darkTheme,
  setSidebarOpen,
  sidebarOpen,
  currentUser,
  setModalIsOpen,
}) => {
  const [loading, setLoading] = useState(false);
  const username = useParams().username;
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userRef = collection(db, "users");
        const q = query(userRef, where("username", "==", username));
        const querySnapShot = await getDocs(q);
        const data = querySnapShot.docs[0].data();
        setUserData(data);
      } catch (error) {
        console.log(error);
      } finally {
        console.log("finalizado");
      }
    };
    fetchUserData();
  }, []);

  console.log("userdata:", userData);

  return (
    <PageTemplate
      darkTheme={darkTheme}
      setSidebarOpen={setSidebarOpen}
      sidebarOpen={sidebarOpen}
      currentUser={currentUser}
      setModalIsOpen={setModalIsOpen}
    >
      {userData === null ? (
        <>
          <div>usuario no encontrado</div>
        </>
      ) : (
        <>
          <div className="w-full py-4 flex justify-end px-12">
            {username === currentUser.username && (
              <button
                className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
                onClick={() => {
                  navigate("/settings");
                }}
              >
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Modificar perfil
                </span>
              </button>
            )}
          </div>
          <div>
          </div>
        </>
      )}
    </PageTemplate>
  );
};

export default Profile;
