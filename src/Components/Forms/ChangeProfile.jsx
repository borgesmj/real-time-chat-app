import { useEffect, useState } from "react";
import FormTemplate from "../../Templates/FormTemplate";
import FormField from "../FormField/FormField";
import SubmitBtn from "../SubmitBtn/SubmitBtn";
import { At, Cake, MapPin, Pen, User } from "@phosphor-icons/react";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../../Process/Firebase";
import { useNavigate } from "react-router-dom";
import Loader from "../Loader/Loader";
import { SocialIcon } from "react-social-icons";

const ChangeProfile = ({
  currentUser,
  openToastSuccess,
  openToastError,
  darkTheme,
}) => {
  const [loading, setLoading] = useState(false);
  const [profile_pic, setProfilePic] = useState(currentUser?.profile_pic ?? "");
  const [fullname, setFullname] = useState(currentUser?.fullname ?? "");
  const [bio, setBio] = useState(currentUser?.bio ?? "");
  const [username, setUsername] = useState(currentUser?.username ?? "");
  const [location, setLocation] = useState(currentUser?.location ?? "");
  const [birthdate, setBirthdate] = useState(currentUser?.dateOfBirth ?? "");
  const [instagram, setInstagram] = useState(
    currentUser?.rrssUsernames.instagram ?? ""
  );
  const [facebook, setFacebook] = useState(
    currentUser?.rrssUsernames.facebook ?? ""
  );
  const [twitter, setTwitter] = useState(
    currentUser?.rrssUsernames.twitter ?? ""
  );
  const [tiktok, setTiktok] = useState(currentUser?.rrssUsernames.tiktok ?? "");
  const [userInterests, setUserInterests] = useState(
    currentUser?.interests || []
  );
  const [interestsList, setInterestsList] = useState([
    "Tecnología",
    "Deportes",
    "Música",
    "Cine",
    "Lectura",
    "Viajes",
    "Gastronomía",
    "Fotografía",
    "Moda",
    "Salud y Bienestar",
  ]);
  const [btnIsActive, setBtnIsActive] = useState(false);
  const [userLoading, setUserLoading] = useState(false);

  useEffect(() => {
    const filteredList = interestsList.filter((item) => {
      return !userInterests.includes(item);
    });
    setInterestsList(filteredList);
  }, []);

  useEffect(() => {
    if (username !== ""){
      setBtnIsActive(true);
    } else {
      setBtnIsActive(false);
    }
  }, [])

  const navigate = useNavigate();

  const handleAddInterest = (interest) => {
    if (userInterests.length < 5) {
      const updatedInterestsList = interestsList.filter(
        (item) => item !== interest
      );
      setInterestsList(updatedInterestsList);
      setUserInterests([interest, ...userInterests]);
    } else {
      return;
    }
  };

  const handleRemoveInterest = (interest) => {
    const updatedInterestsList = userInterests.filter(
      (item) => item !== interest
    );
    setUserInterests(updatedInterestsList);
    setInterestsList([interest, ...interestsList]);
  };

  const validateUsername = (username) => {
    const usernameRegex = /^[a-zA-Z0-9_]+$/;
    return usernameRegex.test(username);
  };

  const handleSubmit = async () => {
    setUserLoading(true);
    const newUsername = username.toLowerCase().trim();
    if (!validateUsername(newUsername)) {
      openToastError(
        <>
          El nombre de usuario no es válido
          <br />
          Solo puede contener letras, numeros y _
        </>
      );
      setUserLoading(false);
      return;
    }
    const userId = currentUser?.userId;
    try {
      const userCollectionRef = collection(db, "users");
      const q = query(userCollectionRef, where("userId", "==", userId));
      const querySnapShot = await getDocs(q);
      let docId = "";
      querySnapShot.forEach((doc) => {
        docId = doc.id;
      });
      const userRef = doc(db, "users", docId);
      const updateProfile = await updateDoc(userRef, {
        fullname: fullname,
        username: username,
        bio: bio,
        location: location,
        dateOfBirth: birthdate,
        rrssUsernames: {
          instagram: instagram,
          facebook: facebook,
          twitter: twitter,
          tiktok: tiktok,
        },
        interests: userInterests,
      });
    } catch (error) {
      console.log(error);
      return;
    } finally {
      openToastSuccess("Usuario actualizado con exito");
      setTimeout(() => {
        setLoading(false);
        window.location.href = `/user/${newUsername}`;
      }, 3000);
    }
  };

  return (
    <div className="w-full md:w-1/2 absolute top-12 md:top-20 bottom-12 bg-[var(--primary-100)] flex flex-col pb-10 overflow-y-auto">
      {loading && <Loader />}
      <FormTemplate>
        <FormField>
          <img src={profile_pic} alt="" className="rounded-full" />
        </FormField>
        <FormField>
          <div className="w-3/4 flex flex-row px-4 py-2 border-b-solid border-b-[2px] border-b-transparent focus-within:border-b-[var(--accent-100)]">
            <span>
              <User
                size={32}
                color={darkTheme ? "#FFFFFF" : "#0b0a0a"}
                weight="bold"
              />
            </span>
            <input
              type="text"
              name=""
              id=""
              className="bg-transparent focus:outline-none ml-4 w-3/4 text-[var(--text-100)] placeholder:text-[var(--text-200)] placeholder:text-bold"
              placeholder="Nombre Completo"
              value={fullname}
              onChange={(e) => {
                setFullname(e.target.value);
              }}
            />
          </div>
        </FormField>
        <FormField>
          <div className="w-3/4 flex flex-row px-4 py-2 border-b-solid border-b-[2px] border-b-transparent focus-within:border-b-[var(--accent-100)]">
            <span>
              <At
                size={32}
                color={darkTheme ? "#FFFFFF" : "#0b0a0a"}
                weight="bold"
              />
            </span>
            <input
              type="text"
              name=""
              id=""
              className="bg-transparent focus:outline-none ml-4 w-3/4 text-[var(--text-100)] placeholder:text-[var(--text-200)] placeholder:text-bold"
              placeholder="Nombre de usuario"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              required
            />
          </div>
        </FormField>
        <FormField>
          <div className="w-3/4 flex flex-row px-4 py-2 border-b-solid border-b-[2px] border-b-transparent focus-within:border-b-[var(--accent-100)]">
            <span>
              <Pen
                size={32}
                color={darkTheme ? "#FFFFFF" : "#0b0a0a"}
                weight="bold"
              />
            </span>
            <textarea
              name=""
              id=""
              cols="15"
              rows="5"
              className="bg-transparent focus:outline-none ml-4 w-3/4 text-[var(--text-100)] placeholder:text-[var(--text-200)] placeholder:text-bold resize-none"
              placeholder="Biografía"
              value={bio}
              onChange={(e) => {
                setBio(e.target.value);
              }}
            ></textarea>
          </div>
        </FormField>
        <FormField>
          <div className="w-3/4 flex flex-row px-4 py-2 border-b-solid border-b-[2px] border-b-transparent focus-within:border-b-[var(--accent-100)]">
            <span>
              <MapPin
                size={32}
                color={darkTheme ? "#FFFFFF" : "#0b0a0a"}
                weight="bold"
              />
            </span>
            <input
              type="text"
              name=""
              id=""
              className="bg-transparent focus:outline-none ml-4 w-3/4 text-[var(--text-100)] placeholder:text-[var(--text-200)] placeholder:text-bold"
              placeholder="Ubicación"
              value={location}
              onChange={(e) => {
                setLocation(e.target.value);
              }}
            />
          </div>
        </FormField>
        <FormField>
          <div className="w-3/4 flex flex-row px-4 py-2 border-b-solid border-b-[2px] border-b-transparent focus-within:border-b-[var(--accent-100)]">
            <span>
              <Cake
                size={32}
                color={darkTheme ? "#FFFFFF" : "#0b0a0a"}
                weight="bold"
              />
            </span>
            <input
              type="date"
              name=""
              id=""
              className="bg-transparent focus:outline-none ml-4 w-3/4 text-[var(--text-100)] placeholder:text-[var(--text-200)] placeholder:text-bold"
              value={birthdate}
              onChange={(e) => {
                setBirthdate(e.target.value);
              }}
            />
          </div>
        </FormField>
        <h3 className="text-[var(--text-100)]">Redes Sociales</h3>
        <FormField>
          <div className="w-3/4 flex flex-row px-4 py-2 border-b-solid border-b-[2px] border-b-transparent focus-within:border-b-[var(--accent-100)]">
            <SocialIcon
              url="https://www.instagram.com/"
              aria-label="Instagram"
              as="span"
              style={{ width: "36px", height: "36px" }}
            />
            <input
              type="text"
              name=""
              id=""
              className="bg-transparent focus:outline-none ml-4 w-3/4 text-[var(--text-100)] placeholder:text-[var(--text-200)] placeholder:text-bold"
              placeholder="instagram"
              value={instagram}
              onChange={(e) => {
                setInstagram(e.target.value);
              }}
            />
          </div>
        </FormField>
        <FormField>
          <div className="w-3/4 flex flex-row px-4 py-2 border-b-solid border-b-[2px] border-b-transparent focus-within:border-b-[var(--accent-100)]">
            <SocialIcon
              url="https://www.facebook.com/"
              aria-label="Facebook"
              as="span"
              style={{ width: "36px", height: "36px" }}
            />
            <input
              type="text"
              name=""
              id=""
              className="bg-transparent focus:outline-none ml-4 w-3/4 text-[var(--text-100)] placeholder:text-[var(--text-200)] placeholder:text-bold"
              placeholder="Facebook"
              value={facebook}
              onChange={(e) => {
                setFacebook(e.target.value);
              }}
            />
          </div>
        </FormField>
        <FormField>
          <div className="w-3/4 flex flex-row px-4 py-2 border-b-solid border-b-[2px] border-b-transparent focus-within:border-b-[var(--accent-100)]">
            <SocialIcon
              url="https://www.tiktok.com/"
              aria-label="TikTok"
              as="span"
              style={{ width: "36px", height: "36px" }}
            />
            <input
              type="text"
              name=""
              id=""
              className="bg-transparent focus:outline-none ml-4 w-3/4 text-[var(--text-100)] placeholder:text-[var(--text-200)] placeholder:text-bold"
              placeholder="Tiktok"
              value={tiktok}
              onChange={(e) => {
                setTiktok(e.target.value);
              }}
            />
          </div>
        </FormField>
        <FormField>
          <div className="w-3/4 flex flex-row px-4 py-2 border-b-solid border-b-[2px] border-b-transparent focus-within:border-b-[var(--accent-100)]">
            <SocialIcon
              url="https://www.twitter.com/"
              aria-label="Twitter"
              as="span"
              style={{ width: "36px", height: "36px" }}
            />
            <input
              type="text"
              name=""
              id=""
              className="bg-transparent focus:outline-none ml-4 w-3/4 text-[var(--text-100)] placeholder:text-[var(--text-200)] placeholder:text-bold"
              placeholder="Twitter"
              value={twitter}
              onChange={(e) => {
                setTwitter(e.target.value);
              }}
            />
          </div>
        </FormField>
        <h3>Intereses</h3>
        <div className="w-full p-4 flex flex-wrap justify-center gap-5">
          {userInterests.length > 0 &&
            userInterests.map((interest) => (
              <div key={interest}>
                <label htmlFor={interest}>
                  <span className="cursor-pointer rounded-2xl bg-blue-500 p-2 ">
                    {interest}
                  </span>
                </label>
                <input
                  type="checkbox"
                  name=""
                  id={interest}
                  checked={userInterests.includes(interest)}
                  onChange={() => {
                    handleRemoveInterest(interest);
                  }}
                  className="hidden"
                />
              </div>
            ))}
        </div>
        <span>Puedes añadir hasta 5 intereses</span>
        <div className="w-full p-4 flex flex-wrap justify-center gap-5">
          {interestsList.map((interest) => (
            <div key={interest}>
              <label htmlFor={interest} key={interest}>
                <span className="cursor-pointer rounded-2xl bg-blue-500 p-2 ">
                  {interest}
                </span>
              </label>
              <input
                type="checkbox"
                name=""
                id={interest}
                className="hidden"
                value={userInterests.includes(interest)}
                onChange={() => {
                  handleAddInterest(interest);
                }}
              />
            </div>
          ))}
        </div>

        <FormField>
          <SubmitBtn btnText="Guardar" handleSubmit={handleSubmit} btnIsActive={btnIsActive} userLoading={userLoading} />
        </FormField>
      </FormTemplate>
    </div>
  );
};

export default ChangeProfile;
