import type React from 'react';
import type Film from '../utils/interfaces/Film.interface';
import FilmCard from './FilmCard';

interface seenFilmProps {
  alreadyWatchedFilms: Film[];
  removeFromStorage: (e: React.MouseEvent<SVGElement, MouseEvent>, currentlyOnSeenItList: boolean | null | undefined, currentlyOnWatchList: boolean | null | undefined, title: string | null) => void;
}

const FilmsAlreadySeen = ({alreadyWatchedFilms, removeFromStorage}: seenFilmProps) => {
  return (
    <ul>
      {alreadyWatchedFilms.map((film) => (
        <FilmCard
          currentFilm={film}
          key={film.Title}
          onSeenItList={true}
          removeFromStorage={removeFromStorage}
        />
      ))}
    </ul>
  );
};

export default FilmsAlreadySeen;
