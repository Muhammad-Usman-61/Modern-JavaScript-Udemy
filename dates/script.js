let newDates = new Date();
let time = newDates.getTime();

time = (time /(1000 * 3600 * 24 * 365)).toFixed(2);
console.log(time , "Years");    
console.log(newDates.toDateString());
console.log(newDates.toTimeString());
console.log(newDates.toLocaleString());

