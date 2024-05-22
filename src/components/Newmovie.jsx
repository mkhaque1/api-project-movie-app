import React from "react";
import Moviecard from "./Moviecard";
import Marquee from "react-fast-marquee";

const Newmovie = (movie) => {
  return (
    <div className=" lg:mx-20">
      <h1 className=" text-2xl font-semibold uppercase text-center my-5">
        New Movies 2024
      </h1>
      <Marquee gradient>
        <Moviecard />
      </Marquee>
    </div>
  );
};

export default Newmovie;
