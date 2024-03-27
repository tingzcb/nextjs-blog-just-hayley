import Comments from "@/components/Comments";
import MenuForPopular from "@/components/Menu";
import PopularMenu from "@/components/PopularMenu";
import SideCategories from "@/components/SideCategories";
import Image from "next/image";
import React from "react";

type Props = {};

const SinglePage = (props: Props) => {
  return (
    <div className="container">
      <div className="infoContainer grid grid-cols-2 py-8">
        <div className="textContainer ">
          <h1 className="text-5xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
            impedit!
          </h1>

          <div className="user flex py-8 ">
            <div className="userImageContainer px-4">
              <img
                src="/Island.jpg"
                alt="fill"
                className="h-[3rem] w-[3rem] rounded-full object-cover object-center"
              ></img>
            </div>
            <div className="userTextContainer text-sm">
              <span className="">John Doe</span>
              <br />
              <span className="">01.01.2024</span>
            </div>
          </div>
        </div>

        <div className="imageContainer  ">
          <img
            src="/Island.jpg"
            alt="fill"
            className="max-w-[500px] object-contain"
          ></img>
        </div>
      </div>

      <div className="content flex py-8">
        <div className="post  flex-initial w-2/3">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            sed ratione porro repellat laudantium assumenda eaque laboriosam
            doloremque tempora. Saepe doloremque accusamus pariatur mollitia
            placeat, ut quisquam deserunt nihil, velit reiciendis obcaecati iure
            sequi amet veniam asperiores explicabo impedit sit aliquid
            architecto veritatis optio! Repellat reprehenderit eligendi vitae
            optio obcaecati, vero blanditiis adipisci necessitatibus facere
            ullam quia dolorem officia fuga enim a cupiditate sapiente quae
            provident doloremque. Architecto quia saepe, fugiat fugit doloribus
            placeat natus inventore, reprehenderit dolore non nisi? Aliquam nam
            at quidem voluptate architecto beatae ullam adipisci optio autem
            delectus nisi placeat suscipit tenetur, necessitatibus vitae
            officiis. Aperiam. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Assumenda voluptate itaque ad totam veritatis
            doloribus dolores sunt, consectetur, soluta neque nihil nobis enim
            dicta, dolor magni excepturi alias fugit culpa sit! Quaerat minima
            nulla quibusdam dicta cumque labore eveniet error a voluptate eaque
            eius, ab accusantium ut illo distinctio nihil quis iure amet. Eaque
            soluta sapiente necessitatibus deleniti, optio facilis illum,
            corporis amet quibusdam asperiores ut labore perspiciatis
            cupiditate, eligendi ducimus! Excepturi illo, iusto cum quaerat
            aperiam illum neque molestiae eaque doloremque corrupti suscipit
            error necessitatibus inventore velit, unde, fugiat eos commodi!
            Deserunt placeat iste officiis error aperiam eum aliquam!
          </p>

          <Comments></Comments>
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
