import React from "react";

function AnimeCard({ animeList }) {
  return (
    <>
      <div>
        {animeList.map((anime, idx) => {
          return (
            <div key={idx} className="key">
              <div className="title">
                <h1>{anime.title}</h1>
              </div>
              <img src={anime.images.jpg.large_image_url} alt={anime.title} />
              <div className="description">
                <p>{anime.synopsis}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default AnimeCard;
