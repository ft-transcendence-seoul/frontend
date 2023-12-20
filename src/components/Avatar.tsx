import { apiUrl } from "@/api/network";
import Image from "next/image";
interface Props {
  type: string | null;
}

export default function Avatar({ type }: Props) {
  console.log(type);
  return (
    <div className={`min-w-[80px] w-[80px] h-[80px]`}>
      <Image
        src={type ? apiUrl + "/" + type : "/avatar/default.png"}
        alt="avatar"
        width={80}
        height={80}
        className="rounded-full"
      />
    </div>
  );
}
