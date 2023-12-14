let hourDiv = document.querySelector(".hourDiv");
let minDiv = document.querySelector(".minuteDiv");
let secDiv = document.querySelector(".secondDiv");

setInterval(() => {
  let time = new Date();
  let h = time.getHours();
  let m = time.getMinutes();
  let s = time.getSeconds();

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  hourDiv.innerHTML = `<span class="hour">${h}</span>`;
  minDiv.innerHTML = `<span class="min">${m}</span>`;
  secDiv.innerHTML = `<span class="sec">${s}</span>`;
}, 1000);
