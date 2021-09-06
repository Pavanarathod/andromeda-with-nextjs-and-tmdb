import PriceInfo from "./Price/PriceInfo";
import PriceInfoTwo from "./Price/PriceInfoTwo";

const Price = () => {
  return (
    <>
      <h1 className="text-center py-3 font-mono text-xl">Our Priceing</h1>
      <section className="group price__container">
        <div className="one">
          <PriceInfo />
        </div>
        <div className="two">
          <PriceInfoTwo />
        </div>
        <div className="one">
          <PriceInfo largeIcon />
        </div>
      </section>
    </>
  );
};

export default Price;
