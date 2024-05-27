import { useState } from "react";
import FormTemplate from "../../Templates/FormTemplate";
import FormField from "../FormField/FormField";
const ChangeProfile = ({ currentUser }) => {

  const interestsList = [
    "Tecnología", "Deportes", "Música", "Cine", "Lectura",
    "Viajes", "Gastronomía", "Fotografía", "Moda", "Salud y Bienestar"
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
  const [threads, setThreads] = useState(currentUser?.rrssUsernames.threads);
  const [interests, setInterests] = useState(currentUser?.rrssUsernames.interests);
  return (
    <div className="w-full absolute top-12 md:top-20 bottom-12 bg-white flex flex-col pb-10 overflow-y-auto">
      <FormTemplate>
        <FormField>
          <img src={profile_pic} alt="" />
        </FormField>
        <FormField>
          <p className=" mx-4 w-full flex justify-between items-center">
            <label htmlFor="fullname">Nombre Completo:</label>{" "}
            <input type="text" name="" id="fullname" value={fullname} />
          </p>
        </FormField>
        <FormField>
          <p className=" mx-4 w-full flex justify-between items-center">
            <label htmlFor="bio">Bio:</label>{" "}
            <textarea
              name=""
              id="bio"
              cols="25"
              rows="5"
              value={bio}
              className="resize-none"
            ></textarea>
          </p>
        </FormField>
        <FormField>
          <p className=" mx-4 w-full flex justify-between items-center">
            <label htmlFor="username">Username</label>{" "}
            <input type="text" name="" id="username" value={username} />
          </p>
        </FormField>
        <FormField>
          <p className="mx-4 w-full flex justify-between items-center">
            <label htmlFor="location">Ubicacion</label>
            <input type="text" id="location" />
          </p>
        </FormField>
        <FormField>
          <p className="mx-4 w-full flex justify-between items-center">
            <label htmlFor="birthdate">Fecha de nacimiento</label>
            <input
              type="date"
              name=""
              id="birthdate"
              value={birthdate}
              onChange={(e) => console.log(e.target.value)}
            />
          </p>
        </FormField>
        <FormField>
          <p className="mx-4 w-full flex justify-around items-center">
            <label htmlFor="instagram">instagram.com/</label>
            <input type="text" id="instagram" value={instagram} />
          </p>
        </FormField>
        <FormField>
          <p className="mx-4 w-full flex justify-around items-center">
            <label htmlFor="facebook">facebook.com/</label>
            <input type="text" value={facebook} id="facebook" />
          </p>
        </FormField>
        <FormField>
          <p className="mx-4 w-full flex justify-around items-center">
            <label htmlFor="twitter">twitter.com/</label>
            <input type="text" id="twitter" value={twitter} />
          </p>
        </FormField>
        <FormField>
          <p className="mx-4 w-full flex justify-around items-center">
            <label htmlFor="">threads.com/</label>
            <input type="text" value={threads} />
          </p>
        </FormField>
        <FormField>
          <p className="mx-4 w-full flex justify-between items-center">
              <label htmlFor="">Intereses</label>
          </p>
        </FormField>
      </FormTemplate>
    </div>
  );
};

export default ChangeProfile;
