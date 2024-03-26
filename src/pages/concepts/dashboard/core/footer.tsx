import React, { Fragment } from "react";

function Footer() {
  return (
    <>
      <footer id="footer" className={"footer text-left !mt-16 !py-8"}>
        <div className="container-lg px-2 md:px-4 ">
          <div
            className={
              "flex flex-col md:flex-row items-center justify-between w-full px-4"
            }
          >
            <div
              className={
                "flex flex-col md:flex-row justify-start md:items-center"
              }
            >
              <div className={"flex flex-row justify-start items-center"}>
                <div className="flex items-baseline">
                  <img
                    alt={"LootBot"}
                    className={"h-4 relative -bottom-0.5"}
                    src={`/logo.svg`}
                  />
                  <span className="logo--text text-sm ml-2">
                    <span className="">Loot</span>
                    <span className="text-primary">Bot</span>
                  </span>
                </div>
                <div className="text-base-content text-opacity-70 text-sm ml-2">
                  &copy; Copyright 2023
                </div>
              </div>
              <div className="mt-1 md:mt-0">
                <span className="opacity-70 mx-2 hidden md:inline-block">
                  •
                </span>
                <a
                  href="https://docs.goal3.xyz/legal/terms-and-conditions"
                  target="_blank"
                  rel="noreferrer"
                  className="opacity-70 hover:opacity-100"
                >
                  Terms of Use
                </a>
                <span className="opacity-70 mx-2">•</span>
                <a
                  href="https://docs.goal3.xyz/legal/betting-rules"
                  target="_blank"
                  rel="noreferrer"
                  className="opacity-70 hover:opacity-100"
                >
                  Privacy Policies
                </a>
              </div>
            </div>

            <div
              className={"flex flex-row items-center space-x-4 mt-2 md:mt-0"}
            >
              <a
                href={"https://docs.goal3.xyz/"}
                target={"_blank"}
                rel="noreferrer"
                title="Whitepaper"
                className="text-base-content text-opacity-70 hover:text-primary transition"
              >
                <div className="text-xl icon-gitbook w-[22px]">
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>GitBook</title>
                    <path
                      d="M10.802 17.77a.703.703 0 11-.002 1.406.703.703 0 01.002-1.406m11.024-4.347a.703.703 0 11.001-1.406.703.703 0 01-.001 1.406m0-2.876a2.176 2.176 0 00-2.174 2.174c0 .233.039.465.115.691l-7.181 3.823a2.165 2.165 0 00-1.784-.937c-.829 0-1.584.475-1.95 1.216l-6.451-3.402c-.682-.358-1.192-1.48-1.138-2.502.028-.533.212-.947.493-1.107.178-.1.392-.092.62.027l.042.023c1.71.9 7.304 3.847 7.54 3.956.363.169.565.237 1.185-.057l11.564-6.014c.17-.064.368-.227.368-.474 0-.342-.354-.477-.355-.477-.658-.315-1.669-.788-2.655-1.25-2.108-.987-4.497-2.105-5.546-2.655-.906-.474-1.635-.074-1.765.006l-.252.125C7.78 6.048 1.46 9.178 1.1 9.397.457 9.789.058 10.57.006 11.539c-.08 1.537.703 3.14 1.824 3.727l6.822 3.518a2.175 2.175 0 002.15 1.862 2.177 2.177 0 002.173-2.14l7.514-4.073c.38.298.853.461 1.337.461A2.176 2.176 0 0024 12.72a2.176 2.176 0 00-2.174-2.174"
                      className="path"
                    ></path>
                  </svg>
                </div>
              </a>
              <a
                href={"https://twitter.com/Goal3_xyz"}
                target={"_blank"}
                rel="noreferrer"
                className="text-base-content text-opacity-70 hover:text-primary transition"
              >
                <i className="fa-brands fa-twitter text-xl"></i>
              </a>
              <a
                href={"http://discord.gg/goal3"}
                target={"_blank"}
                rel="noreferrer"
                className="text-base-content text-opacity-70 hover:text-primary transition"
              >
                <i className="fa-brands fa-discord text-xl"></i>
              </a>
              <a
                href={"https://blog.goal3.xyz/"}
                target={"_blank"}
                rel="noreferrer"
                title="Blog"
                className="text-base-content text-opacity-70 hover:text-primary transition"
              >
                <i className="fa-brands fa-medium text-xl"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
