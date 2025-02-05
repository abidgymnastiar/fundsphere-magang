function Header() {
  return (
    <>
      <div className="container  mx-auto">
        <div className="flex flex-row gap-4  items-center bg-slate-500">
          <div className="relative lg:max-w-[644px] w-full bg-red-800">
            <div className="absolute">
              <img src="src/assets/svg/Rectangle-6759.svg" alt="" />
            </div>
            <div className="relative z- flex flex-col items-center gap-8">
              <div className="image1">
                <img
                  src="src/assets/svg/Group-1057.svg"
                  alt="Logo"
                  className=""
                />
              </div>
              <div className="flex flex-row gap-8">
                <div className="">
                  <img
                    src="src/assets/svg/Graphic.svg"
                    alt="Logo"
                    className=""
                  />
                </div>
                <div className="">
                  <img
                    src="src/assets/svg/Mask group.svg"
                    alt="Logo"
                    className=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-yellow-400">09</div>
        </div>
      </div>
    </>
  );
}

export default Header;
