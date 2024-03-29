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

export default function Home() {
  return (
    <div className="container mx-auto  ">
      <Featured></Featured>
      <CategoryList></CategoryList>

      <div className=" flex">
        <div className="flex-initial ">
          {" "}
          <CardList></CardList>
        </div>

        <div className="flex-initial w-96">
          <MenuForPopular></MenuForPopular>
          <SideCategories></SideCategories>
          <PopularMenu></PopularMenu>
        </div>
      </div>
    </div>
  );
}
