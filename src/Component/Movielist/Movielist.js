import React, { useState } from "react";
import MovieCardNew from "../MovieCard-/MovieCard-";
import Moviecard from "../MovieCard/Moviecard";

const Movielist = ({ inputSearch }) => {
  const [film, setfilm] = useState([
    {
      title: "Film 1",
      description: "This is the first film",
      posterUrle:
        "https://cinehorizons.net/sites/default/files/affiches/839799465-docteur.jpg",
    },
    {
      title: "HEDE",
      description: "film creé en 2001",
      posterUrle:
        "https://www.movienewz.com/img/gallery/entourage-movie/posters/entourage_movie_poster_2.jpg",
    },
  ]);

  const Addfilm = (title, description, posterUrle) => {
    setfilm([...film, { title, description, posterUrle }]);
  };

  const Deletefilm = (indice) => {
    setfilm(film.filter((el, i) => i != indice));
  };

  return (
    <div>
      {/* <Moviecard Addfilm={Addfilm} /> */}

      <div className="affichage">
        {film
          .filter((movie) =>
            movie.title.toLowerCase().includes(inputSearch.toLowerCase())
          )

          .map((el, i) => (
            <MovieCardNew
              el={el}
              i={i}
              key={i}
              Deletefilm={Deletefilm}
              Addfilm={Addfilm}
            />
          ))}
      </div>
    </div>
  );
};

export default Movielist;
