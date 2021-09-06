import moment from "moment";

const MovieCard = ({ image, title, releaseDate }) => {
  const imageUrl = "https://image.tmdb.org/t/p/original";

  return (
    <div className="group p-1 transition ease-in transform sm:hover:scale-105 cursor-pointer">
      <div>
        <img
          src={`${imageUrl}${image}`}
          alt=""
          className=" h-[250px] sm:h-[200px] rounded-lg"
        />
      </div>

      <div className="px-3 py-3 relative">
        <div className="pt-3 group-hover:pt-0">
          <div className="">
            <h1 className="text-sm font-bold truncate">{title}</h1>
          </div>
          <div>
            <p className="text-sm font-bold text-gray-400">
              {moment(releaseDate).format("MMM Do YY")}
            </p>
          </div>
        </div>

        <p className="bg-gray-800 group-hover:hidden rounded-full w-8 px-2 py-1 absolute bottom-14">
          <span className="text-green-400 rounded-full text-sm font-thin">
            85
          </span>
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
