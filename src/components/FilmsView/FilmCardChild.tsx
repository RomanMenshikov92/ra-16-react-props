import StarsChild from "../FilmsView/StarsChild";

interface FilmCardProps {
  film: {
    id: string;
    title: string;
    genre: string;
    img: string;
    price: number;
    currency: string;
    countStar: number;
  };
}

export function FilmCardChild(props: FilmCardProps) {
  const { film } = props;
  return (
    <div className="film" id={film.id}>
      <div className="film-image-container">
        <img className="film-image" src={film.img} alt={film.title} />
        <span className="film-genre">{film.genre}</span>
      </div>

      <div className="film-content">
        <h3>{film.title}</h3>
        <div className="link-wrapper">
          <a className="link-wrapper-favorite" href="/">
            <span className="material-icons">favorite</span>
          </a>
          <a className="link-wrapper-share" href="/">
            <span className="material-icons">share</span>
          </a>
        </div>
        <StarsChild count={film.countStar} />
        <div className="btn-wrapper">
          <button className="btn film-price">
            Купить {film.price}
            {film.currency}
          </button>
          <button className="btn film-details">
            Подробнее<span className="material-icons">arrow_right_alt</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default FilmCardChild;
