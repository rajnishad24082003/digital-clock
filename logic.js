
setInterval(() => {
let overalldate = new Date;
let hour = overalldate.getHours();
let min = overalldate.getMinutes();
let second = overalldate.getSeconds();

console.log(overalldate);
console.log(hour);
console.log(min);
console.log(second);

if(hour > 12)
{
    hour = hour - 12;
    let ampm = document.querySelector(".ampm");
    ampm.innerText = "PM";
}
else
{
    let ampm = document.querySelector(".ampm");
    ampm.innerText = "AM";
}
let finalhour = document.querySelector(".hour");
let finalminute = document.querySelector(".minute");
let finalsecond = document.querySelector(".second");

finalhour.innerText = hour;
finalminute.innerText = min;
finalsecond.innerText = second;
}, 1000);
