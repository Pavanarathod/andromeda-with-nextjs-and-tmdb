const MovieCard = ({ image, title, releaseDate }) => {
  const imageUrl = "https://image.tmdb.org/t/p/original";

  return (
    <div className="">
      <div>
        <img
          src={`${imageUrl}${image}`}
          alt="undefiend"
          className="h-60 object-contain"
        />
      </div>

      <div>
        <h1 className="truncate text-sm">{title}</h1>
      </div>
      <div>{releaseDate}</div>
    </div>
  );
};

export default MovieCard;
