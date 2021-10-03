import { useState } from "react";

function Profile(props) {

  const mockStudent = {
    name: "Me",
    pronouns: "they/them",
    school: "University of College",
    interests: "hobbies",
  }

  const [name, setName] = useState("Me");
  

  return (
    <div className="content-container">
      <div className="information-container">
        <div className="my-info">
          <h1>{name}</h1>
        </div>
      </div>
    </div>  
  )
}

export default Profile;