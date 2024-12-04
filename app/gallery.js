"use client";

import { useEffect, useState } from "react";
import DisneyCharacter from "./disney-character";

export default function Gallery(){
    const [characterIds, setCharacterIds] = useState([]);
    const [galleryDisplay, setGalleryDisplay] = useState([]);

    async function getListOfCharacterIds() {
        try {
            const response = await fetch(
                "https://api.disneyapi.dev/character"
            );
            //console.dir(response);
            if ( !response.ok ) console.log(response.statusText);
            const data = await response.json();
            //console.log(data);
            let shuffled = [...data._id];
            shuffled = shuffled.sort((a,b) => 0.5 - Math.random());
            shuffled = shuffled.slice(0, 10);
            console.log(shuffled);
        } catch(error) {
            console.log( `Error: ${error.message}`);
        }
   } 

   useEffect(() => {getListOfCharacterIds();}, []);

   async function getCharacterById(characterId) {
    try {
        const response = await fetch(
            `https://api.disneyapi.dev/character${characterId}`
        );
        //console.dir(response);
        if ( !response.ok ) console.log(response.statusText);
        const data = await response.json();
        return data;
    } catch(error) {
        console.log( `Error: ${error.message}`);
    }
} 

useEffect( () => {
    (async () => {
        if ( characterIdsIds != null && characterIds.length > 0){
            for(let i = 0; i < artworkIds.length; i++) {
                let thisCharacter = await getCharacterById( characterIds[i]);
                thisGallery.push(thisCharacter);
            }
            console.dir(thisGallery)
            setGalleryDisplay(thisGallery);
        }
    })();
   }, []);

   return(
    <section>
        {galleryDisplay.map( (art) => <DisneyCharacter characterObj={character} key={character._id}/>)}
    </section>
   )

}