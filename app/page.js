"use client"

import { useEffect, useState } from "react";
import Gallery from "./gallery";
import ItemSort from "./item-sort";
import SingleCharacter from "./single-character";
import DisneyCharacter from "./disney-character";

export default function PageGallery() {
    const [characterList, setCharacterList] = useState([]);

    const updateCharList = (newCharList) => {
        setCharacterList(newCharList);
    }

    async function getListOfCharacterIds() {
        try {
            const response = await fetch(
                "https://api.disneyapi.dev/character"
            );
            //console.dir(response);
            if ( !response.ok ) console.log(response.statusText);
            const data = await response.json();
            console.log(data);
            let shuffled = [...data.data];
            shuffled = shuffled.sort((a,b) => 0.5 - Math.random());
            shuffled = shuffled.slice(0, 10);
            console.log(shuffled);
            setCharacterList(shuffled);
        } catch(error) {
            console.log( `Error: ${error.message}`);
        }
   } 

   useEffect( () => {getListOfCharacterIds();}, [] );

  return(
    <main style={{ backgroundColor: "pink" }}>
      <h1 className="text-2xl text-white font-serif font-semibold text-center">
        Disney Character Collection
      </h1>
      <p className="text-2xl text-white font-serif text-center">
        Welcome! This is a dedicated page for fans of the Disney franchise for
        both old and new.
      </p>
      <p className="text-2xl text-white font-serif text-center">
        Search up iconic characters and side characters from any form of media
        in this dedicated, beloved collection!
      </p>
      {/* <SingleCharacter /> */}
      {/* <ItemSort charList={characterList} setCharListFunc={updateCharList}/> */}
      <Gallery/>
      {/* <section>
        {characterList.map((character) => (
          <DisneyCharacter characterObj={character} key={character._id} />
        ))}
      </section> */}
    </main>
  );

}
