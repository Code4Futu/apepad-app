import Screen from "../../common/Responsive";

const Logo = () => {
  return (
    <div className="flex flex-shrink-0 items-center">
      <Screen upto={"sm"}>
        <a className="flex items-center" href="/">
          <img alt="" className="h-8 cursor-pointer" src="/logo.svg" />
        </a>
      </Screen>
      <Screen from={"md"}>
        <a className="flex items-center" href="/">
          <img alt="" className="h-10 cursor-pointer" src="/logo.svg" />
        </a>
      </Screen>
    </div>
  );
};
export default Logo;
