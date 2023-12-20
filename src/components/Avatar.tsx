import { apiUrl } from "@/api/network";
import Image from "next/image";
interface Props {
  type: string | null;
}

export default function Avatar({ type }: Props) {
  console.log(type);
  return (
    <div className={`min-w-[80px] w-[80px] h-[80px]`}>
      {type ? (
        <div>
          <img
            src={apiUrl + "/" + type}
            className="w-[80px] h-[80px] object-cover rounded-full"
            alt="avatar"
          />
        </div>
      ) : (
        <Image
          src={"/avatar/default.png"}
          alt="avatar"
          width={80}
          height={80}
          className="rounded-full"
        />
      )}
    </div>
  );
}
