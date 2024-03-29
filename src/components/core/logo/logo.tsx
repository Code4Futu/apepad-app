import Image from "next/image";
import Screen from "../../common/Responsive";
import Link from "next/link";

const Logo = () => {
  return (
    <div className="flex flex-shrink-0 items-center">
      <Screen upto={"sm"}>
        <Link className="relative h-8 w-8 flex items-center " href="/">
          <Image alt="" className="cursor-pointer" src="/logo.svg" fill />
        </Link>
      </Screen>
      <Screen from={"md"}>
        <Link className="flex gap-2 items-center" href={"/"}>
          <div className="relative h-10 w-10 flex items-center">
            <Image alt="" className="cursor-pointer" src="/logo.svg" fill />
          </div>
          <span
            style={{ fontFamily: "Lexend Exa, sans-serif" }}
            className="text-xl font-medium text-white"
          >
            ApePad
          </span>
        </Link>
      </Screen>
    </div>
  );
};
export default Logo;
