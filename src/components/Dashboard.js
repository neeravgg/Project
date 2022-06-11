import React from "react";
import SidebarContext from "../context/SidebarContext";
import useMediaQuery from "../assests/hooks/useMediaQuery";
import Card from "../assests/Dashboard/Card";
import Middle from "../assests/Dashboard/Middle";

export default function DashBoard(props) {
  const { Open } = React.useContext(SidebarContext);
  const isLarge = useMediaQuery("(min-width: 1440px)");
  const isLaptop = useMediaQuery("(min-width: 1024px)");
  const isTablet = useMediaQuery("(min-width: 768px )");
  const isPhone = useMediaQuery("(min-width: 375px)");
  const isSmall = useMediaQuery("(min-width: 374px)");

  function greet() {
    var data = [
        [22, "Studying late,"],
        [18, "Good evening,"],
        [12, "Good afternoon,"],
        [5, "Good morning,"],
        [0, "Whoa, early bird,"],
      ],
      hr = new Date().getHours();
    for (var i = 0; i < data.length; i++) {
      if (hr >= data[i][0]) {
        return data[i][1];
      }
    }
  }
  function srink() {
    return Open ? "pl-[17rem] px-5" : "pl-[7rem] px-5";
  }

  return (
    <div
      className={` ${isLaptop && srink()} ${
        isTablet && "px-10"
      } px-2 mt-16 pt-5 min-h-screen min-w-screen  flex  justify-center   `}
    >
      <div
        className={`flex flex-col  min-h-screen w-screen ${
          isTablet && "gap-10 "
        } ${isLaptop && "gap-14"} gap-12  `}
      >
        {/* profile badge */}
        <div
          className={` pl-3 flex flex-row flex-none rounded-3xl bg-skin-base shadow-md dark:bg-gradient-to-r from-[#323232] to-[#292929] py-3 w-full justify-center align-middle gap-4 `}
        >
          <img
            src='images/profile.jpeg'
            alt=''
            className={` w-20 h-20 shadow-sm border border-skin-base dark:theme-dark justify-center align-middle rounded-full object-cover`}
          />
          {/* Greet text*/}
          <div className={` flex flex-col justify-center gap-1`}>
            <div className={` flex items-baseline flex-wrap  gap-2`}>
              <span
                className={`${
                  isLaptop && "text-3xl"
                }  text-2xl text-skin-muted dark:theme-dark font-semibold  `}
              >
                {greet()}
              </span>
              <span
                className={` text-3xl text-skin-base dark:theme-dark font-bold capitalize  `}
              >
                neerav garg
              </span>
            </div>
            <span
              className={`${
                isTablet && "text-lg block"
              } text-md text-skin-muted dark:theme-dark italic hidden md:block`}
            >
              Here is all your progress and more
            </span>
          </div>
        </div>
        <div className={` px-1 md:px-24 lg:px-6 xl:px-20`}>
          <Middle />
        </div>
        <div>
          <Card />
        </div>
      </div>
    </div>
  );
}
