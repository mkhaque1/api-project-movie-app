import React from "react";
import { useMovieContext } from "../contexts/MovieContext";

const Navbar = () => {
  const { filterMovies } = useMovieContext();

  return (
    <div className=" w-full fixed z-10 bottom-0 bg-transparent backdrop-blur-lg h-20 lg:flex lg:justify-between lg:px-20 sm:px-10">
      <div className=" flex justify-center items-center">
        <h1 className="inline-block bg-gradient-to-r from-sky-600 via-pink-500 to-indigo-400 lg:text-zinc-200 lg:px-4 lg:py-2 sm:px-2 sm:py-2 rounded-xl lg:inline sm:hidden text-transparent lg:text-xl sm:text-sm font-bold uppercase">
          Movie API Project
        </h1>
      </div>
      <div className=" flex justify-center gap-5 sm:mt-5 lg:mt-0 items-center">
        <div className="nav-links">
          <button
            className="nav item text-white font-light px-4 py-2 uppercase text-sm bg-stone-800 hover:bg-sky-800 transition-all rounded-full border-none hover:rounded-full hover:px-4 hover:py-2"
            onClick={() => filterMovies("old")}
          >
            Old Movies
          </button>
        </div>
        <div className="nav-links">
          <button
            className="nav item text-white font-light px-4 py-2 sm:px-4 sm:py-2 uppercase text-sm bg-stone-800 hover:bg-sky-800 transition-all rounded-full border-none hover:rounded-full hover:px-4 hover:py-2"
            onClick={() => filterMovies("new")}
          >
            New Movies
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
