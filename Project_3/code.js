const clock = document.getElementById('clock');
//const clock = document.querySelector('#clcok')

setInterval(function () {
  let date = new Date();
  console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
  clock.style.backgroundColor = 'red';
}, 1000);
