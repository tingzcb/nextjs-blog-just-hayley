import Comments from "@/components/Comments";
import MenuForPopular from "@/components/Menu";
import PopularMenu from "@/components/PopularMenu";
import SideCategories from "@/components/SideCategories";
import Image from "next/image";
import React from "react";

const getData = async (slug: any) => {
  const res = await fetch(`http:localhost:3000/api/posts/${slug}`, {
    cache: "no-store"
  });

  if (!res.ok) {
    throw new Error("Failed fetch posts");
  }

  return res.json();
};

type Props = {
  params: any;
};

const SinglePage = async ({ params }: Props) => {
  const { slug } = params;
  const data = await getData(slug);
  console.log(data);
  // console.log(data.title);
  return (
    <div className="container">
      <div className="infoContainer grid grid-cols-2 py-8">
        <div className="textContainer ">
          <h1 className="text-5xl">{data?.title}</h1>

          <div className="user flex py-8 ">
            <div className="userImageContainer px-4">
              {data?.user?.image && (
                <img
                  src={data.user.image}
                  alt="user image fill"
                  className="h-[3rem] w-[3rem] rounded-full object-cover object-center"
                ></img>
              )}
            </div>
            <div className="userTextContainer text-sm">
              <span className="">{data.user.name}</span>
              <br />
              <span className="">{data.createdAt.substring(0, 10)}</span>
            </div>
          </div>
        </div>

        {data?.img && (
          <div className="imageContainer  ">
            <img
              src={data?.img}
              alt="fill"
              className="max-w-[500px] object-contain"
            ></img>
          </div>
        )}
      </div>

      <div className="content flex py-8">
        <div className="post  flex-initial w-2/3">
          <div
            className=" description"
            dangerouslySetInnerHTML={{ __html: data?.desc }}
          ></div>

          <Comments postSlug={slug}></Comments>
        </div>
        <div className="sideMenu flex-initial w-96">
          <MenuForPopular></MenuForPopular>
          <SideCategories></SideCategories>
          <PopularMenu></PopularMenu>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
