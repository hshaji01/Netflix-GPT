import React from "react";
import SearchBar from "./SearchBar";
import SearchResult from "./SearchResult";
import { HOME_BCKGRD_IMG } from "../utils/constant";

const GptSearch = () => {
  return (
    <div>
      <div className="w-full absolute -z-10">
        <div className=" opacity-80">
          <img
            src={HOME_BCKGRD_IMG}
            alt="Alternate"
          />
        </div>
      </div>
      <SearchBar />
      <SearchResult />
    </div>
  );
};

export default GptSearch;
