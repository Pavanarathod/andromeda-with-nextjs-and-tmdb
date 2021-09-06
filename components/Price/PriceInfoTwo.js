import { ChevronRightIcon, CurrencyDollarIcon } from "@heroicons/react/solid";

const PriceInfoTwo = () => {
  return (
    <>
      <div className="flex flex-col justify-center sm:py-5">
        <CurrencyDollarIcon className=" text-yellow-300 h-20" />
        <h1 className="text-center text-gray-800 font-sans text-xl py-3">
          One Year
        </h1>
      </div>

      <div className="price__offer">
        <div>
          <ChevronRightIcon className="h-8 text-green-400" />
          <ChevronRightIcon className="h-8 text-green-400" />
          <ChevronRightIcon className="h-8 text-green-400" />
          <ChevronRightIcon className="h-8 text-green-400" />
          <ChevronRightIcon className="h-8 text-green-400" />
          <ChevronRightIcon className="h-8 text-green-400" />
          <ChevronRightIcon className="h-8 text-green-400" />
          <ChevronRightIcon className="h-8 text-green-400" />
        </div>
        <div className="text-lg font-base space-y-1 text-green-500">
          <p>HD Mobile</p>
          <p>HD Tv</p>
          <p>Free Disney+</p>
          <p>Netflix</p>
          <p>Sports</p>
          <p>Hindi Entertainment</p>
          <p>Amazon</p>
          <p>Hulu Originals</p>
        </div>
      </div>

      <div className="py-5 w-full px-7">
        <button className="price__button">Subscribe</button>
      </div>
    </>
  );
};

export default PriceInfoTwo;
