import Button from "./Button/Button";

const Watch = () => {
  return (
    <section className="px-3 py-5 sm:py-10 sm:grid sm:grid-cols-2 sm:gap-4">
      <div className="py-3 sm:flex sm:justify-center">
        <img
          src="/images/Watch.svg"
          alt=""
          className="sm:h-64 sm:text-center"
        />
      </div>

      <div className="space-y-5 pt-4">
        <h1 className="text-green-600 text-center sm:text-left font-sans text-3xl lg:text-5xl">
          Great Entertainment
        </h1>
        <p className="text-lg text-gray-600 text-center sm:text-left">
          With your Andromeda membership, you have access to exclusive Meda
          Originals, blockbuster Bollywood movies, regional movies and more.
        </p>

        <div className="">
          <button className="bg-green-500 text-white py-3 font-bold w-full sm:w-60 focus:outline-none hover:bg-green-400">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Watch;
