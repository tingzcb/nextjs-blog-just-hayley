"use client";
import React from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

type Props = { page: number; hasNext: any; hasPre: any };

const Pagination = ({ page, hasNext, hasPre }: Props) => {
  const router = useRouter();

  return (
    <div className="container relative flex justify-between">
      <Button
        className="w-28  bg-red-600"
        onClick={() => {
          router.push(`?page=${page - 1}`);
        }}
        disabled={!hasPre}
      >
        Previous
      </Button>

      <Button
        className="w-28 bg-red-600"
        onClick={() => router.push(`?page=${++page}`)}
        disabled={!hasNext}
      >
        Next
      </Button>
    </div>
  );
};

export default Pagination;
