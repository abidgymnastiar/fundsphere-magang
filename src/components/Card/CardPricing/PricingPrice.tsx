interface PricingPriceProps {
  isAnnual: boolean;
  price: number;
}

function PricingPrice({ isAnnual, price }: PricingPriceProps) {
  const finalPrice = isAnnual ? price * 12 : price;
  return (
    <>
      <div className="flex flex-col gap-6">
        <div className="flex flex-row gap-2 items-end">
          <h1 className="font-sans font-bold text-6xl text-Primary-600">
            ${finalPrice}
          </h1>
          <p className="font-sans font-normal text-sm text-Neutral-300">
            / month
          </p>
        </div>
      </div>
    </>
  );
}
export default PricingPrice;
