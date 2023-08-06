import * as dayjs from 'dayjs'
import * as utc from 'dayjs/plugin/utc'
import * as timezone from 'dayjs/plugin/timezone'

dayjs.extend(utc)
dayjs.extend(timezone)

// export { dayjs }

const pl = "Europe/Warsaw"
const us = "America/New_York"
const uk = "Europe/London"
dayjs.tz.setDefault(pl)

let timestamp = "2023-08-05 22:01"
const dayjsLocal = dayjs(timestamp);

const dayjsUS = dayjsLocal.tz(us)
const dayjsPL = dayjsLocal.tz(pl)
const dayjsUK = dayjsLocal.tz(uk)

console.log("ISO (utc): " + dayjsLocal.toISOString())
console.log("    Local: " + dayjsLocal.format("YYYY-MM-DD HH:mm"))
console.log("       US: " + dayjsUS.format("YYYY-MM-DD HH:mm"))
console.log("       PL: " + dayjsPL.format("YYYY-MM-DD HH:mm"))
console.log("       UK: " + dayjsUK.format("YYYY-MM-DD HH:mm"))
