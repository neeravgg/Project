import React from "react";
import SidebarContext from "../../context/SidebarContext";
import useMediaQuery from "../hooks/useMediaQuery";

import Menu from "./Sidebar_menu";

export default function SideBar_list(props) {
  const { Open, setOpen } = React.useContext(SidebarContext);
  const isLaptop = useMediaQuery("(min-width: 1024px)");
  const isTablet = useMediaQuery("(min-width: 768px )");

  function srink() {
    return Open ? "space-y-6" : "space-y-10";
  }
  function hide() {
    return !Open && "hidden";
  }

  return (
    <ul
      className={`${
        isLaptop ? srink() : hide()
      }  space-y-6 tracking-wide `}
    >
      {Menu.filter((Menu) => Menu.index < 6).map((Menu) => (
        <li>
          <a
            href='#'
            className={` ${
              Open ? "px-5 justify-start" : "px-4 justify-center"
            }  rounded-3xl py-3 flex justify-start items-center space-x-4  group hover:bg-skin-btn-muted transition ease-in duration-100 hover:shadow-lg font-semibold text-xl dark:theme-dark   ${
              isTablet && "text-md"
            } `}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className={`${Open ? "w-6 h-6" : "w-8 h-8"}`}
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path
                className=' text-skin-svg-accent  group-hover:text-skin-svg-hover dark:theme-dark transition ease-in duration-100'
                d={Menu.path1}
              />
              <path
                className=' text-skin-svg-muted group-hover:text-skin-svg-hover-muted dark:theme-dark transition ease-in duration-100'
                d={Menu.path2}
              />
            </svg>
            <span
              className={` text-skin-base dark:theme-dark  
            ${!Open && "hidden"}`}
            >
              {Menu.title}
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}
