"use client";
import DisneyCharacter from "./disney-character";
import { useEffect, useState } from "react";

export default function ItemSort({ charList, setCharListFunc }) {
  const [sortBy, setSortBy] = useState("name");

  const handleShortFilmSort = () => {
    // setSortBy("shortFilms");
    const sortItems = [...charList].sort( (a, b) => {
        if (a.shortFilms < b.shortFilms) {
          return -1;
        } else {
          return 1;
        }
      });
      setCharListFunc(sortItems);
  };

  const handleVideoGameSort = () => {
    setSortBy("videoGames");
  };

  const handleFilmSort = () => {
    setSortBy("films");
  };

  const handleTvShowSort = () => {
    setSortBy("tvShows");
  };

  const sortItems = [...charList].sort((a, b) => {
    if (sortBy === "shortFilms") {
      if (a.shortFilms < b.shortFilms) {
        return -1;
      }
    } else if (sortBy === "videoGames") {
      if (a.videoGames < b.videoGames) {
        return -1;
      }
    } else if (sortBy === "films") {
      if (a.films < b.films) {
        return -1;
      }
    } else if (sortBy === "tvShows") {
      if (a.tvShows < b.tvShows) {
        return -1;
      }
    }

    // return a.shortFilms.localeCompare(b.shortFilms);

    // } else if (sortBy === "videoGames") {
    //   return a.videoGames.localeCompare(b.videoGames);
    // } else if (sortBy === "films") {
    //   return a.films.localeCompare(b.films);
    // } else if (sortBy === "tvShows") {
    //   return a.tvShows.localeCompare(b.tvShows);
  });


  console.log(sortItems);

  return (
    <section>
      <div>
        <label> Sort by: </label>
        <button
          className="bg-purple-500 p-1 m-2 w-28 active:bg-white"
          onClick={handleShortFilmSort}
        >
          Short Film
        </button>
        <button
          className="bg-purple-500 p-1 m-2 w-28 active:bg-white"
          onClick={handleVideoGameSort}
        >
          Video Game
        </button>
        <button
          className="bg-purple-500 p-1 m-2 w-28 active:bg-white"
          onClick={handleFilmSort}
        >
          Film
        </button>
        <button
          className="bg-purple-500 p-1 m-2 w-28 active:bg-white"
          onClick={handleTvShowSort}
        >
          Tv Show
        </button>
      </div>

      {/* <div>
          <ul>
            {sortItems.map((ch) => (<Item key={items._id} 
             name={item.name}
             films={item.films}
             Shortfilms={item.shortFilms}
             tvShow={item.tvShows}
             videoGame={item.videoGames}
             onSelect={onItemSelect} />))};
          </ul>
        </div> */}
    </section>
  );
}
