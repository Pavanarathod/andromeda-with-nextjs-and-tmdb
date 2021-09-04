import Button from "./Button/Button";

const HeroSeaction = () => {
  return (
    <main className="lg:pt-10 py-5 lg:h-[90vh]">
      <section className="sm:grid sm:grid-cols-2">
        <div className="space-y-5 px-3 lg:px-0">
          <h3 className=" text-7xl lg:text-8xl font-thin">
            World's Best <span className="text-green-400">Movie</span>{" "}
            Collection
          </h3>
          <p className="text-gray-400 font-mono">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos
            dolorem accusantium vitae incidunt obcaecati! Voluptates.
          </p>

          <Button>Subscribe</Button>
        </div>
        <div className="px-3 lg:px-0">
          <div className="image__container">
            <img
              src="/images/img1.jpg"
              alt=""
              className="hero__images image__one"
            />
            <img
              src="/images/img2.jpg"
              alt=""
              className="hero__images image__two"
            />
            <img
              src="/images/img3.jpg"
              alt=""
              className="hero__images image__three"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default HeroSeaction;
