import React from "react";

import Cards from "./Card";
import Pagination from "./Pagination";

type Props = {};

const CardList = (props: Props) => {
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
