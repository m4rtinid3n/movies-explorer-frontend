import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import Card from '../Card/Card'
import useInput from '../../utils/Hooks/useInput';
import Preloader from "../Preloader/Preloader";
import SearchMessage from '../SearchMessage/SearchMessage';


function MoviesList({
  cards,
  savedCards,
  pageType,
  filterMovies,
  setFilterMovies,
  onDeleteCard,
  onSaveCard,
  deleteMovie,
  createMovie,
  createSavedMovie
}) {
  const [foundCards, setFoundCards] = React.useState([]);


  const [isLoading, setLoading] = React.useState(false);
  const [isChecked, setChecked] = React.useState(false);
  const [isSearchEmpty, setSearchEmpty] = React.useState(false)
  const movieSearch = useInput('', { minLength: 2, noEmpty: 2 });

  const searchWord = movieSearch.value;

  const [countMovie, setCountMovie] = React.useState(12);
  const [countAdd, setCountAdd] = React.useState(3);
  const [windowWidth, setWindowWidth] = React.useState(undefined);

  React.useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
      if (windowWidth > 770) {
        setCountMovie(12);
        setCountAdd(3);
      } else if (windowWidth > 480 && windowWidth <= 770) {
        setCountMovie(8);
        setCountAdd(2);
      } else {
        setCountMovie(5);
        setCountAdd(1);
      }
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [windowWidth]);

  function handleMoreCards() {
    setCountMovie(countMovie + countAdd);
  }

  React.useEffect(() => {
    console.log('filterMovies',filterMovies);

    filterCards(cards, searchWord, isChecked);
    if (isChecked) {
      fiterShortMovies(foundCards)
    }
  }, [savedCards, isChecked])


  function filterCards(cards, searchWord, isChecked) {
    if (!searchWord && pageType) {
      setFoundCards(filterMovies);
      return
    } else if (!searchWord && !pageType) {
      setFoundCards(savedCards);
      return
    }
    const filteredData = cards.filter((card) => {
      const fits = card.nameRU.toLowerCase().includes(searchWord.toLowerCase());
      return isChecked ? fits && card.duration <= 40 : fits;
    })
    if (filteredData.length === 0) {
      setSearchEmpty(true)
      setLoading(false);
      setFoundCards(filteredData)
      localStorage.setItem("filterMovies", JSON.stringify(filteredData));
      setFilterMovies(filteredData);
    } else {
      setSearchEmpty(false)
      setLoading(false);
      setFoundCards(filteredData)
      localStorage.setItem("filterMovies", JSON.stringify(filteredData));
      setFilterMovies(filteredData)
      console.log(filteredData);
    }
  }

  function fiterShortMovies(foundCards) {
    const shortMoviesData = foundCards.filter((card) => {
      return card.duration <= 40
    })
    setFoundCards(shortMoviesData)
  }

  function handleSearchSubmit(cards, searchWord, isChecked) {
    setLoading(true);
    setFoundCards([]);
    setTimeout(() => {
      filterCards(cards, searchWord, isChecked);
    }, 1000);
  }

  function handleToggle() {
    setChecked(!isChecked);
  }

  function handleDeleteCard(card) {
    if (pageType) {
      const savedMovie = savedCards.find((c) => c.movieId === card.id);
      deleteMovie(savedMovie)

    } else {
      deleteMovie(card)
    }
  }

  function handleSaveCard(movie) {
    if (pageType) {
      createMovie(movie)
    } else {
      createSavedMovie(movie)
    }
  }

  let element;
  if (isLoading) {
    element = <Preloader />
  } else if (isSearchEmpty) {
    element = <SearchMessage />
  }

  return (

    <React.Fragment>

      <SearchForm
        onSearchSubmit={handleSearchSubmit}
        cards={cards}
        movieSearch={movieSearch}
        searchWord={searchWord}
        isChecked={isChecked}
        onToggle={handleToggle}
      />
      <section className="page__section moviesList">
        <ul className="moviesList__items">
          {element}
          {
            pageType ?

              foundCards.slice(0, countMovie).map((card) =>
                <Card
                  card={card}
                  key={card.id || card._id}
                  pageType={pageType}
                  liked={savedCards.find((c) => c.movieId === card.id)}
                  onDeleteCard={handleDeleteCard}
                  onSaveCard={handleSaveCard}
                  savedCards={savedCards}
                />
              )
              :
              foundCards.map((card) =>
                <Card
                  card={card}
                  key={card.id || card._id}
                  pageType={pageType}
                  onDeleteCard={handleDeleteCard}
                  onSaveCard={handleSaveCard}
                  savedCards={savedCards}
                />
              )
          }
        </ul>
      </section>

      <button
        className={`${pageType && foundCards.length > countMovie ? 'moviesList__button' : 'moviesList__button_hidden'}`}
        type="button"
        onClick={handleMoreCards}>
        Ещё
      </button >
    </React.Fragment >

  )
}

export default MoviesList;