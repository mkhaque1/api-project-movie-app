import React, { useState } from "react";
import { useMovieContext } from "../contexts/MovieContext";

const Movielist = () => {
  const { movieList } = useMovieContext();
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState({}); // State to store popup content

  // Function to handle click on movie div
  const handlePopup = (movie) => {
    setPopupContent(movie); // Set popup content to clicked movie
    setShowPopup(true); // Show popup
  };

  return (
    <div className="relative">
      {/* Background container that will get blurred */}
      <div className={`${showPopup ? "blur-sm" : ""}`}>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mx-20 my-5">
          {/* Map over movieList to render movie divs */}
          {movieList.slice(7, 13).map((movie) => (
            <div
              className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
              key={movie.id}
              onClick={() => handlePopup(movie)} // Handle click on movie div
            >
              <img
                className="rounded-t-lg w-full h-full hover:scale-150 transition-all cursor-pointer"
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt=""
              />
            </div>
          ))}
        </div>
      </div>

      {/* Popup */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black opacity-70"></div>
          <div className=" rounded-lg backdrop-blur-md relative z-10">
            <div className="bg-zinc-400 lg:w-[50vw] min-[320px]:w-[50vw] p-8 rounded-lg lg:flex lg:flex-nowrap lg:justify-center lg:items-center min-[320px]:flex-wrap gap-5">
              <div className="w-1/2">
                <img
                  className="min-[320px]:w-full mb-4"
                  src={`https://image.tmdb.org/t/p/w500/${popupContent.poster_path}`}
                  alt=""
                />
              </div>
              <div className="flex w-1/2 flex-col min-[320px]:w-full">
                <h2 className="text-2xl text-zinc-200 font-bold mb-4">
                  {popupContent.title}
                </h2>
                <p className="text-zinc-200 text-sm">
                  {popupContent.overview}...
                  <br />
                  <span className=" font-semibold  text-zinc-700 capitalize">
                    Release Date:
                  </span>
                  <br />
                  {popupContent.release_date}
                </p>
                <button
                  className="mt-4 px-4 py-2 bg-sky-600 text-white rounded hover:bg-sky-700"
                  onClick={() => setShowPopup(false)} // Close popup on button click
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Movielist;
