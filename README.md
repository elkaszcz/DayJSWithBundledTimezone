# How to bundle DayJS with timezone
Create .gitignore
git init
npm init
npm install typescript --save-dev
npx tsc --init

> **_NOTE:_** Visual Studio Code shows errors. Please ignore them and continue.

## To bundle the script
npx tsc src/app.ts
webpack

## Installation in Google Script environment
1. Copy the content of `/dist/Day.js` to a newly created Google Script and deploy it as a library.
2. Then import the code as a libray in a different script
3. Sample usage:
```javascript
const { dayjs } = Day.Dayjs

const main = () => {
  let pl = "Europe/Warsaw";
  let us = "America/New_York";
  let uk = "Europe/London";

  let timestamp = "2023-08-05 22:01";
  let dayjsLocal = dayjs(timestamp);
  let dayjsUS = dayjsLocal.tz(us);
  let dayjsPL = dayjsLocal.tz(pl);
  let dayjsUK = dayjsLocal.tz(uk);
  Logger.log("ISO (utc): " + dayjsLocal.toISOString());
  Logger.log("    Local: " + dayjsLocal.format("YYYY-MM-DD HH:mm"));
  Logger.log("       US: " + dayjsUS.format("YYYY-MM-DD HH:mm"));
  Logger.log("       PL: " + dayjsPL.format("YYYY-MM-DD HH:mm"));
  Logger.log("       UK: " + dayjsUK.format("YYYY-MM-DD HH:mm"));
}
```
