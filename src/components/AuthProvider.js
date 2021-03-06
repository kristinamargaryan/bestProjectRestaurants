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
  const [userRestPhotosmenu, setUserRestPhotosmenu] = useState({});
  const [profilePicture, setProfilePicture] = useState(0);
  const [userRestParams1, setUserRestParams1] = useState({});
  const [userRestPhotos1, setUserRestPhotos1] = useState({});
  const [userRestPhotosmenu1, setUserRestPhotosmenu1] = useState({});
  const [profilePicture1, setProfilePicture1] = useState("0");
  const [photosArrayState, setPhotosArrayState] = useState();
  const [paramsArrayState, setParamsArrayState] = useState();
  const [userParamsAndPhothos, setUserParamsAndPhothos] = useState();
  const [selectedRestaurant, setSelectedRestaurant] = useState({});
  // const all = async function () {
  //   let photosArray = [];
  //   let paramsArray = [];
  //   const photos = db.collection("restaurantsPhoto");
  //   const allPhotos = await photos.get();
  //   allPhotos.forEach((doc) => {
  //     photosArray.push(doc.data());
  //   });
  //   const params = db.collection("restaurants");
  //   const allParams = await params.get();
  //   allParams.forEach((doc) => {
  //     paramsArray.push(doc.data());
  //   });
  //   setUserParamsAndPhothos(
  //     paramsArray.map((user, index) => {
  //       user.photos = photosArray[index];
  //       return user;
  //     })
  //   );
  //   setPhotosArrayState(photosArray);
  //   setParamsArrayState(paramsArray);
  // };
  const all1 = async function () {
    let photosArray = [];
    let paramsArray = [];
    const photos = db.collection("restaurantsPhoto1");
    const allPhotos = await photos.get();
    allPhotos.forEach((doc) => {
      photosArray.push(doc.data());
    });
    const params = db.collection("restaurants1");
    const allParams = await params.get();
    allParams.forEach((doc) => {
      paramsArray.push(doc.data());
    });
    setUserParamsAndPhothos(
      paramsArray.map((user, index) => {
        for (let key in user) {
          user[key].photos = photosArray[index][key];
        }

        return user;
      })
    );
    setPhotosArrayState(photosArray);
    setParamsArrayState(paramsArray);
  };
  const logOutUpdate = () => {
    setUserRestPhotos1({});
    setUserRestParams1({});
  };

  async function allDataFirestore1() {
    const restRefPhotos = db
      .collection("restaurantsPhoto1")
      .doc(currentUser.uid);
    const restRefParams = db.collection("restaurants1").doc(currentUser.uid);

    const docPhotos = await restRefPhotos.get();
    const docParams = await restRefParams.get();

    if (!docParams.exists || !docPhotos.exists) {
      setUserRestPhotos1({});
      setUserRestParams1({});
      setUserRestPhotosmenu1({});

      console.log("No such document!");
    } else {
      const dataParams = docParams.data();
      const dataPhotos = docPhotos.data();
      setUserRestParams1(dataParams);
      setUserRestPhotos1(dataPhotos);
      setProfilePicture1(dataPhotos);
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
      allDataFirestore1();
    }
  }, [currentUser]);

  useEffect(() => {
    all1();
  }, []);

  function getRestInfo(obj) {
    setSelectedRestaurant(obj);
  }

  const value = {
    logOutFunc: logOutUpdate,
    updater1: allDataFirestore1,
    updaterAll1: all1,
    photosArrayState,
    paramsArrayState,
    userParamsAndPhothos,
    profilePicture,
    userRestParams,
    userRestPhotos,
    userRestPhotosmenu,
    currentUser,
    userRestParams1,
    userRestPhotos1,
    userRestPhotosmenu1,
    profilePicture1,
    getRestInfo,
    selectedRestaurant,
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
