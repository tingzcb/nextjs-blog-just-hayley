"use client";
import { Button } from "@/components/ui/button";
import { ImagePlus, MonitorPlay, Upload } from "lucide-react";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";

type Props = {};

const WritePage = (props: Props) => {
  const [value, setValue] = useState("");
  function handler() {
    console.log(value);
  }

  return (
    <div className="container mt-8">
      <input type="text " className="text-7xl" placeholder="Title" />

      <div className="editor py-4 px-4 flex justify-start gap-4">
        <button className=" p-2 rounded-full hover:-translate-y-[2px] hover:bg-gray-400">
          <ImagePlus />
        </button>

        <button className="p-2 rounded-full hover:-translate-y-[2px] hover:bg-gray-400">
          <Upload />
        </button>

        <button className="p-2 rounded-full hover:-translate-y-[2px] hover:bg-gray-400">
          <MonitorPlay />
        </button>
      </div>

      <ReactQuill
        className=" "
        value={value}
        theme="bubble"
        onChange={(value) => setValue(value)}
        placeholder="Tell your story..."
      ></ReactQuill>

      <div className="py-4">
        <Button onClick={handler} className="btn">
          Publish
        </Button>
      </div>
    </div>
  );
};

export default WritePage;
