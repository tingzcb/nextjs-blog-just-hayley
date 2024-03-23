import React from "react";

type Props = {};

const Cards = (props: Props) => {
  return (
    <div className="grid grid-cols-2 max-w-3xl p-4 bg-slate-400 my-2 rounded-lg">
      <div className="imageContainer">
        <img
          src="/tiktok.png"
          alt="recent post image"
          className="rounded-lg w-80 h-80"
        ></img>
      </div>

      <div className="textContainer">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, inventore
          voluptatibus quis sint delectus dignissimos, amet dolorum vero culpa,
          laudantium ducimus rem fugiat! Earum quidem dolor velit! Quis mollitia
          quisquam, quia vero accusamus dignissimos corrupti ab amet culpa
          molestias expedita impedit doloribus, veniam architecto velit hic
          ipsa? Maiores ipsum repellat accusantium dignissimos facilis
          consequuntur, non perspiciatis rem pariatur quisquam cumque quibusdam
          debitis beatae, itaque sapiente quidem. Magni cupiditate maxime,
          officiis veniam ad aspernatur recusandae voluptates ratione tempora
          debitis commodi iure nobis numquam reprehenderit odio laborum
          accusantium temporibus velit. Magni ex repellat dolore vitae minima
          nulla velit atque aliquam facere enim.
        </p>
      </div>
    </div>
  );
};

export default Cards;
