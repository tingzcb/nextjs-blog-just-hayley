import React from "react";

const LearnPath = () => {
  return (
    <>
      <div>Learn Path</div>
      <div className="flex flex-col items-center">
        <div>
          <img src="" />
        </div>
        <div className="py-1 px-5 flex justify-center items-center rounded-[22.5rem] bg-fem-darkblue mt-8">
          <p className="font-normal font-Overpass text-center text-sm md:text-[0.938rem] text-fem-orange"></p>
        </div>
        <p className="font-Overpress font-bold text-2xl md:text-[1.75rem] text-white mt-8">
          Thank you!
        </p>
        <p className="font-Overpress font-normal text-sm md:text-[0.938rem] mb-4 md:mb-0 text-center text-fem-lightgrey mt-[0.438rem]">
          We appreciate you taking the time to give a rating. If you ever need
          more support, don't hesitate to get in touch!
        </p>
      </div>
    </>
  );
};

export default LearnPath;
