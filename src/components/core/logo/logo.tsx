import Image from "next/image";
import Screen from "../../common/Responsive";

const Logo = () => {
  return (
    <div className="flex flex-shrink-0 items-center">
      <Screen upto={"sm"}>
        <a className="relative h-8 w-8 flex items-center " href="/">
          <Image alt="" className="cursor-pointer" src="/logo.svg" fill />
        </a>
      </Screen>
      <Screen from={"md"}>
        <a className="relative h-10 w-10 flex items-center" href="/">
          <Image alt="" className="cursor-pointer" src="/logo.svg" fill />
        </a>
      </Screen>
    </div>
  );
};
export default Logo;
