import Link from "next/link";
import React from "react";

type Props = {};

const getData = async () => {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/categories`, {
    cache: "no-store"
  });

  if (!res.ok) {
    throw new Error("Failed fetch categories");
  }

  return res.json();
};

const CategoryList = async (props: Props) => {
  const data = await getData();
  // console.log("categories test " + data);
  return (
    <div className="container">
      <h1 className=" py-4 text-2xl font-semibold font-mono ">
        Popular Categories
      </h1>
      <div className="categories grid md:grid-cols-3 lg:grid-cols-6 gap-4">
        {data?.map((item: any) => (
          <div
            key={item._id}
            className="category bg-slate-500 w-fit py-2 px-4 rounded-md hover:-translate-y-[2px]"
          >
            <Link
              href={`/blog?cat=${item.title}`}
              className="flex flex-row gap-2 text-lg font-semibold font-mono "
              key={item._id}
            >
              {item.img && (
                <img
                  className="h-[2.2rem] w-[2.2rem] rounded-full object-cover object-center"
                  src={item.img}
                  alt="category image"
                />
              )}
              {item.title}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
