import StarChild from "../FilmsView/StarChild";

interface FilmCardCountProps {
  count: number;
}

export function StarsChild(props: FilmCardCountProps) {
  const { count } = props;

  if (!Number.isInteger(count) || count < 1 || count > 5) return null;

  return (
    <ul className="card-body-stars">
      {Array.from({ length: count }).map((_, index) => (
        <StarChild key={index} />
      ))}
    </ul>
  );
}

export default StarsChild;
