import React, { useEffect } from "react";
import netflix_logo from "../netflix_logo.png";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/UserSlice";
import { useDispatch, useSelector } from "react-redux";
import { LOGGED_IN_IMG, PREFERRED_LANG } from "../utils/constant";
import { searchToggler } from "../utils/searchGPTSlice";
import { changeLanguage } from "../utils/ConfigSlice";

const Header = ({ comp }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isGptSearch = useSelector((res) => res.gpt.searchToggle);
  const LoggedInUser = useSelector((res) => res?.user?.displayName);
  const HandleSearch = () => {
    dispatch(searchToggler());
  };
  const HandleLanguage =(e) => {
    dispatch(changeLanguage(e.target.value));
  }
  const HandleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        throw new Error(error.messsage);
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
      }
    });
    return () => unsubscribe();
  }, []);
  return (
    <div className=" w-full flex justify-between pt-2 px-28 items-center absolute z-10 bg-gradient-to-b from-black">
      <div className="w-[180px]">
        <img
          className=" cursor-pointer"
          onClick={() => navigate("/")}
          src={netflix_logo}
          alt="Alternate"
        />
      </div>
      <div>
        {LoggedInUser ? (
          <div className="flex gap-3 items-center">
            {isGptSearch && <select onChange={HandleLanguage} className="bg-black text-white font-semibold h-[30px] rounded-md pl-3 ">
                {
                    PREFERRED_LANG.map(res=> <option key={res.identifier} value={res.identifier}>{res.language}</option>)
                }
            </select>}
            <button
              onClick={HandleSearch}
              className="text-sm mr-8 rounded-md w-[130px] h-[30px] bg-red-600 text-white font-semibold"
            >
              Search Movies
            </button>
            <img className="w-[40px]" src={LOGGED_IN_IMG} alt="Alternate" />            
            <button
              onClick={HandleSignOut}
              className="text-sm rounded-md w-[80px] h-[30px] bg-red-600 text-white font-semibold"
            >
              Sign Out
            </button>
          </div>
        ) : (
          typeof comp !== "undefined" &&
          comp === "Home" && (
            <button
              onClick={() => navigate("/login")}
              className="text-sm rounded-md w-[80px] h-[30px] bg-red-600 text-white font-semibold"
            >
              Sign In
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default Header;
