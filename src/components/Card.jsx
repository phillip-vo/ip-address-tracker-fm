import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Card = () => {
  const { data } = useContext(AppContext);

  return (
    <div className="bg-white w-full flex flex-col items-center gap-6 p-6 rounded-xl mt-6 xl:flex-row xl:justify-evenly xl:items-start xl:w-10/12 xl:mt-10">
      <div className="flex flex-col items-center gap-1 xl:flex-1 xl:items-start">
        <span className="text-dark-gray uppercase font-bold text-xs tracking-widest">
          ip address
        </span>
        <span className="text-very-dark-gray font-bold text-xl">
          {data?.ip}
        </span>
      </div>
      <div className="h-16 border border-dark-gray opacity-25 mt-2 hidden xl:block"></div>
      <div className="flex flex-col items-center gap-1 xl:flex-1 xl:items-start">
        <span className="text-dark-gray uppercase font-bold text-xs tracking-widest">
          location
        </span>
        <span className="text-very-dark-gray font-bold text-xl text-center xl:text-left">
          {data.location?.city}, {data.location?.region}{" "}
          {data.location?.postalCode}
        </span>
      </div>
      <div className="h-16 border border-dark-gray opacity-25 mt-2 hidden xl:block"></div>
      <div className="flex flex-col items-center gap-1 xl:flex-1 xl:items-start">
        <span className="text-dark-gray uppercase font-bold text-xs tracking-widest">
          Timezone
        </span>
        <span className="text-very-dark-gray font-bold text-xl">
          UTC {data.location?.timezone}
        </span>
      </div>
      <div className="h-16 border border-dark-gray opacity-25 mt-2 hidden xl:block"></div>
      <div className="flex flex-col items-center gap-1 xl:flex-1 xl:items-start">
        <span className="text-dark-gray uppercase font-bold text-xs tracking-widest">
          isp
        </span>
        <span className="text-very-dark-gray font-bold text-xl">
          {data?.isp}
        </span>
      </div>
    </div>
  );
};

export default Card;
