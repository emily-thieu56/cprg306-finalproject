"use client";
import DisneyCharacter from "./disney-character";
import { useState } from "react";

export default function ItemSort({items, onItemSelect}){
    const [sortBy, setSortBy] = useState("name");

    const handleShortFilmSort = () => {
        setSortBy("shortFilms");
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
      

    const sortItems = [...items].sort((a, b) => {
      
        if (sortBy === "shortFilms") {
          return a.shortFilms.localeCompare(b.shortFilms);
        }
        else if (sortBy === "videoGames") {
            return a.videoGames.localeCompare(b.videoGames);
        }
        else if (sortBy === "films") {
            return a.films.localeCompare(b.films);
        }
        else if (sortBy === "tvShows") {
            return a.tvShows.localeCompare(b.tvShows);
        }
        return 0;
      });
      

    return (
        <section>
          <div>
              <label for = "sort"> Sort by: </label>
              <button className="bg-purple-500 p-1 m-2 w-28 active:bg-white" onClick={handleShortFilmSort}>Short Film</button>
              <button className="bg-purple-500 p-1 m-2 w-28 active:bg-white" onClick={handleVideoGameSort}>Video Game</button>
              <button className="bg-purple-500 p-1 m-2 w-28 active:bg-white" onClick={handleFilmSort}>Film</button>
              <button className="bg-purple-500 p-1 m-2 w-28 active:bg-white" onClick={handleTvShowSort}>Tv Show</button>
        </div>
        
        <div>
          <ul>
            {sortItems().map((item) => (<Item key={items._id} 
             name={item.name}
             films={item.films}
             Shortfilms={item.shortFilms}
             tvShow={item.tvShows}
             videoGame={item.videoGames}
             onSelect={onItemSelect} />))};
          </ul>
        </div>
        </section>
        
      
      );
}