import type React from 'react';
import type Film from '../utils/interfaces/Film.interface';
import { IoEyeOutline } from 'react-icons/io5';
import { ImCross } from 'react-icons/im';
import { CgPlayListAdd } from 'react-icons/cg';

// TODO: Define FilmCardProps
type FilmCardProps = {
 currentFilm: Film;
 addToWatchList?: () => void;
 addToSeenItList?: () => void;
 onWatchList?: boolean | null | undefined;
 onSeenItList?: boolean | null | undefined;
 removeFromStorage?: ((e: React.MouseEvent<SVGElement, MouseEvent>, currentlyOnSeenItList: boolean | null | undefined, currentlyOnWatchList: boolean | null | undefined, title: string | null) => void) | undefined;
};

const FilmCard = ({currentFilm, onWatchList, onSeenItList, addToWatchList, addToSeenItList, removeFromStorage}: FilmCardProps) => {
  return (
    <>
      {currentFilm?.Title ? (
        <section className='filmCard'>
          <figure> <img src={currentFilm.Poster} alt={currentFilm.Title} /></figure>
          <article className='details'>
            <p>Title: {currentFilm.Title}</p>
            <p>Director: {currentFilm.Director}</p>
            <p>Released: {currentFilm.Released}</p>
            <p>Actors: {currentFilm.Actors}</p>
            <p>Genre: {currentFilm.Genre}</p>
          </article>
          <article className='plot'><p>{currentFilm.Plot}</p></article>
          {/* If film is on Watch List or Seen It list film can be removed
              Else film can be added to Watch List or Seen It list */}
          {onWatchList || onSeenItList ? (
            <aside className='icons'>
              <ImCross onClick={(e: React.MouseEvent<SVGElement, MouseEvent>,) => removeFromStorage?.(e, onWatchList, onSeenItList, currentFilm.Title) } style={{ fontSize: '40px', cursor: 'pointer' }} />
            </aside>
          ) : (
            <aside className='icons'>
              <CgPlayListAdd onClick={() => addToWatchList?.()} style={{ fontSize: '50px', cursor: 'pointer' }} />
              <IoEyeOutline onClick={() => addToSeenItList?.()} style={{ fontSize: '50px', cursor: 'pointer' }} />
            </aside>
          )}
        </section>
      ) : (
        <h1 style={{ margin: '16px 0' }}>Please search for a film.</h1>
      )}
    </>
  );
};

export default FilmCard;
