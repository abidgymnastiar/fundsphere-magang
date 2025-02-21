import SectionLabel from "../../Bedge/Label";
import HeaderDescription from "./HeaderDescription";
import HeaderTitle from "./HeaderTitle";

// interface SectionHeaderProps {
//   label: string;
//   title: string;
//   description: string;
// }

// const SectionHeader: React.FC<SectionHeaderProps> = ({
//   label,
//   title,
//   description,

// }) => {
//   return (
// <div className="flex flex-col gap-4 max-w-[479px] items-center text-center mx-auto">
//   <SectionLabel label={label} />
//   <div className="flex flex-col gap-2 lg:gap-4">
//     <HeaderTitle title={title} />
//     <HeaderDescription description={description} />
//   </div>
// </div>
//   );
// };

// export default SectionHeader;

interface HeaderPrimaryProps {
  label: string;
  title: string;
  description: string;
  position?: string;
  width?: string;
  show?: string;
}

function HeaderPrimary({
  label,
  title,
  description,
  position = "left",
  width = "max-w-[479px]",
  show = "hidden",
}: HeaderPrimaryProps) {
  return (
    <>
      <div
        className={`flex flex-col gap-4 ${width} ${
          position == "left"
            ? "md:items-center md:text-center md:mx-auto"
            : "items-center text-center mx-auto"
        }`}
      >
        <div className={`${show == "hidden" ? "hidden md:block" : "block"}`}>
          <SectionLabel label={label} />
        </div>
        <div className="flex flex-col gap-2 lg:gap-4">
          <HeaderTitle title={title} />
          <HeaderDescription description={description} />
        </div>
      </div>
    </>
  );
}
export default HeaderPrimary;
