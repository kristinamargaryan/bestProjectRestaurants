import React from "react";
import { useAuth } from "../contexts/AuthContext";
import { db } from "../firebase";
import { useState, useEffect } from "react";
export default function MyRest(props) {
  const [userRestParams, setUserRestParams] = useState({});
  async function allDataFirestore() {
    const cityRef = db.collection("restaurants").doc(props.currentUser.uid);
    const doc = await cityRef.get();

    if (!doc.exists) {
      console.log("No such document!");
    } else {
      const data = doc.data();
      console.log(data)
      const result = Object.keys(data).map((key) => [key, data[key]]);
      
      console.log(result);
      setUserRestParams(result);
      //   console.log("Document data:", doc.data());
    }
  }

  useEffect(() => {
    allDataFirestore();
  }, []);
  return (
    <div>
      {" "}
      {userRestParams.length && (
        <div>
          {userRestParams.map((item) => (
            <div
              style={{
                display: "flex",
              }}
            >
              <div
               
              >
                {item[0]}:
              </div>
              <div>{item[1] + ""}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
