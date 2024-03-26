import React from "react";

function Concept() {
  const linkClass =
    "flex items-baseline w-full px-3 py-2 my-1 hover:bg-primary text-base-content hover:text-white font-medium cursor-pointer group transition hover:shadow-xl hover:scale-[105%] transition-all text-sm rounded-full";
  const iconClass =
    "mr-2 w-8 h-8 text-primary group-hover:text-white flex items-center justify-center text-base transition";

  return (
    <main className={`fadein w-full text-base h-full`}>
      <div className="w-full min-h-screen flex items-center justify-center flex-col z-0 relative">
        <div className="w-full mx-auto max-w-screen-2xl p-4 md:p-6 lg:p-8 2xl:p-[10%]">
          <header className="mb-8 px-5">
            <h1 className="text-2xl mb-0">VD8x&lsquo;s Concepts</h1>
            <div>
              <span className="opacity-70 text-sm">
                UI/UX concepts
              </span>
            </div>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ul className="group/ul">
              <li className="px-5 opacity-70 text-xs uppercase tracking-wide mb-3">
                <strong className="group-hover/ul:border-b-2 border-base-content">
                  Dashboard
                </strong>
              </li>

              <li className="" key="">
                <a
                  className={linkClass}
                  href="./concepts/dashboard"
                  rel="nofollow"
                >
                  <span className={iconClass}>
                    <i className={`fa-duotone fa-home`}></i>
                  </span>
                  Home
                </a>
              </li>

            </ul>

          </div>

        </div>
      </div>
    </main>
  );
}

export default Concept;
