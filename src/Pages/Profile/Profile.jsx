import "./Profile.css";
import PageTemplate from "../../Templates/PageTemplate";
import { NavLink, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../Process/Firebase";
import { MapPin } from "@phosphor-icons/react";
import { SocialIcon } from "react-social-icons";
import Loader from "../../Components/Loader/Loader";
import FriendStatus from "../../Components/FriendStatus/FriendStatus";

const Profile = ({
  darkTheme,
  setSidebarOpen,
  sidebarOpen,
  currentUser,
  setModalIsOpen,
  currectUserDocID
}) => {
  const username = useParams().username;
  const navigate = useNavigate();
  const [profileUser, setProfileUser] = useState(null);
  const [isLoading, setIsLoading] = useState([]);
  const [isFriend, setIsFriend] = useState(false);
  const [requestSent, setRequestSent] = useState(false);
  const [requestReceived, setRequestReceived] = useState(false);
  const [profileDocID, setProfileDocID] = useState("")

  useEffect(() => {
    const fetchUserData = async () => {
      setIsLoading(true);
      try {
        const userRef = collection(db, "users");
        const q = query(userRef, where("username", "==", username));
        const querySnapShot = await getDocs(q);
        querySnapShot.forEach((doc) => {
          setProfileDocID(doc.id);
        });
        const data = querySnapShot.docs[0].data();
        setProfileUser(data);
        setIsFriend(() => {
          if (currentUser.friendsList.includes(data.userId)) {
            return true;
          }
        })
        setRequestSent(() => {
          if (currentUser.friendRequests.sent.includes(data.userId)){
            return true;
          }
        })
        setRequestReceived(() => {
          if (currentUser.friendRequests.recieved.includes(data.userId)){
            return true;
          }
        })
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchUserData();
  }, []);



  const rrssLinks = [
    {
      base: "https://www.instagram.com/",
      username: profileUser?.rrssUsernames.instagram,
    },
    {
      base: "https://www.facebook.com/",
      username: profileUser?.rrssUsernames.facebook,
    },
    {
      base: "https://www.tiktok.com/@",
      username: profileUser?.rrssUsernames.tiktok,
    },
    {
      base: "https://www.twitter.com/",
      username: profileUser?.rrssUsernames.twitter,
    },
  ];

  return (
    <PageTemplate
      darkTheme={darkTheme}
      setSidebarOpen={setSidebarOpen}
      sidebarOpen={sidebarOpen}
      currentUser={currentUser}
      setModalIsOpen={setModalIsOpen}
    >
      {isLoading === true ? (
        <Loader />
      ) : profileUser === null ? (
        <>Usuario no encontrado </>
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
          <div className="profile-header w-full flex flex-row  justify-around items-center md:flex-col py-4 px-4 md:px-12">
            <NavLink to={profileUser?.profile_pic}>
              <img
                src={profileUser?.profile_pic}
                alt=""
                className="rounded-full h-20 w-20 md:w-40 md:h-auto"
              />
            </NavLink>
            <div className="flex flex-col items-start md:items-center">
              <h1 className="text-[1rem] md:text-[3rem] font-bold">
                {profileUser?.fullname}
              </h1>
              <a href={`/user/${username}`}>
                <span className="text-[0.8rem]">@{profileUser?.username} </span>
              </a>
            </div>
          </div>
          {username !== currentUser.username && (
            <FriendStatus
              isFriend={isFriend}
              requestSent={requestSent}
              requestReceived={requestReceived}
            />
          )}
          <p className="bio max-w-[300px] text-center my-4 mx-auto">
            {profileUser?.bio}
          </p>
          <p className="w-full text-center flex justify-center">
            <span>
              <MapPin size={32} color="#161616" weight="fill" />
            </span>
            {profileUser?.location}
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
            Amigos: <span>{profileUser?.friendsList.length}</span>
          </p>
          <div className="w-full flex flex-col items-center justify-center my-2">
            <p className="py-4">Intereses</p>
            <p className="flex flex-wrap justify-center items-center w-full gap-4">
              {profileUser.interests.map((item) => (
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
      )}
    </PageTemplate>
  );
};

export default Profile;
