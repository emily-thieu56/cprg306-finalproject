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
    <main className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-300 ...">
      <div className="flex justify-center items-center">
        <img src = "https://th.bing.com/th/id/R.971a4ec2f3075f01729885bff628220a?rik=tnxxZGKKkAr33A&riu=http%3a%2f%2fpngimg.com%2fuploads%2fwalt_disney%2fwalt_disney_PNG38.png&ehk=4VUKREc4lqvekzMWf9oneeCr%2bGgncY5yTVqmVOCUHNo%3d&risl=&pid=ImgRaw&r=0"/>
      </div>
      
      <h1 className="text-4xl text-white font-serif font-semibold text-center">
        Disney Character Collection
      </h1>
      <div className="flex justify-center items-center">
        <p className="text-2xl text-white font-serif text-center border-2 border-white">
          Welcome! This is a dedicated page for fans of the Disney franchise for
          both old and new. Search up iconic characters and side characters from any form of media
          in this dedicated, beloved collection!
        </p>
      </div>
      
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
