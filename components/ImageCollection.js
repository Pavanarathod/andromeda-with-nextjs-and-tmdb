import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const ImageCollection = ({ images }) => {
  const imageUrl = "https://image.tmdb.org/t/p/original";

  return (
    <Carousel autoPlay stopOnHover infiniteLoop>
      {images?.results.map((img) => (
        <div key={img.id} className="lg:h-[80vh]">
          <img
            src={`${imageUrl}${img.backdrop_path}`}
            alt=""
            className="object-contain"
          />
        </div>
      ))}
    </Carousel>
  );
};

export default ImageCollection;
