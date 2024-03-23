import Link from "next/link";
import React from "react";

type Props = {};

const CategoryList = (props: Props) => {
  return (
    <div className="container">
      <h1 className=" py-4 text-2xl font-semibold font-mono ">
        Popular Categories
      </h1>
      <div className="categories grid grid-cols-6 gap-4">
        <div className="category bg-slate-500 w-fit py-2 px-4 rounded-md hover:-translate-y-[2px]">
          <Link
            href={"/blog？cat=style"}
            className="flex flex-row gap-2 text-lg font-semibold font-mono "
          >
            <img
              className="h-[2.2rem] w-[2.2rem] rounded-full object-cover object-center"
              src="/facebook.png"
              alt="facebook image"
            />
            Food
          </Link>
        </div>

        <div className="category hover:-translate-y-[2px] bg-slate-500 w-fit py-2 px-4 rounded-md">
          <Link
            href={"/blog？cat=style"}
            className="flex flex-row gap-2 text-lg font-semibold font-mono"
          >
            <img
              className="h-[2.2rem] w-[2.2rem] rounded-full object-cover object-center"
              src="/facebook.png"
              alt="facebook image"
            />
            Food
          </Link>
        </div>

        <div className="category hover:-translate-y-[2px] bg-slate-500 w-fit py-2 px-4 rounded-md">
          <Link
            href={"/blog？cat=style"}
            className="flex flex-row gap-2 text-lg font-semibold font-mono"
          >
            <img
              className="h-[2.2rem] w-[2.2rem] rounded-full object-cover object-center"
              src="/facebook.png"
              alt="facebook image"
            />
            Food
          </Link>
        </div>
        <div className="category hover:-translate-y-[2px]  bg-slate-500 w-fit py-2 px-4 rounded-md">
          <Link
            href={"/blog？cat=style"}
            className="flex flex-row gap-2 text-lg font-semibold font-mono"
          >
            <img
              className="h-[2.2rem] w-[2.2rem] rounded-full object-cover object-center"
              src="/facebook.png"
              alt="facebook image"
            />
            Food
          </Link>
        </div>
        <div className="category hover:-translate-y-[2px] bg-slate-500 w-fit py-2 px-4 rounded-md">
          <Link
            href={"/blog？cat=style"}
            className="flex flex-row gap-2 text-lg font-semibold font-mono"
          >
            <img
              className="h-[2.2rem] w-[2.2rem] rounded-full object-cover object-center"
              src="/facebook.png"
              alt="facebook image"
            />
            Food
          </Link>
        </div>
        <div className="category hover:-translate-y-[2px] bg-slate-500 w-fit py-2 px-4 rounded-md">
          <Link
            href={"/blog？cat=style"}
            className="flex flex-row gap-2 text-lg font-semibold font-mono"
          >
            <img
              className="h-[2.2rem] w-[2.2rem] rounded-full object-cover object-center"
              src="/facebook.png"
              alt="facebook image"
            />
            Food
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
