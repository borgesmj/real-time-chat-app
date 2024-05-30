import "./Profile.css";
import PageTemplate from "../../Templates/PageTemplate";
import { NavLink, useParams } from "react-router-dom";
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
      } 
    };
    fetchUserData();
  }, []);
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
        <div
          id="profile-page"
          className="flex flex-col justify-start overflow-y-auto"
        >
          <div className="  w-full py-4 flex justify-end px-12">
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
          <div className="profile-header w-full flex flex-row  justify-between items-center md:flex-col py-4 px-4 md:px-12">
            <NavLink to={userData?.profile_pic}>
              <img
                src={userData?.profile_pic}
                alt=""
                className="rounded-full h-20 w-20 md:w-40 md:h-auto"
              />
            </NavLink>
            <div className="flex flex-col items-start md:items-center">
              <h1 className="text-3xl md:text-[3rem] font-bold">
                {userData?.fullname}
              </h1>
              <a href={`/user/${username}`}>
                <span className="text-[1.5rem]">@{userData?.username} </span>
              </a>
            </div>
          </div>
          <p className="bio max-w-[300px] text-center my-4 mx-auto">
            {userData?.bio}
          </p>
          <p className="w-full text-center flex justify-center">
            <span>
              <MapPin size={32} color="#161616" weight="fill" />
            </span>
            {userData?.location}
          </p>
          <p className="py-2 my-2 mx-auto w-[200px] flex justify-around items-center">
            {rrssLinks.map((item) => {
              if (item.username) {
                return (
                  <a
                    key={item.username}
                    target="blank"
                    rel="noopener noreferrer"
                    href={`${item.base}${item.username}`}
                    className="w-8 h-8"
                  >
                    <SocialIcon
                      url={`${item.base}${item.username}`}
                      aria-label={item.base}
                      as="span"
                      style={{ width: "100%", height: "100%" }}
                    />
                  </a>
                );
              }
            })}
          </p>
          <p className="my-2 mx-auto">
            Amigos: <span>{userData?.friendsList.length}</span>
          </p>
          <div className="w-full flex flex-col items-center justify-center my-2">
            <p>Intereses</p>
            <p className="flex flex-wrap justify-center items-center w-full gap-4">
              {
                userData.interests.map((item) => (
                  <span
                    className="p-2 rounded-full border-solid border-black border-[1px]"
                    key={item}
                  >
                    {item}
                  </span>
                ))
              }
            </p>
          </div>
        </div>
      )}
    </PageTemplate>
  );
};

export default Profile;
