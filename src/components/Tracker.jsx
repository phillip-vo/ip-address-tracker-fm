import React, { useContext, useState } from "react";
import Card from "./Card";
import { checkIfIpAddressOrDomain } from "../utils/utils";
import { AppContext } from "../context/AppContext";

const Tracker = () => {
  const [userInput, setUserInput] = useState("");
  const { requestUrl, setRequestUrl } = useContext(AppContext);
  return (
    <div className="absolute z-10 top-0 left-0 w-full px-6 flex flex-col items-center justify-center">
      <h1 className="text-white text-2xl font-medium py-7">
        IP Address Tracker
      </h1>
      <div className="w-full flex xl:w-5/12">
        <input
          type="text"
          value={userInput}
          placeholder="Search for any IP address or domain"
          className="w-10/12 text-sm p-4 outline-0 rounded-l-xl"
          onChange={(e) => setUserInput(e.target.value)}
        />
        <button
          className="bg-black active:bg-very-dark-gray w-2/12 flex justify-center items-center p-4 rounded-r-xl"
          onClick={() => {
            setRequestUrl(checkIfIpAddressOrDomain(userInput));
          }}
        >
          <img src="images/icon-arrow.svg" alt="search" />
        </button>
      </div>
      {requestUrl && <Card />}
    </div>
  );
};

export default Tracker;
