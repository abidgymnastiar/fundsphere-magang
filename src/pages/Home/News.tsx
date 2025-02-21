import IconAmazon from "../../assets/code/amazon";
import IconEbay from "../../assets/code/ebay";
import IconUber from "../../assets/code/uber";
import IconWalmart from "../../assets/code/walmart";

function News() {
  return (
    <div className="bg-Additional-NavyBlue">
      <div className="container  max-w-[1200px] px-5 lg:px-0 py-6 lg:py-14 mx-auto">
        <div className="flex flex-row gap-12 lg:gap-36 justify-center">
          <IconUber />
          <IconAmazon />
          <IconEbay />
          <IconWalmart />
        </div>
      </div>
    </div>
  );
}

export default News;
