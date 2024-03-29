import Link from "next/link";
import React from "react";

type Props = {};

const Cards = (props: Props) => {
  return (
    <div className="grid grid-cols-2 max-w-3xl p-4 my-2 rounded-lg gap-8">
      <div className="imageContainer">
        <img
          src="/Island.jpg"
          alt="recent post image"
          className="rounded-lg w-110 h-80"
        ></img>
      </div>

      <div className="textContainer">
        <div className="detail">
          <span>11.03.24 - </span>
          <span className="text-red-500">CULTURE</span>
        </div>

        <h1 className="py-4 text-2xl font-semibold font-mono ">
          Lorem ipsum dolor sit amet quis sint delectus
        </h1>
        <p className=" text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, inventore
          voluptatibus quis sint delectus dignissimos, amet dolorum vero culpa,
          laudantium ducimus rem fugiat!
        </p>

        <div className="py-4">
          <Link href={"/blog"}>
            <p className="underline underline-offset-4 font-semi  hover:-translate-y-[2px]">
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
