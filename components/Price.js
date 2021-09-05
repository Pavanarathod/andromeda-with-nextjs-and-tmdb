import { ChevronRightIcon, SearchIcon } from "@heroicons/react/solid";
import { CurrencyDollarIcon } from "@heroicons/react/outline";

const Price = () => {
  return (
    <section className="group price__container">
      <div className="one">
        <div className="flex flex-col justify-center py-5">
          <CurrencyDollarIcon className="text-green-500 h-20" />
          <h1 className="text-center text-gray-800 font-sans text-xl py-3">
            One Month
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
          <button className="bg-green-400 py-3 rounded-full text-white font-mono w-full group-hover:bg-green-500">
            Subscribe
          </button>
        </div>
      </div>
      <div className="two">two</div>
      <div className="one">three</div>
    </section>
  );
};

export default Price;
