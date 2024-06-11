import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import Pagination from "./Pagination";

type Props = {};

const Featured = (props: Props) => {
  return (
    <div className="container  my-0 mx-auto  text-center">
      <h1 className="title p-6 text-4xl">
        <b>Hey, Tina&apos;s blogs are here!</b> Discover my creative development
        please!
      </h1>
      <div className="post grid grid-cols-3 gap-4">
        <div className="imgContainer ">
          <img
            src="/glass.jpeg"
            alt="feature image"
            className="rounded-lg w-120 h-120"
          ></img>
        </div>

        <div className="txtContainer col-span-2  ">
          <h1 className="postTitle p-6  ">
            {" "}
            Code with passion, learn with curiosity, and create with purpose.
          </h1>
          <p className="postDesc ">
            {" "}
            Hello there! I&apos;m Tina, a passionate Full Stack Developer with a
            knack for solving complex problems and a love for crafting
            efficient, scalable web applications. My journey in the tech world
            began with a Bachelor&apos;s degree in Software Engineering from
            University and took flight with a Master&apos;s in Information
            Technology from Central Queensland University, where I graduated
            with distinction. My professional adventures include working on
            diverse projects like a Diabetes Dashboard management system and a
            business trading system for the travel industry. I honed my skills
            in Flutter, Firebase, and Bubble No-code, all while collaborating
            with amazing teams and stakeholders. Recently, I&apos;ve been diving
            deep into Next.js, Prisma ORM, Node.js, and more, developing dynamic
            web platforms and ensuring secure, responsive user experiences.
            Whether it&apos;s building from scratch or enhancing WordPress
            sites, I thrive on delivering high-quality solutions. When I&apos;m
            not coding, you&apos;ll find me exploring new tech trends,
            optimizing workflows, and constantly learning. Join me on this
            exciting journey as I share insights, tips, and tales from the world
            of web development. Let&apos;s build something amazing together!
          </p>
          <div className="p-4">{/* <Button>Read More</Button> */}</div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
