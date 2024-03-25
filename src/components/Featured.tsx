import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import Pagination from "./Pagination";

type Props = {};

const Featured = (props: Props) => {
  return (
    <div className="container  my-0 mx-auto  text-center">
      <h1 className="title p-6 text-4xl">
        <b>Hey, hayley's blogs are here!</b> Discover my creative designs
        please!
      </h1>
      <div className="post grid grid-cols-3 gap-4">
        <div className="imgContainer ">
          <img
            src="/Island.jpg"
            alt="feature image"
            className="rounded-lg w-120 h-120"
          ></img>
        </div>

        <div className="txtContainer col-span-2  ">
          <h1 className="postTitle p-6  ">
            {" "}
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </h1>
          <p className="postDesc ">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At
            provident repellat, et veritatis asperiores quae unde dolore ab
            officia int sapiente sequi! Ipsum, iusto. Quisquam praesentium
            voluptates asperiores a d eum! Unde ipsa praesentium nam laborum
            assumenda itaque, atque vero nulla in cidunt cumque omnis.
            Accusantium amet ea voluptatem! Quia ducimus ut magni doloribus
            corporis. Delectus dolore eveniet tenetur vero illum modi ab, vel it
            porro blanditiis minima, quia, provident ipsum! Amet nihil impedit
            quaera t ipsum delectus praesentium ad iure. Eveniet impedit at
            veniam quasi dignis simos explicabo quaerat ipsam tempore nesciunt
            repellendus, temporibus quis q uae fugiat necessitatibus quia enim
            id odit repellat eius. Aperiam sunt atque totam minus esse, optio
            odio nobis, laborum dolores nisi facilis. Hic velit dolorum autem
            distinctio pariatur ipsam.
          </p>
          <div className="p-4">
            <Button>Read More</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
