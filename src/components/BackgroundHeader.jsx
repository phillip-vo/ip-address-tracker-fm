import React from "react";
import { useMediaQuery } from "react-responsive";

const BackgroundHeader = () => {
  const isDesktopOrTablet = useMediaQuery({
    query: "(min-width: 640px)",
  });

  return (
    <div className="">
      {isDesktopOrTablet ? (
        <img
          src="images/pattern-bg-desktop.png"
          alt="background"
          className="w-full"
        />
      ) : (
        <img
          src="images/pattern-bg-mobile.png"
          alt="background"
          className="w-full"
        />
      )}
    </div>
  );
};

export default BackgroundHeader;
