import React from "react";

function AnimeCard({ animeList }) {

    animeList.map((anime, idx) => {
        
    })

  return (
    <>
      {animeList.map((anime, idx) => {
        return (
          <div key={idx}>
            <h1>{anime.title}</h1>
            <img src={anime.images.jpg.large_image_url} alt={anime.title} />
            <p>{anime.synopsis}</p>
          </div>
        );
      })}
    </>
  );
}

export default AnimeCard;
