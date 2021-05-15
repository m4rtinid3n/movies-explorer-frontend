import React, { useState, useEffect } from "react";
import "./MoviesCardList.css";
import PropTypes from "prop-types";
import MoviesCard from "../MoviesCard/MoviesCard";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";
import movies from "../../utils/moviesDB";

const moviesPerPage = 16; 
const moviesPerAdding = 4; 


function MoviesCardList(props) {
  const { onlyFavourite, showShortMovies } = props;
  MoviesCardList.propTypes = {
    onlyFavourite: PropTypes.bool.isRequired, 
    showShortMovies: PropTypes.bool.isRequired, 
  };
  let arrayForHoldingMovies = [];
  const [moviesToShow, setMoviesToShow] = useState([]);
  const [next, setNext] = useState(6); 
  const [isAdding, setAdding] = useState(false); 
  const [isShowShortMoviesOn, setShowShortMoviesOn] = useState(true);
  const [isShowFavouriteMoviesOnlyOn, setShowFavouriteMoviesOnlyOn] = useState(
    false
  );

  const filterMovies = (movie) => {
    let durationCheck;
    let favouriteCheck;

    isShowShortMoviesOn ? (durationCheck = 0) : (durationCheck = 40);

    isShowFavouriteMoviesOnlyOn ? (favouriteCheck = 0) : (favouriteCheck = -1);

    const pass =
      movie.duration >= durationCheck && movie.isFavourite > favouriteCheck;
    return pass;
  };

  const loopWithSlice = (start, end) => {
    const slicedMovies = movies.slice(start, end);
    arrayForHoldingMovies = [...moviesToShow, ...slicedMovies];
    setMoviesToShow(arrayForHoldingMovies);
  };

  const handleShowMoreMovies = () => {
    loopWithSlice(next, next + moviesPerAdding); 
    setNext(next + moviesPerAdding);
    setAdding(false); 
  };

  const handleShowMoreMoviesWithTimeout = () => {
    setAdding(true); 
    setTimeout(handleShowMoreMovies, 2000);
  };

  useEffect(() => {
    loopWithSlice(0, moviesPerPage);
  }, []);

  useEffect(() => {
    setShowShortMoviesOn(showShortMovies);
    setShowFavouriteMoviesOnlyOn(onlyFavourite);
  }, [props]);

  return (
    <>
      <section className="movies-card-list">
        {moviesToShow &&
          moviesToShow
            .filter(filterMovies)
            .map((movie) => (
              <MoviesCard
                key={movie._id}
                uniqueId={movie._id}
                duration={movie.duration}
                cover={movie.cover}
                title={movie.title}
                isFavourite={movie.isFavourite}
              />
            ))}
      </section>
      {isAdding ? (
        <Preloader />
      ) : (
        <button
          className="movies-card-list__load-more"
          type="button"
          onClick={handleShowMoreMoviesWithTimeout}
        >
          Ещё
        </button>
      )}
      <Footer />
    </>
  );
}

export default MoviesCardList;
