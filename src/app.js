"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dayjs = require("dayjs");
var utc = require("dayjs/plugin/utc");
var timezone = require("dayjs/plugin/timezone");
dayjs.extend(utc);
dayjs.extend(timezone);
// export { dayjs }
var pl = "Europe/Warsaw";
var us = "America/New_York";
var uk = "Europe/London";
dayjs.tz.setDefault(pl);
var timestamp = "2023-08-05 22:01";
var dayjsLocal = dayjs(timestamp);
var dayjsUS = dayjsLocal.tz(us);
var dayjsPL = dayjsLocal.tz(pl);
var dayjsUK = dayjsLocal.tz(uk);
console.log("ISO (utc): " + dayjsLocal.toISOString());
console.log("    Local: " + dayjsLocal.format("YYYY-MM-DD HH:mm"));
console.log("       US: " + dayjsUS.format("YYYY-MM-DD HH:mm"));
console.log("       PL: " + dayjsPL.format("YYYY-MM-DD HH:mm"));
console.log("       UK: " + dayjsUK.format("YYYY-MM-DD HH:mm"));

export { dayjs, utc, timezone }