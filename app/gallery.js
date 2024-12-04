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


}