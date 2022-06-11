import React from "react";
import Navbar from "./navbar";
import SidebarContext from "../context/SidebarContext";
import SideBar_list from "../assests/Sidebar/Sidebar_list";
import useMediaQuery from "../assests/hooks/useMediaQuery";

export default function SideBar() {
  const { Open, setOpen } = React.useContext(SidebarContext);
  const isLaptop = useMediaQuery("(min-width: 1024px)");
  const isSmall = useMediaQuery("(min-width: 320px)");

  function hide() {
    return Open ? "translate-x-0 w-70 px-2" : "-translate-x-full w-0 px-1";
  }
  function srink() {
    return Open ? "w-70 px-4 " : "w-20 px-2";
  }

  return (
    <div>
      <aside
        className={` ${
          isLaptop ? srink() : hide()
        }   ml-0 fixed z-10 top-0 pb-3 pt- flex flex-col justify-between h-full  font-raleway bg-skin-base dark:bg-gradient-to-tr from-[#19191b] to-[#2c2c2e] border-r border-skin-base dark:theme-dark transition duration-200 ease-in-out dark:shadow-none shadow-gray-400 shadow-sm   `}
      >
        <div
          className={` ${
            isSmall && "mt-[rem]"
          } sm:mt-[5rem] md:mt-[5rem] lg:mt-[6rem] flex justify-center items-center   py-3 -mr-5 flex-none`}
        >
          <button
            aria-label='sidebar-arrow'
            className={`hidden lg:block absolute -right-5 top-24   shadow-sm shadow-gray-400 dark:theme-dark  dark:shadow-none  bg-skin-btn-accent hover:bg-skin-btn-hover active:bg-skin-btn-accent  p-2 focus:outline-none text-lg rounded-full   cursor-pointer transition duration-200 ease-in-out  ${
              !Open && "rotate-180 "
            }`}
            onClick={() => setOpen(!Open)}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              class='h-10 w-10 text-skin-inverted'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              stroke-width='2'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                d='M15 19l-7-7 7-7'
              />
            </svg>
          </button>
        </div>

        {/* Sidebar List */}
        <SideBar_list />

        {/* Profile pic & button */}

        <div className=' flex-none'>
          {Open && (
            <div
              className={` ${
                Open && "px-2 py-4 pb-6 "
              } border-t-2 border-skin-base border-rounded dark:theme-dark  flex flex-row `}
            >
              <div className='flex-none'>
                <img
                  src='images/profile.jpeg'
                  alt=''
                  className={` w-10 h-10 shadow-lg  rounded-full object-cover `}
                />
              </div>

              <span
                className={` mt-1 px-5 text-xl font-semibold text-skin-base  dark:theme-dark flex-auto text-center`}
              >
                neerav garg
              </span>
            </div>
          )}

          {/* Take test */}
          <div className='  flex justify-between items-center'>
            <button
              className={` ${
                !isLaptop && !Open && "hidden"
              } px-4 py-4 w-full text-lg justify-center flex items-center bg-skin-btn-accent hover:bg-skin-btn-hover space-x-2 rounded-3xl  transition ease-in duration-100 hover:shadow-md `}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-7 w-7 text-skin-inverted group-hover:text-white'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path d='M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z' />
                <path
                  fill-rule='evenodd'
                  d='M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z'
                  clip-rule='evenodd'
                />
              </svg>
              <span
                className={`font-raleway font-bold text-skin-inverted group-hover:text-white  ${
                  !Open && "hidden"
                } `}
              >
                Take test
              </span>
            </button>
          </div>
        </div>
      </aside>
      <div>
        <Navbar Open={Open} onChange={() => setOpen(!Open)} />
      </div>
    </div>
  );
}
