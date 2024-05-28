import { useState } from "react";
import FormTemplate from "../../Templates/FormTemplate";
import FormField from "../FormField/FormField";
import SubmitBtn from "../SubmitBtn/SubmitBtn";
import "./ChangeProfile.css";
const ChangeProfile = ({ currentUser }) => {
  const interestsList = [
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
  ];
  const [profile_pic, setProfilePic] = useState(currentUser?.profile_pic);
  const [fullname, setFullname] = useState(currentUser?.fullname);
  const [bio, setBio] = useState(currentUser?.bio);
  const [username, setUsername] = useState(currentUser?.username);
  const [location, setLocation] = useState(currentUser?.location);
  const [birthdate, setBirthdate] = useState(currentUser?.dateOfBirth);
  const [instagram, setInstagram] = useState(
    currentUser?.rrssUsernames.instagram
  );
  const [facebook, setFacebook] = useState(currentUser?.rrssUsernames.facebook);
  const [twitter, setTwitter] = useState(currentUser?.rrssUsernames.twitter);
  const [tiktok, setTiktok] = useState(currentUser?.rrssUsernames.threads);
  const [interests, setInterests] = useState(
    currentUser?.rrssUsernames.interests
  );
  return (
    <div className="w-full absolute top-12 md:top-20 bottom-12 bg-white flex flex-col pb-10 overflow-y-auto">
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
        <p className="form-field">
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
        <p className="form-field">
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
        <p className="form-field">
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
        <p className="form-field">
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
        <FormField>
            <SubmitBtn btnText="Guardar" />
        </FormField>
      </FormTemplate>
    </div>
  );
};

export default ChangeProfile;
