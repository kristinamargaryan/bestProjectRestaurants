import React, { useContext, useState, useEffect, useCallback } from "react";
import { auth, db } from "../firebase";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export default function AuthProvaider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  const [userRestParams, setUserRestParams] = useState({});
  const [userRestPhotos, setUserRestPhotos] = useState({});
  const [profilePicture, setProfilePicture] = useState(0);
  const [photosArrayState, setPhotosArrayState] = useState();
  const [paramsArrayState, setParamsArrayState] = useState();
  const all = async function () {
    let photosArray = [];
    let paramsArray = [];
    const photos = db.collection("restaurantsPhoto");
    const allPhotos = await photos.get();
    allPhotos.forEach((doc) => {
      photosArray.push(doc.data());
    });
    const params = db.collection("restaurants");
    const allParams = await params.get();
    allParams.forEach((doc) => {
      paramsArray.push(doc.data());
    });
    setPhotosArrayState(photosArray);
    setParamsArrayState(paramsArray);
  };
  async function allDataFirestore() {
    const restRefPhotos = db
      .collection("restaurantsPhoto")
      .doc(currentUser.uid);
    const restRefParams = db.collection("restaurants").doc(currentUser.uid);

    const docPhotos = await restRefPhotos.get();
    const docParams = await restRefParams.get();

    if (!docParams.exists || !docPhotos.exists) {
      setUserRestPhotos({});
      setUserRestParams({});
      console.log("No such document!");
    } else {
      const dataParams = docParams.data();
      const dataPhotos = docPhotos.data();

      setUserRestParams(dataParams);
      setUserRestPhotos(dataPhotos.avatar);
      setProfilePicture(dataPhotos.profilePicture);
    }
  }

  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  function logout() {
    return auth.signOut();
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email);
  }

  function updateEmail(email) {
    return currentUser.updateEmail(email);
  }

  function updatePassword(password) {
    return currentUser.updatePassword(password);
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);
  useEffect(() => {
    if (currentUser) {
      allDataFirestore();
    }
  }, [currentUser]);

  useEffect(() => {
    all();
  }, []);

  const value = {
    updater: allDataFirestore,
    updaterAll: all,
    photosArrayState,
    paramsArrayState,
    profilePicture,
    userRestParams,
    userRestPhotos,
    currentUser,
    login,
    signup,
    logout,
    resetPassword,
    updateEmail,
    updatePassword,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
