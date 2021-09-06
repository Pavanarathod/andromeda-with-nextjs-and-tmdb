import { ChevronRightIcon } from "@heroicons/react/solid";
import { CurrencyDollarIcon } from "@heroicons/react/outline";

const PriceInfo = ({ largeIcon }) => {
  return (
    <>
      <div className="flex flex-col justify-center sm:py-5">
        <CurrencyDollarIcon
          className={`text-green-500 h-20 ${
            largeIcon && "text-indigo-500 h-20"
          }`}
        />
        <h1 className="text-center text-gray-800 font-sans text-xl sm:py-3">
          {largeIcon ? "Six Month" : "One Month"}
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
        </div>
        <div className="text-lg font-base space-y-2 text-green-500">
          <p>HD Mobile</p>
          <p>Free Disney+</p>
          <p>Sports</p>
          <p>Hindi Entertainment</p>
          <p>Amazon</p>
        </div>
      </div>

      <div className="py-5 w-full px-7">
        <button className="price__button">Subscribe</button>
      </div>
    </>
  );
};

export default PriceInfo;
