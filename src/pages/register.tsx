import Button from "@/layouts/Button";
import FlexBox from "@/layouts/FlexBox";
import Side from "@/layouts/Side";
import TextBox from "@/layouts/TextBox";

export default function Register() {
  return (
    <Side>
      <FlexBox direction="col" className="items-start gap-9">
        <FlexBox direction="col" className="items-start gap-3 ">
          <div className="font-bold text-5xl tracking-wider leading-[3.5rem]">
            Register
          </div>
        </FlexBox>
        <TextBox placeholder="Nickname" size="w-[25rem] h-[3rem]" className="font-bold text-2xl tracking-wider bg-[#EAEAEA]"/>
        <Button
          href="https://www.naver.com"
          className="w-[25rem] h-[3rem] bg-black"
          textClassName="font-bold text-2xl tracking-wider"
        >
          Complete
        </Button>
      </FlexBox>
    </Side>
  );
}
