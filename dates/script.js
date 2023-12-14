let newDates = new Date();
let time = newDates.getTime();

time = (time / (1000 * 3600 * 24 * 365)).toFixed(2);
console.log(time, "Years");
console.log(newDates.toDateString());
console.log(newDates.toTimeString());
console.log(newDates.toLocaleString());

let before = new Date("December 13, 2023 23:15:30");
let now = new Date();

let diff = now.getTime() - before.getTime();
diff = diff / (1000 * 3600 * 24);
diff = Math.round(diff);
if (diff < 2) console.log(`This artcle was published ${diff} day ago`);
else console.log(`This artcle was published ${diff} days ago`);
