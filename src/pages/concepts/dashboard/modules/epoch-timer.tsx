function EpochTimer() {
  return (
    <>
      <div className={`w-full`}>
        <div className="text-xs mb-1">
          <span className="font-medium uppercase text-red-400">
            <i className="fa-solid fa-clock mr-2"></i>
            EPOCH 1
          </span>
          <span
            className="ml-2 opacity-70 hover:text-primary hover:opacity-100 tooltip text-sm cursor-pointer"
            data-tip="Lorem ipsum dolor sit amet"
          >
            <i className="fa-solid fa-circle-info"></i>
          </span>
        </div>
        <div className="timerRoot text-base">
          <div className="flex space-x-2 items-baseline">
            <div className="flex items-baseline lowercase">
              <span className="countdown slashed-zero leading-4 font-semibold">
                1
              </span>
              <span className="opacity-70 ml-1">d</span>
            </div>
            <div className="flex items-baseline lowercase">
              <span className="countdown slashed-zero leading-4 font-semibold">
                14
              </span>
              <span className="opacity-70 ml-1">h</span>
            </div>
            <div className="flex items-baseline lowercase">
              <span className="countdown slashed-zero leading-4 font-semibold">
                05
              </span>
              <span className="opacity-70 ml-1">m</span>
            </div>
            <div className="flex items-baseline lowercase">
              <span className="countdown slashed-zero leading-4 font-semibold">
                55
              </span>
              <span className="opacity-70 ml-1">s</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EpochTimer;
