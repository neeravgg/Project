import React from "react";
import useMediaQuery from "../hooks/useMediaQuery";

const gradeSchema = [
  {
    title: "Unit 1",
    grade: "A",
  },
  {
    title: "Unit 2",
    grade: "A",
  },
  {
    title: "Unit 3",
    grade: "A",
  },
  {
    title: "Final test",
    grade: "A",
  },
];
const Color = ["from-black to-gray-900"];

const Card = (props) => {
  const isLaptop = useMediaQuery("(min-width: 1024px)");
  const isTablet = useMediaQuery("(min-width: 768px )");

  return (
    <div
      className={`${isLaptop ? "flex flex-row px-1 " : " flex flex-col"} ${
        isTablet && "px-10"
      } gap-5  `}
    >
      {/* Grades */}
      <div className=' flex-1 '>
        <div
          className={`flex flex-col transform hover:scale-105 h-80 cursor-pointer transition duration-200 ease-in-out px-4  py-4 shadow-md border-2 border-skin-muted  rounded-3xl bg-skin-base  dark:bg-gradient-to-bl ${Color[0]}  gap-4 dark:theme-dark`}
        >
          {/* title */}
          <div className='flex flex-row justify-between align-between px-4'>
            <span className=' text-skin-base dark:theme-dark text-3xl font-bold pt-3 '>
              Grades
            </span>
            <span className=' w-14  h-14 flex items-center justify-center  bg-teal-900 dark:theme-dark rounded-2xl bg-opacity-90 text-white text-center font-bold text-3xl shadow-md'>
              A
            </span>
          </div>
          {/* ranking */}
         <div className=""></div>
        </div>
      </div>
      {/* Completion */}

      <div className=' flex-1 '>
        <div
          className={`flex flex-col transform hover:scale-105 h-80 cursor-pointer transition duration-200 ease-in-out px-4  py-4 shadow-md border-2 border-skin-muted  rounded-3xl bg-skin-base  dark:bg-gradient-to-bl ${Color[0]}  gap-4 dark:theme-dark`}
        >
          {/* title */}
          <div className='flex flex-row justify-between align-between px-4'>
            <span className=' text-skin-base dark:theme-dark text-3xl font-bold pt-3 '>
              Grades
            </span>
            <span className=' w-14  h-14 flex items-center justify-center  bg-teal-900 dark:theme-dark rounded-2xl bg-opacity-90 text-white text-center font-bold text-3xl shadow-md'>
              A
            </span>
          </div>
          {/* ranking */}
          <div className='grid grid-rows-8 gap-4 bg-skin-dull dark:theme-dark px-4 py-4 rounded-2xl'>
            {gradeSchema.map((Grade) => (
              <div className=' shadow-sm border-skin-base rounded-2xl  bg-skin-base dark:theme-dark '>
                <div className='grid grid-cols-3 grid-flow-row font-raleway'>
                  <span className='h-8 py-1 col-span-2 rounded-2xl text-white text-center bg-skin-highlight  text-xl font-semibold '>
                    {Grade.title}
                  </span>
                  <span className='h-8 py-1 text-center text-skin-base text-xl font-semibold '>
                    {Grade.grade}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Marks */}

      <div className=' flex-1 '>
        <div
          className={`flex flex-col transform hover:scale-105 h-80 cursor-pointer transition duration-200 ease-in-out px-4  py-4 shadow-md border-2 border-skin-muted  rounded-3xl bg-skin-base  dark:bg-gradient-to-bl ${Color[0]}  gap-4 dark:theme-dark`}
        >
          {/* title */}
          <div className='flex flex-row justify-between align-between px-4'>
            <span className=' text-skin-base dark:theme-dark text-3xl font-bold pt-3 '>
              Grades
            </span>
            <span className=' w-14  h-14 flex items-center justify-center  bg-teal-900 dark:theme-dark rounded-2xl bg-opacity-90 text-white text-center font-bold text-3xl shadow-md'>
              A
            </span>
          </div>
          {/* ranking */}
          <div className='grid grid-rows-8 gap-4 bg-skin-dull dark:theme-dark px-4 py-4 rounded-2xl'>
            {gradeSchema.map((Grade) => (
              <div className=' shadow-sm border-skin-base rounded-2xl  bg-skin-base dark:theme-dark '>
                <div className='grid grid-cols-3 grid-flow-row font-raleway'>
                  <span className='h-8 py-1 col-span-2 rounded-2xl text-white text-center bg-skin-highlight  text-xl font-semibold '>
                    {Grade.title}
                  </span>
                  <span className='h-8 py-1 text-center text-skin-base text-xl font-semibold '>
                    {Grade.grade}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
