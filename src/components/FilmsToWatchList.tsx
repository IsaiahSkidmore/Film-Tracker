import type React from 'react';
import type Film from '../utils/interfaces/Film.interface';
import FilmCard from './FilmCard';

// TODO: Define watchListFilmProps
interface watchListFilmProps {
  filmsToWatch: Film[];
  removeFromStorage: (e: React.MouseEvent<SVGElement, MouseEvent>, currentlyOnSeenItList: boolean | null | undefined, currentlyOnWatchList: boolean | null | undefined, title: string | null) => void;
}

// TODO: Destructure filmsToWatch from props
const FilmsToWatchList = ({filmsToWatch, removeFromStorage}: watchListFilmProps) => {
  console.log(filmsToWatch);

  return (
    <>
      <ul>
        {filmsToWatch.map((film) => (
          <FilmCard
            currentFilm={film}
            key={film.Title}
            onWatchList={true}
            removeFromStorage={removeFromStorage}
          />
        ))}
      </ul>
    </>
  );
};

export default FilmsToWatchList;
