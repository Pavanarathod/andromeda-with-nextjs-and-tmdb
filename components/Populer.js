import MovieCard from "./MovieCard";

const Populer = ({ populer }) => {
  console.log(populer);
  return (
    <section className="px-5 py-5">
      <div className="pb-3">
        <h1 className="text-2xl font-sans">What's Populer</h1>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-8 sm:gap-5">
        {populer?.results.slice(0, 8).map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            image={movie.poster_path}
            title={movie.name || movie.original_name || movie.title}
            releaseDate={movie.release_date || movie.first_air_date}
          />
        ))}
      </div>
    </section>
  );
};

export default Populer;
