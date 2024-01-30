import React from 'react'
import "./Profile.module.css"
const Profile = () => {
  return (
      <div class="profile-container">
    <h2>User Profile</h2>
    <form>
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" placeholder="Enter your username" required/>

        <label for="password">Password:</label>
        <input type="password" id="password" name="password" placeholder="********" required disabled/>

        <button type="button" class="download-btn">
            <span class="download-icon"></span> Download Offer Letter
        </button>
        <br /> <br />
        <button type="button" class="download-btn">
            <span class="download-icon"></span> Download Joining Letter
        </button>
    </form>
    </div>

  )
}

export default Profile
