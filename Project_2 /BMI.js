const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  // form submit hota h two ways se 1. post type , 2.get type sumbmission , but jb  ///bhi submit hota h uski value URL or Server m chli jati h
  // se we need to stop that
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const s = document.querySelector('#result');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Enter a vaild height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Enter a vaild weight ${weight}`;
  } else {
    const BMI = (weight / ((height * height) / 1000)).toFixed(2);
    if (BMI < 18.6) {
      results.innerHTML = `<span> under Weight ${BMI}</span>`;
    } else if (BMI > 18.6 && BMI < 24.9) {
      results.innerHTML = `<span> normal Weight ${BMI}</span>`;
    } else {
      results.innerHTML = `<span> over Weight ${BMI}</span>`;
    }
  }
});
