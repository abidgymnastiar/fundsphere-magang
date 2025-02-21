function ContentMenus() {
  return (
    <>
      <div className="flex flex-row flex-wrap gap-12 md:gap-32">
        <div className="flex flex-col gap-3">
          <p className="font-sans font-medium text-base text-white">Platform</p>
          <div className="flex flex-col gap-2">
            <a
              href="#"
              className="font-sans font-medium text-sm text-Neutral-400"
            >
              Why Fundsphere?
            </a>
            <a
              href="#"
              className="font-sans font-medium text-sm text-Neutral-400"
            >
              Pricing
            </a>
            <a
              href="#"
              className="font-sans font-medium text-sm text-Neutral-400"
            >
              FAQ
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <p className="font-sans font-medium text-base text-white">Features</p>
          <div className="flex flex-col gap-2">
            <a
              href="#"
              className="font-sans font-medium text-sm text-Neutral-400"
            >
              Payments
            </a>
            <a
              href="#"
              className="font-sans font-medium text-sm text-Neutral-400"
            >
              API
            </a>
            <a
              href="#"
              className="font-sans font-medium text-sm text-Neutral-400"
            >
              Ecommerce
            </a>
            <a
              href="#"
              className="font-sans font-medium text-sm text-Neutral-400"
            >
              Business
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <p className="font-sans font-medium text-base text-white">Company</p>
          <div className="flex flex-col gap-2">
            <a
              href="#"
              className="font-sans font-medium text-sm text-Neutral-400"
            >
              About Us
            </a>
            <a
              href="#"
              className="font-sans font-medium text-sm text-Neutral-400"
            >
              Career
            </a>
            <a
              href="#"
              className="font-sans font-medium text-sm text-Neutral-400"
            >
              Blog
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default ContentMenus;
