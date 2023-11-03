import filmsJson from "./data/filmsData.json";
import { Film } from "./model/filmsModel";
import FilmCardChild from "./FilmCardChild";
import "./films.css";

export function FilmsView() {
  return (
    <div>
      {filmsJson.map((film: Film) => (
        <FilmCardChild key={film.id} film={film} />
      ))}
    </div>
  );
}

export default FilmsView;
