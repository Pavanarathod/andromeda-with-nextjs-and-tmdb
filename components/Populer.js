import MovieCard from "./MovieCard";

const Populer = ({ populer }) => {
  console.log(populer);
  return (
    <section className="">
      <div>
        <h1 className="text-2xl font-mono text-green-400">What's Populer</h1>
      </div>

      <div className="">
        {populer?.results.map((movie) => (
          <MovieCard
            key={movie.id}
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
