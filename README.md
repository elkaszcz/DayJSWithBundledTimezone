# How to bundle DayJS with timezone
The idea is to import `DayJs` with `utc` and `timezone` plugins and then transpile it to JS to then bundle it all with webpack.

```
app.ts --> app.js --> (bundle it with webpack) --> /dist/DayWithBundledTimezone.js
```
Then copy-past the content of `DayWithBundledTimezone.js` as a Google Script library and use it in a project.

```
Create .gitignore
git init
npm init
npm install typescript --save-dev
npx tsc --init
```
> **_NOTE:_** Visual Studio Code shows errors. Please ignore them and continue.

## To bundle the script
npx tsc src/app.ts
webpack

## Installation in Google Script environment
1. Copy the content of `/dist/Day.js` to a newly created Google Script and deploy it as a library.
2. Then import the code as a libray in a different script and name it `Day`
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
