import React from "react";

import Cards from "./Card";
import Pagination from "./Pagination";

type Props = {};

const getData = async () => {
  const res = await fetch("http:localhost:3000/api/posts", {
    cache: "no-store"
  });

  if (!res.ok) {
    throw new Error("Failed fetch categories");
  }

  return res.json();
};

const CardList = async (props: Props) => {
  const data = await getData();
  return (
    <div className="container ">
      <h1 className="title py-4 text-2xl font-semibold font-mono">
        Recent Posts
      </h1>
      <div className="posts ">
        <Cards></Cards>
        <Cards></Cards>
      </div>
      <Pagination></Pagination>
    </div>
  );
};

export default CardList;
