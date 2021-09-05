import MovieCard from "./MovieCard";

const Free = ({ free }) => {
  return (
    <section className="px-5 py-5">
      <div className="pb-3">
        <h1 className="text-2xl font-sans ">Free To Watch.</h1>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-8 sm:gap-5">
        {free?.results.slice(0, 8).map((movie) => (
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

export default Free;
