import { useEffect, useState } from "react";
import FormTemplate from "../../Templates/FormTemplate";
import FormField from "../FormField/FormField";
import SubmitBtn from "../SubmitBtn/SubmitBtn";
import "./ChangeProfile.css";
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

const ChangeProfile = ({ currentUser, openToastSuccess, openToastError }) => {
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

  useEffect(() => {
    const filteredList = interestsList.filter((item) => {
      return !userInterests.includes(item);
    });
    setInterestsList(filteredList);
  }, []);

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
    setLoading(true);
    const newUsername = username.toLowerCase().trim();
    if (!validateUsername(newUsername)) {
      openToastError(
        <>
          El nombre de usuario no es válido
          <br />
          Solo puede contener letras, numeros y _
        </>
      );
      setLoading(false);
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
    <div className="w-full absolute top-12 md:top-20 bottom-12 bg-white flex flex-col pb-10 overflow-y-auto">
      {loading && <Loader />}
      <FormTemplate>
        <FormField>
          <img src={profile_pic} alt="" />
        </FormField>
        <p className="form-field">
          <input
            type="text"
            name="username"
            id="fullname"
            className="input-field"
            placeholder=" "
            value={fullname}
            onChange={(e) => {
              setFullname(e.target.value);
            }}
          />
          <label htmlFor="fullname" className="label-field">
            Nombre Completo:
          </label>
        </p>
        <p className="form-field">
          <input
            type="text"
            name="username"
            id="username"
            className="input-field"
            placeholder=" "
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            required
          />
          <label htmlFor="username" className="label-field requerido">
            Username:
          </label>
        </p>
        <p className="form-field h-[180px]">
          <textarea
            type="text"
            name="username"
            id="userbio"
            className="input-field"
            placeholder=" "
            value={bio}
            onChange={(e) => {
              setBio(e.target.value);
            }}
          />
          <label htmlFor="userbio" className="label-field requerido">
            Biografía:
          </label>
        </p>
        <p className="form-field">
          <input
            type="text"
            name="location"
            id="location"
            className="input-field"
            placeholder=" "
            value={location}
            onChange={(e) => {
              setLocation(e.target.value);
            }}
          />
          <label htmlFor="location" className="label-field requerido">
            Ubicación:
          </label>
        </p>
        <p className="form-field">
          <input
            type="date"
            name="birthdate"
            id="birthdate"
            className="input-field"
            placeholder=" "
            value={birthdate}
            onChange={(e) => {
              setBirthdate(e.target.value);
            }}
          />
          <label htmlFor="birthdate" className="label-field requerido">
            Fecha de nacimiento:
          </label>
        </p>
        <h3>Redes Sociales</h3>
        <p className="rrss-form-field">
          <label htmlFor="instagram" className="rrss-field">
            instragram.com/
          </label>
          <input
            type="text"
            name="instagram"
            id="instagram"
            className="rrss-field"
            placeholder=" "
            value={instagram}
            onChange={(e) => {
              setInstagram(e.target.value);
            }}
          />
        </p>
        <p className="rrss-form-field">
          <label htmlFor="facebook" className="rrss-field">
            facebook.com/
          </label>
          <input
            type="text"
            name="facebook"
            id="facebook"
            className="rrss-field"
            placeholder=" "
            value={facebook}
            onChange={(e) => {
              setFacebook(e.target.value);
            }}
          />
        </p>
        <p className="rrss-form-field">
          <label htmlFor="tiktok" className="rrss-field">
            tiktok.com/
          </label>
          <input
            type="text"
            name="tiktok"
            id="tiktok"
            className="rss-field"
            placeholder=" "
            value={tiktok}
            onChange={(e) => {
              setTiktok(e.target.value);
            }}
          />
        </p>
        <p className="rrss-form-field">
          <label htmlFor="twitter" className="rrss-field">
            twitter.com/
          </label>
          <input
            type="text"
            name="twitter"
            id="twitter"
            className="rss-field"
            placeholder=" "
            value={twitter}
            onChange={(e) => {
              setTwitter(e.target.value);
            }}
          />
        </p>
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
          <SubmitBtn btnText="Guardar" handleSubmit={handleSubmit} />
        </FormField>
      </FormTemplate>
    </div>
  );
};

export default ChangeProfile;
