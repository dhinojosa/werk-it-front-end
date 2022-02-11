import React from 'react'

import { useNavigate, useParams } from "react-router-dom";

function Profile() {
  let navigate = useNavigate();
  let { username } = useParams();
  return (
    <div>
      THIS IS THE PROFILE PAGE FOR {username}!
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        {" "}
        Change to home page
      </button>
    </div>
  );
}

export default Profile
