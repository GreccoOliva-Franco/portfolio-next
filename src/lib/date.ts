import _dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import duration from "dayjs/plugin/duration";

_dayjs.extend(utc);
_dayjs.extend(duration);

export const date = _dayjs;
