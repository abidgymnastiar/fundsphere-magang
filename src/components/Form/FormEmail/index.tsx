import ButttonDefault from "../../Button/Default";
import Input from "./Input";

interface FormEmailProps {
  textEmail?: string;
  textButton?: string;
}

function FormEmail({ textEmail = "Your work email", textButton = "Get Started" }: FormEmailProps) {
  return (
    <>
      <div className=" flex flex-row justify-between w-full border-2 rounded-full py-1 pr-1 pl-8 bg-white border-Neutral-200">
        <Input text={textEmail} />
        <ButttonDefault text={textButton} gap="small" />
      </div>
    </>
  );
}
export default FormEmail;
