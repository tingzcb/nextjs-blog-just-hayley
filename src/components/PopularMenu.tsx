import Link from "next/link";
import React from "react";

type Props = {};

const PopularMenu = (props: Props) => {
  return (
    <div className="container py-8 ">
      <h2 className="text-gray-500 text-sm">{"What's hot"}</h2>
      <h1 className=" text-2xl font-semibold font-mono">Most Popular</h1>
      <div className="items py-4 hover:-translate-y-[2px] hover:bg-gray-100 ">
        <Link href="/" className="  ">
          <div className="imageContainer "></div>

          <div className="textContainer  flex flex-col space-y-2 ">
            <div className="bg-orange-600 w-fit px-2 py-0.5 rounded-full content-center">
              {" "}
              <span className="text-slate-300 text-sm ">Travel</span>
            </div>

            <h3 className="text-base">
              Lorem ipsum dolor sit!Lorem ipsum dolor sit!
            </h3>
            <div className="detail text-xs">
              <span className="username ">John Doe</span>
              <span className="bldate text-gray-600"> - 23.03.2024</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default PopularMenu;
