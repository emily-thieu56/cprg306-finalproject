"use client";

import { useEffect, useState } from "react";
import DisneyCharacter from "./disney-character";

export default function SingleCharacter() {
  const [singleCharacter, setSingleCharacter] = useState(null);

  async function getSingleCharacter() {
    try {
      const response = await fetch("https://api.disneyapi.dev/character");
      //console.dir(response);
      if (!response.ok) console.log(response.statusText);
      const data = await response.json();
      //console.dir(data);
      setSingleCharacter(data);
    } catch (error) {
      console.log(`Error: ${error.message}`);
    }
  }
  useEffect(() => {
    getSingleCharacter();
  }, []);

  return (
    <section>
      {singleCharacter && <DisneyCharacter characterObj={singleCharacter} />}
    </section>
  );
}
