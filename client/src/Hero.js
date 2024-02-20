import React, { useEffect, useState } from "react";
import axios from "axios";
import AnimeCard from "./AnimeCard";
import './Anime.css';

function Hero() {
  const [animeList, setAnimeList] = useState([]);
  const [searchAnime, setSearchAnime] = useState("naruto");

  const baseURL = `https://api.jikan.moe/v4/anime?q=${searchAnime}&limit=5`;

  const getData = () => {
    axios
      .get(baseURL)
      .then((res) => {
        setAnimeList(res.data.data);
      })
      .catch((err) => {
        console.error(`Failed to load API: ${err.message}`);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="container">
        <AnimeCard animeList={animeList} />
      </div>
    </>
  );
}

export default Hero;
