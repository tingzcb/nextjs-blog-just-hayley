import CardList from "@/components/CardList";
import { constants } from "buffer";
import { Menu } from "lucide-react";

import React from "react";

const Blogpage = ({
  searchParams
}: {
  searchParams: { page: number; cat: any };
}) => {
  const page = searchParams.page || 1;
  const { cat } = searchParams;
  return (
    <div className="content">
      <Menu></Menu>
      <div className=" ">
        <h1 className=" text-center text-4xl bg-orange-400 text-white p-3">
          {cat} Blog
        </h1>
      </div>

      <CardList page={page} cat={cat}></CardList>
    </div>
  );
};

export default Blogpage;
