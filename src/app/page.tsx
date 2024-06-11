import { NextPage } from "next";
import CardList from "@/components/CardList";
import CategoryList from "@/components/CategoryList";
import Featured from "@/components/Featured";
import MenuForPopular from "@/components/Menu";
import PopularMenu from "@/components/PopularMenu";
import ScrollingText from "@/components/ScrollingText";
import SideCategories from "@/components/SideCategories";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";

export default function Home({
  searchParams
}: {
  searchParams: { page: number | undefined; cat: any };
}) {
  const page = searchParams.page || 1;
  const cat = searchParams.cat;
  // console.log("page is ", page);
  console.log("cat is ", cat);
  return (
    <div className="container mx-auto  ">
      <Featured></Featured>
      <CategoryList></CategoryList>

      <div className=" flex">
        <div className="flex-initial ">
          {" "}
          <CardList page={page} cat={cat}></CardList>
        </div>

        {/* <div className="flex-initial w-96">
          <MenuForPopular></MenuForPopular>
          <SideCategories></SideCategories>
          <PopularMenu></PopularMenu>
        </div> */}
      </div>
    </div>
  );
}
