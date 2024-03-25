import React from "react";
import { Button } from "./ui/button";

type Props = {};

const Pagination = (props: Props) => {
  return (
    <div className="container relative flex justify-between">
      <Button className="w-28  bg-red-600">Previous</Button>

      <Button className="w-28 bg-red-600">Next</Button>
    </div>
  );
};

export default Pagination;
