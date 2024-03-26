import Screen from "../commons/Responsive";

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
          <div className="flex flex-col ml-3 mt-1">
            <span className="logo--text text-lg leading-none">
              <span className="">Loot</span>
              <span className="text-primary">Bot</span>
            </span>
            <span className="uppercase text-xs opacity-50">Revenue Share</span>
          </div>
        </a>
      </Screen>
    </div>
  );
};
export default Logo;
