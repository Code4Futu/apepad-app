import { useEffect, useState } from "react";
interface Props {
  epoch: { next_time_run?: number };
}

function EpochTimer({ epoch }: Props) {
  const [countdown, setCountdown] = useState(0);
  const nextTimeRun = epoch?.next_time_run;

  useEffect(() => {
    if (nextTimeRun) {
      const timestampSec = Math.floor(Date.now() / 1000);
      const nextTimeRunSec = Math.floor(nextTimeRun / 1000);
      const countdown = nextTimeRunSec - timestampSec;

      setCountdown(countdown);
    }

    if (countdown > 0 && nextTimeRun) {
      const interval = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [countdown, nextTimeRun]);

  const oneDayInSec = 24 * 60 * 60;
  const oneHourInSec = 3600;
  const oneMinInSec = 60;

  const days = Math.floor(countdown / oneDayInSec);
  const hours = Math.floor((countdown % oneDayInSec) / oneHourInSec);
  const minutes = Math.floor((countdown % oneHourInSec) / oneMinInSec);
  const seconds = countdown % oneMinInSec;

  return (
    <>
      <div className={`w-full flex items-center gap-2`}>
        <div className="text-xs ">
          <span className="font-medium uppercase text-red-400">
            <i className="fa-solid fa-clock mr-2"></i>
            Next reward EPOCH in:
          </span>
          {/* <span
            className="ml-2 opacity-70 hover:text-primary hover:opacity-100 tooltip text-sm cursor-pointer"
            data-tip="Lorem ipsum dolor sit amet"
          >
            <i className="fa-solid fa-circle-info"></i>
          </span> */}
        </div>
        <div className="timerRoot text-base">
          {nextTimeRun ? (
            <div className="flex space-x-2 items-baseline">
              <div className="flex items-baseline lowercase">
                <span className="countdown slashed-zero leading-4 font-semibold">
                  {days}
                </span>
                <span className="opacity-70 ml-1">d</span>
              </div>

              <div className="flex items-baseline lowercase">
                <span className="countdown slashed-zero leading-4 font-semibold">
                  {hours}
                </span>
                <span className="opacity-70 ml-1">h</span>
              </div>

              <div className="flex items-baseline lowercas">
                <span className="countdown slashed-zero leading-4 font-semibold">
                  {minutes}
                </span>
                <span className="opacity-70 ml-1">m</span>
              </div>

              <div className="flex items-baseline lowercas">
                <span className="countdown slashed-zero leading-4 font-semibold">
                  {seconds}
                </span>
                <span className="opacity-70 ml-1">s</span>
              </div>
            </div>
          ) : (
            <span className="opacity-70 text-xs">Wait for the next epoch</span>
          )}
        </div>
      </div>
    </>
  );
}

export default EpochTimer;
