"use client";
import { Button } from "@/components/ui/button";
import { ImagePlus, MonitorPlay, Upload } from "lucide-react";
import React, { useEffect, useState } from "react";
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.bubble.css";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";

import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL
} from "firebase/storage";
import { app } from "@/utils/firebase";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";

const storage = getStorage(app);
type Props = {};

const WritePage = (props: Props) => {
  const [value, setValue] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [media, setMedia] = useState("");
  const [title, setTitle] = useState("");
  const [catSlug, setCatSlug] = useState("");

  const { status } = useSession();

  const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
  const router = useRouter();

  useEffect(() => {
    const upload = () => {
      if (!file) {
        console.error("File is null or undefined");
        return;
      }
      const name = new Date().getTime() + file.name;
      const storageRef = ref(storage, name);

      const uploadTask = uploadBytesResumable(storageRef, file);

      // Register three observers:
      // 1. 'state_changed' observer, called any time the state changes
      // 2. Error observer, called on failure
      // 3. Completion observer, called on successful completion
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          // Handle unsuccessful uploads
        },
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log("File available at", downloadURL);
            setMedia(downloadURL);
          });
        }
      );
    };
    file && upload();
  }, [file]);

  if (status === "loading") {
    return <div> Loading...</div>;
  }
  if (status === "unauthenticated") {
    router.push("/");
  }

  const slugify = (str: any) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const handleSubmit = async () => {
    const res = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({
        title,
        desc: value,
        img: media,
        slug: slugify(title),
        catSlug: catSlug || "style" //If not selected, choose the general category
      })
    });
    if (res.status === 200) {
      const data = await res.json();
      router.push(`/posts/${data.slug}`);
    }
  };

  return (
    <div className="container mt-8">
      <input
        type="text "
        className="text-7xl"
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <div>
        <Select onValueChange={(e: any) => setCatSlug(e.target.value)}>
          <SelectTrigger className="w-[280px]">
            <SelectValue placeholder="Select a category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="style">style</SelectItem>
            <SelectItem value="fashion">fashion</SelectItem>
            <SelectItem value="food">food</SelectItem>
            <SelectItem value="culture">culture</SelectItem>
            <SelectItem value="travel">travel</SelectItem>
            <SelectItem value="coding">coding</SelectItem>
          </SelectContent>
        </Select>

        {/* <select
          className={"select"}
          onChange={(e) => setCatSlug(e.target.value)}
        >
          <option value="style">style</option>
          <option value="fashion">fashion</option>
          <option value="food">food</option>
          <option value="culture">culture</option>
          <option value="travel">travel</option>
          <option value="coding">coding</option>
        </select> */}
      </div>
      <div className="editor py-4 px-4 flex justify-start gap-4">
        <input
          type="file"
          id="image1"
          onChange={(e: any) => setFile(e.target.files[0])}
          style={{ display: "none" }}
        />
        <label htmlFor="image1">
          <ImagePlus />
        </label>{" "}
        <Upload />
        <MonitorPlay />
      </div>

      <ReactQuill
        className=" "
        value={value}
        theme="bubble"
        onChange={setValue}
        placeholder="Tell your story..."
      ></ReactQuill>

      <div className="py-4">
        <Button onClick={handleSubmit} className="btn">
          Publish
        </Button>
      </div>
    </div>
  );
};

export default WritePage;
