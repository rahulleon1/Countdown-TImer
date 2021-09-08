// Target date
const yearArray= [
  {
  dates: "26 jun 2022",
  names: "Bot1"
},
{
  dates: "12 sep 2021",
  names: "Bot2"
},
{
  dates: "15 sep 2021",
  names: "Bot3"
},
{
  dates: "12 sep 2021",
  names: "Bot4"
}
];


const randomNo = Math.floor(Math.random()*3);
const picker = yearArray[randomNo];

console.log(picker.dates);
console.log(picker.names);
const newYears = picker.dates;

function countdown()
{
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();
  const totalSeconds = Math.abs((newYearsDate-currentDate)/1000);

  const sec = Math.floor(totalSeconds) % 60;
  const mins = Math.floor(totalSeconds/60) % 60;
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const days = Math.floor(totalSeconds / 3600 / 24);

  console.log(days, hours, mins, sec);

  $(".timer-head").text(picker.names+"'"+"s Birthday");
  $("#days").text(formatTime(days));
  $("#hrs").text(formatTime(hours));
  $("#mins").text(formatTime(mins));
  $("#secs").text(formatTime(sec));
}

// To format timeout
function formatTime(time) {
  return time < 10 ? ('0'+time) : time;
}

// Initial call
countdown();

// Calling once every sec
setInterval(countdown,1000);
