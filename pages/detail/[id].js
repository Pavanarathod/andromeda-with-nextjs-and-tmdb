import axios from "axios";
import { useRouter } from "next/router";

const Details = ({ movie }) => {
  const router = useRouter();

  console.log(movie);
  return <div></div>;
};

export default Details;

export const getServerSideProps = async (context) => {
  const data = await axios.get(
    `https://api.themoviedb.org/3/movie/${context.query.id}?api_key=${process.env.TMDB__API__KEY}`
  );

  const movie = data.data;

  return {
    props: {
      movie,
    },
  };
};
