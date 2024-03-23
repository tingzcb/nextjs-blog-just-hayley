import Link from "next/link";
import React from "react";

type Props = {};

const SideCategories = (props: Props) => {
  return (
    <div>
      <h2 className="text-gray-500 text-sm">{"Discover by topic"}</h2>
      <h1 className=" text-2xl font-semibold font-mono">Categories</h1>
      <div className="grid grid-cols-3 gap-2 py-2 ">
        <div className="category hover:-translate-y-[2px] bg-slate-500 w-24 py-2 px-4 rounded-full">
          <Link
            href={"/blog？cat=style"}
            className="flex flex-row gap-2 text-lg font-semibold font-mono"
          >
            Style
          </Link>
        </div>

        <div className="category hover:-translate-y-[2px] bg-slate-500 w-24 py-2 px-4 rounded-full">
          <Link
            href={"/blog？cat=style"}
            className="flex flex-row gap-2 text-lg font-semibold font-mono"
          >
            Fashion
          </Link>
        </div>
        <div className="category hover:-translate-y-[2px] bg-slate-500 w-24 py-2 px-4 rounded-full">
          <Link
            href={"/blog？cat=style"}
            className="flex flex-row gap-2 text-lg font-semibold font-mono"
          >
            Food
          </Link>
        </div>
        <div className="category hover:-translate-y-[2px] bg-slate-500 w-24 py-2 px-4 rounded-full">
          <Link
            href={"/blog？cat=style"}
            className="flex flex-row gap-2 text-lg font-semibold font-mono"
          >
            Travel
          </Link>
        </div>
        <div className="category hover:-translate-y-[2px] bg-slate-500 w-24 py-2 px-4 rounded-full">
          <Link
            href={"/blog？cat=style"}
            className="flex flex-row gap-2 text-lg font-semibold font-mono"
          >
            Culture
          </Link>
        </div>
        <div className="category hover:-translate-y-[2px] bg-slate-500 w-24 py-2 px-4 rounded-full">
          <Link
            href={"/blog？cat=style"}
            className="flex flex-row gap-2 text-lg font-semibold font-mono"
          >
            Coding
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideCategories;
