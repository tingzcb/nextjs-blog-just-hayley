import Link from "next/link";
import React from "react";

type Props = {
  item: any;
  key: any;
};

const Cards = ({ item, key }: Props) => {
  return (
    <div className="max-w-md mx-auto my-4  bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className=" md:flex">
        <div className="md:shrink-0 ">
          {item.img && (
            <img
              className="h-48 w-full object-cover md:h-full md:w-48"
              src={item.img}
              alt="recent post image"
            />
          )}
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            <span>{item.createdAt.substring(0, 10)} </span>
            <span className="text-red-500"> -{item.catSlug}</span>
          </div>
          <a
            href={`/posts/${item.slug}`}
            className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
          >
            {item.title}
          </a>
          <p className="mt-2 text-slate-500">{item.desc.substring(0, 60)}</p>
          <Link href={`/posts/${item.slug}`}>
            <p className="underline underline-offset-4 font-semi text-sky-900  hover:-translate-y-[2px]">
              {" "}
              Read More
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cards;
