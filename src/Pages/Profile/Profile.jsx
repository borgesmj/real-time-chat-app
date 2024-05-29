import PageTemplate from "../../Templates/PageTemplate";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../Process/Firebase";
import { MapPin } from "@phosphor-icons/react";
import { SocialIcon } from "react-social-icons";

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
  const createAt = userData?.createAt;
  const rrssLinks = [
    {
      base: "https://www.instagram.com/",
      username: userData?.rrssUsernames.instagram,
    },
    {
      base: "https://www.facebook.com/",
      username: userData?.rrssUsernames.facebook,
    },
    {
      base: "https://www.tiktok.com/@",
      username: userData?.rrssUsernames.tiktok,
    },
    {
      base: "https://www.twitter.com/",
      username: userData?.rrssUsernames.twitter,
    },
  ];

  console.log(rrssLinks);

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
          <div className="w-full py-4 flex justify-end px-12 overflow-y-auto">
            {username === currentUser.username ? (
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
            ) : (
              <button
                className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
                onClick={() => {
                  navigate("/settings");
                }}
              >
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Agregar a lista de amigos
                </span>
              </button>
            )}
          </div>
          <div className="w-full flex justify-between items-center flex-col py-4 px-12">
            <div className="w-full flex flex-col items-center justify-center my-2">
              <img
                src={userData?.profile_pic}
                alt=""
                className="rounded-full"
              />
              <h1 className="text-3xl font-bold">{userData?.fullname}</h1>
              <a href={`/user/${username}`}>
                <span>@{userData?.username}</span>
              </a>
            </div>
            <div className="w-full flex flex-col items-center justify-center my-2">
              <p className="w-full text-center my-4">{userData?.bio}</p>
              <p className="w-full text-center flex justify-center">
                <span>
                  <MapPin size={32} color="#161616" weight="fill" />
                </span>
                {userData?.location}
              </p>
              <p className="py-2 my-0 w-[300px] flex justify-around items-center">
                {rrssLinks.map((item) => {
                  if (item.username) {
                    return (
                      <a
                        key={item.username}
                        target="blank"
                        rel="noopener noreferrer"
                        href={`${item.base}${item.username}`}
                      >
                        <SocialIcon
                          url={`${item.base}${item.username}`}
                          as="span"
                        />
                      </a>
                    );
                  }
                })}
              </p>
              <p>Amigos: <span>{userData?.friendsList.length}</span></p>
              <p>Intereses</p>
              <p className="flex flex-wrap justify-center items-center w-full gap-4">
                {userData.interests.map((item) => (
                  <span
                    className="p-2 rounded-full border-solid border-black border-[1px]"
                    key={item}
                  >
                    {item}
                  </span>
                ))}
              </p>
            </div>
          </div>
        </>
      )}
    </PageTemplate>
  );
};

export default Profile;
