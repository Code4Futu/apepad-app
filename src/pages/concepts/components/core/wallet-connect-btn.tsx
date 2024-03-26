import React from "react";

function WalletConnectBtn() {
  return (
    <>
      <button
        type="button"
        className="btn btn-md px-3 btn-primary text-xs md:text-sm"
      >
        <div className="w-5 h-5 text-base rounded-full overflow-hidden bg-base-100/10 mr-2 flex items-center justify-center">
          <img
            height="60"
            width="60"
            src="https://i.pravatar.cc/60"
            alt="Avatar"
          />
        </div>
        <span className="mr-2 text-xs md:text-sm">0x0...131</span>
        <i className="fa-solid fa-angle-down"></i>
      </button>
    </>
  );
}

export default WalletConnectBtn;
