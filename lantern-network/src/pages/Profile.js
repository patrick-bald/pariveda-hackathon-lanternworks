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
  const [partner, setPartner] = useState(mockPartner);
  const [editing, toggleEditing] = useState(false);


  useEffect(() => {

    async function fetchData() {

      var response = await axios.get("https://q61b1ddpui.execute-api.us-east-2.amazonaws.com/beta/mentor/test-id-8");
      console.log(response);
      // setProfile(response);
      // TODO: Fetch image from s3
      // response = axios.get()
      // setPartner(response);
      }

    fetchData();
  });

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
      {/* TODO: Only render if partner exists */}
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
          </div>
        </div>
        <div className="info">
          <img className="partner-photo" src={partner.image} alt="<profile_photo>"/>
        </div>
      </div>
    </div>
  );
}

export default Profile;