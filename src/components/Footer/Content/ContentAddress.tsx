import logo from "../../../assets/svg/SvgFooter/Logo.svg";

function ContentAddress() {
  return (
    <>
      <div className="flex flex-col gap-4 max-w-[229px]">
        <img src={logo} alt="" />
        <p className="font-sans font-normal text-lg text-Neutral-400">
          Sudirman St., 12B, Malang +1 215-2231-5523 hello@fundsphere.id
        </p>
      </div>
    </>
  );
}
export default ContentAddress;
