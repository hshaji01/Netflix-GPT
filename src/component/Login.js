import React, { useRef, useState } from "react";
import Header from "./Header";
import Validate from "../utils/Validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/UserSlice";
import { HOME_BCKGRD_IMG } from "../utils/constant";

const Login = () => {
  const [showSignUpForm, setShowSignUpForm] = useState(false);
  const [showErrors, setShowErrors] = useState(false);
  const fullNameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const dispatch = useDispatch();
  const HandleSubmit = () => {
    const isMessage =showSignUpForm ? Validate(emailRef.current.value, passwordRef.current.value, fullNameRef.current.value) : Validate(emailRef.current.value, passwordRef.current.value);
    setShowErrors(isMessage);
    if(isMessage) return;
    if(showSignUpForm)  {
        createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            updateProfile(user, {
                displayName: fullNameRef.current.value
              }).then(() => {
                setShowSignUpForm(false)
              }).catch((error) => {
                setShowErrors(error.message)
              });
        })
        .catch((error) => {
            const errorCode = error.code;
            let errorMessage = error.message;
            switch(errorCode){
                case "auth/email-already-in-use":
                  errorMessage = "Email already used";
                  break;
                default:
                  return;
              }      
              setShowErrors(errorMessage);
            
        });
    } else {
        signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            const {uid, email, displayName} = user;
            dispatch(addUser({uid:uid, email:email, displayName:displayName}));
        })
        .catch((error) => {
            const errorCode = error.code;
            let errorMessage = error.message;
            switch(errorCode){
                case "auth/invalid-credentialFirebase":
                  errorMessage = "Invalid User";
                  break;
                default:
                  return;
              }
            setShowErrors(errorMessage)
        });
    }


  };
  return (
    <div className="relative">
      <Header />
      <div className="w-full">
        <div className="">
          <img
            src={HOME_BCKGRD_IMG}
            alt="Alternate"
          />
        </div>
      </div>
      <div className="absolute top-32 left-1/2 -translate-x-1/2  ">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="bg-black w-[420px] min-h-[480px] text-left p-16"
        >
          <div>
            <h1 className="text-white font-semibold text-3xl pb-4">
              {showSignUpForm ? "Sign Up" : "Sign In"}
            </h1>
            {showSignUpForm && (
              <input
                ref={fullNameRef}
                className="my-4 w-full placeholder:p-2 p-4 text-white"
                type="text"
                placeholder="Full Name"
              ></input>
            )}
            <input
              ref={emailRef}
              className="my-4 w-full placeholder:p-2 p-4 text-white"
              type="text"
              placeholder="Email Address"
            ></input>
            <input
              ref={passwordRef}
              className="my-4 w-full placeholder:p-2 p-4 text-white"
              type="password"
              placeholder="Password"
            ></input>
                {showErrors && <p className="text-[#e50914] font-semibold py-2">{showErrors}</p>}
            <button
              onClick={HandleSubmit}
              className="w-full rounded-md bg-[#e50914] h-10 text-white font-semibold my-4"
            >
              {showSignUpForm ? "Sign Up" : "Sign In"}
            </button>
            <p className=" text-gray-500">
              {showSignUpForm ? "Already a user " : "New to Netflix? "}
              <span
                onClick={() => setShowSignUpForm(!showSignUpForm)}
                className="text-white cursor-pointer"
              >
                {showSignUpForm ? "Sign In Now" : "Sign Up Now"}
              </span>
            </p>
            :
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
