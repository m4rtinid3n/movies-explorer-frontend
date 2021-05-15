import React from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function Movies() {
  const [showShortMovies, setShowShortMovies] = React.useState(true);

  function onCheckBoxToggle(isCheckBoxChecked) {
    setShowShortMovies(isCheckBoxChecked);
  }
  return (
    <>
      <SearchForm onCheckBoxToggle={onCheckBoxToggle} />
      <FilterCheckbox />
      <MoviesCardList onlyFavourite={false} showShortMovies={showShortMovies} />
    </>
  );
}

export default Movies;
