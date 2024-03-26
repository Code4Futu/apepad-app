import { LAUNCHPAD_STATUS } from "@/models/status";

// time in milliseconds
export function timeDiff(current: number, start: number, end: number) {
  let status = LAUNCHPAD_STATUS.END;
  if (current < start) status = LAUNCHPAD_STATUS.UPCOMING;
  if (current < end) status = LAUNCHPAD_STATUS.INPROGRESS;
  const diff =
    status === LAUNCHPAD_STATUS.UPCOMING
      ? start - current
      : status === LAUNCHPAD_STATUS.INPROGRESS
      ? end - current
      : current - end;
  let msec = diff;
  const d = Math.floor(msec / 1000 / 24 / 60 / 60);
  msec -= d * 1000 * 24 * 60 * 60;
  const h = Math.floor(msec / 1000 / 60 / 60);
  msec -= h * 1000 * 60 * 60;
  const m = Math.floor(msec / 1000 / 60);
  msec -= m * 1000 * 60;
  const s = Math.floor(msec / 1000);

  return { d, h, m, s, status };
}
