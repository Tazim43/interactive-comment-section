const getTimeString = (preTime) => {
  let cur = Date.now();

  let gap = (cur - preTime) / 1000;
  if (gap < 1) return "Just now";
  let meter = [
    1,
    60,
    60 * 60,
    60 * 60 * 24,
    60 * 60 * 24 * 30,
    60 * 60 * 24 * 30 * 12,
  ];
  let names = ["sec", "min", "hour", "day", "month", "year"];
  let namesMany = ["seconds", "mins", "hours", "days", "months", "years"];
  let cnt = 1,
    id = 0;

  for (let i = 0; i < meter.length; i++) {
    if (i + 1 == meter.length || meter[i + 1] > gap) {
      cnt = parseInt(gap / meter[i]);
      id = i;
      break;
    }
  }

  let finalString = `${cnt} ${cnt > 1 ? namesMany[id] : names[id]} ago`;
  return finalString;
};

export default getTimeString;
