import React from "react";
import { useMovieContext } from "../contexts/MovieContext";

const Moviecard = () => {
  const { movieList } = useMovieContext();

  return (
    <div className="flex justify-center">
      {movieList.map((movie) => (
        <div
          key={movie.id}
          className="flex flex-row items-center bg-zinc-300 border border-gray-200 rounded-lg shadow-md m-3"
        >
          <img
            className=" w-20 rounded-t-lg "
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {movie.title}
            </h5>
            <p className="text-sm">Making Year: {movie.release_date}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Moviecard;
