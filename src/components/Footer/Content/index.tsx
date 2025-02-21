import ContentCopyright from "./ContentCopyright";
import ContentAddress from "./ContentAddress";
import ContentMenus from "./ContentMenus";

function content() {
  return (
    <>
      <div className="">
        <div className="container  max-w-[1200px] mx-auto px-5 lg:px-none">
          <div className="flex flex-col gap-16 lg:gap-0">
            <div className="block lg:hidden">
              <ContentAddress />
            </div>
            <div className="flex flex-col gap-16">
              <div className="flex flex-row justify-between">
                <ContentMenus />
                <div className="hidden lg:block">
                  <ContentAddress />
                </div>
              </div>
              <div className="flex flex-col gap-8">
                <hr className="border-t border-gray-300 my-4" />
                <ContentCopyright />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default content;
