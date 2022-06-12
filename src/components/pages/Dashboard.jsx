import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../AuthContext";
import { useNavigate } from "react-router-dom";
export default function Dashboard() {
  const [error, setError] = useState("");

  const {
    currentUser,
    profilePicture,
    logout,
    userRestPhotos,
    updater,
    logOutFunc,
  } = useAuth();

  const navigate = useNavigate();

  async function handleLogout() {
    logOutFunc();
    setError("");
    try {
      await logout();
      navigate("/");
    } catch {
      setError("failed to log out");
    }
  }
console.log(currentUser.uid)
  return (
    <div>
      {/* {!Object.keys(userRestPhotos).length === 0 ? (
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "200px",
              height: "200px",
              border: "1px solid #333",
            }}
          >
            <h2>Profile</h2>
            {error && <h4>{error}</h4>}
            <div>
              <strong>Email:</strong> {currentUser.email}
            </div>
            <Link
              to="/UpdateProfile"
              style={{
                border: "1px solid #156",
                textDecoration: "none",
                color: "#fff",
                backgroundColor: "blue",
                padding: "5px",
                width: "105px",
              }}
            >
              Update Profile
            </Link>
          </div>

          <button onClick={handleLogout}>Log Out</button>
        </div>
      ) : (
        <div>
          <div
            style={{
             
              backgroundSize: { userRestPhotos } ? "cover" : null,
              display: "flex",
              flexDirection: "column",
              width: "200px",
              height: "200px",
              border: "1px solid #333",
            }}
          >
            <h2>Profile</h2>
            {error && <h4>{error}</h4>}
            <div>
              <strong>Email:</strong> {currentUser.email}
            </div>
            <Link
              to="/UpdateProfile"
              style={{
                border: "1px solid #156",
                textDecoration: "none",
                color: "#fff",
                backgroundColor: "blue",
                padding: "5px",
                width: "105px",
              }}
            >
              Update Profile
            </Link>
          </div>

          
        </div>
      )} */}
      <button onClick={handleLogout}>Log Out</button>
    </div>
  );
}
