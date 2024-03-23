import Link from "next/link";
import React from "react";

type Props = {};
// For Editors Pick Side Menu
const MenuForPopular = (props: Props) => {
  return (
    <div className="container py-8 ">
      <h2 className="text-gray-500 text-sm">{"Chosen by the editor"}</h2>
      <h1 className=" text-2xl font-semibold font-mono">Editors Pick</h1>
      <div className="items py-4 hover:-translate-y-[2px] hover:bg-gray-100 ">
        <Link href="/" className="grid grid-cols-3  ">
          <div className="imageContainer ">
            <img
              src="/Island.jpg"
              alt="fill"
              className="h-[5rem] w-[5rem] rounded-full object-cover object-center border-4 border-gray-300 "
            />
          </div>

          <div className="textContainer col-span-2 flex flex-col space-y-2 ">
            <div className="bg-orange-600 w-fit px-2 py-0.5 rounded-full content-center">
              {" "}
              <span className="text-slate-300 text-sm ">Travel</span>
            </div>

            <h3 className="text-base">Lorem ipsum dolor sit!</h3>
            <div className="detail text-xs">
              <span className="username ">John Doe</span>
              <span className="bldate text-gray-600"> - 23.03.2024</span>
            </div>
          </div>
        </Link>
      </div>

      <div className="items py-4 hover:-translate-y-[2px] hover:bg-gray-100 ">
        <Link href="/" className="grid grid-cols-3  ">
          <div className="imageContainer ">
            <img
              src="/Island.jpg"
              alt="fill"
              className="h-[5rem] w-[5rem] rounded-full object-cover object-center border-4 border-gray-300 "
            />
          </div>
          <div className="textContainer col-span-2 flex flex-col space-y-2 ">
            <div className="bg-orange-600 w-fit px-2 py-0.5 rounded-full content-center">
              {" "}
              <span className="text-slate-300 text-sm ">Travel</span>
            </div>
            <h3 className="text-base">Lorem ipsum dolor sit!</h3>
            <div className="detail text-xs">
              <span className="username ">John Doe</span>
              <span className="bldate text-gray-600"> - 23.03.2024</span>
            </div>
          </div>
        </Link>
      </div>

      <div className="items py-4 hover:-translate-y-[2px] hover:bg-gray-100  ">
        <Link href="/" className="grid grid-cols-3 ">
          <div className="imageContainer ">
            <img
              src="/Island.jpg"
              alt="fill"
              className="h-[5rem] w-[5rem] rounded-full object-cover object-center border-4 border-gray-300 "
            />
          </div>

          <div className="textContainer col-span-2 flex flex-col space-y-2 ">
            <div className="bg-orange-600 w-fit px-2 py-0.5 rounded-full content-center">
              {" "}
              <span className="text-slate-300 text-sm ">Travel</span>
            </div>

            <h3 className="text-base">Lorem ipsum dolor sit!</h3>
            <div className="detail text-xs">
              <span className="username ">John Doe</span>
              <span className="bldate text-gray-600"> - 23.03.2024</span>
            </div>
          </div>
        </Link>
      </div>

      <div className="items py-4  hover:-translate-y-[2px] hover:bg-gray-100">
        <Link href="/" className="grid grid-cols-3  ">
          <div className="imageContainer ">
            <img
              src="/Island.jpg"
              alt="fill"
              className="h-[5rem] w-[5rem] rounded-full object-cover object-center border-4 border-gray-300 "
            />
          </div>

          <div className="textContainer col-span-2 flex flex-col space-y-2 ">
            <div className="bg-orange-600 w-fit px-2 py-0.5 rounded-full content-center">
              {" "}
              <span className="text-slate-300 text-sm ">Travel</span>
            </div>

            <h3 className="text-base">Lorem ipsum dolor sit!</h3>
            <div className="detail text-xs">
              <span className="username ">John Doe</span>
              <span className="bldate text-gray-600"> - 23.03.2024</span>
            </div>
          </div>
        </Link>
      </div>
      {/* ---------------Finish the Most Popular Part!----------------------- */}
    </div>
  );
};

export default MenuForPopular;
