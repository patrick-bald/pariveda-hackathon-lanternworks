import { useEffect, useState } from "react";

import "./Profile.css";
import defaultImage from '../assets/profile_image.svg';
import axios from "axios";

const Profile = (props) => {

  const mockProfile = {
    fullName: "Me",
    pronouns: "they/them",
    type: "mentee",
    school: "University of College",
    email: "email@website.com",
    interests: ["hobbies", "activities", "fun", "things", "stuff"],
    partner: "You",
    image: defaultImage
  }

  const mockPartner = {
    fullName: "You",
    pronouns: "they/them",
    type: "mentor",
    occupation: "job",
    email: "email@website.com",
    experience: ["STEM", "Law"],
    image: defaultImage
  }

  const [profile, setProfile] = useState(mockProfile);
  const [partner, setPartner] = useState(null);
  const [editing, toggleEditing] = useState(false);


  useEffect(() => {

    async function fetchData() {

      // TODO: Call correct user recieved from props
      var response = await axios.get("https://q61b1ddpui.execute-api.us-east-2.amazonaws.com/beta/user/user-1");      
      var profileFromAPI = response.data;
      
      var myProfile = {};
      if(profileFromAPI.type === "mentee") {
        Object.keys(mockProfile).forEach(key => {
          myProfile[key] = profileFromAPI[key];
        });
      } else {
        Object.keys(mockPartner).forEach(key => {
          myProfile[key] = profileFromAPI[key];
        });
      }
      myProfile.image=defaultImage;
      setProfile(myProfile);

      // TODO: Fetch image from s3
      response = await axios.get("https://q61b1ddpui.execute-api.us-east-2.amazonaws.com/beta/user/" + myProfile["partner"]);
      console.log(myProfile)
      console.log(response)
      profileFromAPI = response.data;

      var myPartner = {};
      if(profileFromAPI.type === "mentee") {
        Object.keys(mockProfile).forEach(key => {
          myPartner[key] = profileFromAPI[key];
        });
      } else {
        Object.keys(mockPartner).forEach(key => {
          myPartner[key] = profileFromAPI[key];
        });
      }
      myPartner.image=defaultImage;
      setPartner(myPartner);
      }

    fetchData();
  }, []);

  // TODO: Imeplement API call to upload image to s3
  const uploadNewImage = (img) => {

  }

  return (
    <div className="content-container">
      {/* Profile Info */}
      <div className="info-container">
        <div className="info">
          <div>
            <h1>{profile.fullName}</h1>
            <p>({profile.pronouns})</p>
          </div>
          <div className="break">
            {profile.type === "mentee" ? (<p>School: {profile.school}</p>) : (<p>Occupation: {profile.occupation}</p>)}
            <p>Contact: {profile.email}</p>
            {profile.type === "mentee" ? (<p>Interests: {profile.interests.join(", ")}</p>) : <p>Experience: {profile.experience.join(", ")}</p>}
          </div>
            {profile.type === "mentor" ? (
            <div className="break">
              <p>Background Check: {profile.passedBackgroundCheck ? "Complete" : "Incomplete"}</p>
              <p>Training: {profile.trainingComplete ? "Complete" : "Incomplete"}</p>
            </div>
            ) : null}
        </div>
        <div className="info">
          <img src={profile.image} alt="<profile_photo>"/>
        </div>
      </div>
      {/* <div className="edit-button-container">
        <button className="edit-profile">Edit Profile</button>
      </div> */}


      {/* Partner Info */}
      {partner ? (
      <div className="info-container">
        <div className="info">
          <div>
            <h2>{partner.type === "mentor" ? "Mentor": "Mentee"}:</h2>
            <h3>{partner.fullName}</h3>
            <p>({partner.pronouns})</p>
          </div>
          <div className="break">
            {partner.type === "mentor" ? (<p>Occupation: {partner.occupation}</p>): (<p>School: {partner.school}</p>)}
            <p>Contact: {partner.email}</p>
            {partner.type === "mentor" ? (<p>Experience: {partner.experience.join(", ")}</p>) : <p>Interests: {partner.interests.join(", ")}</p>}
          </div>
        </div>
        <div className="info">
          <img className="partner-photo" src={partner.image} alt="<profile_photo>"/>
        </div>
      </div>
      ) : null}
    </div>
  );
}

export default Profile;