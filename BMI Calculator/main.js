const form = document.querySelector('form');


form.addEventListener('submit',function(e){
    e.preventDefault();


const height = parseInt(document.querySelector('#height').value);
const weight = parseInt(document.querySelector('#weight').value);
const result = document.querySelector('#results');
const guide = document.querySelector('.weight-guide');

if(height === '' || height < 0 || isNaN(height)){
    result.innerHTML = `please valid input ${height}`;
    guide.innerText = "";
    // return;
} else if(weight === '' || weight < 0 || isNaN(weight)){
    result.innerHTML = `please valid input ${weight}`;
    guide.innerText = "";
    // return;
} 
    const bmi = (weight / ((height * height)/ 10000)).toFixed(2);
    result.innerHTML = `<span>${bmi}</span>`;


const R = parseFloat(bmi);

 if (R < 18.5) {
    guide.innerText = "Underweight";
  } else if (R < 25) {
    guide.innerText = "Normal";
  } else if (R < 30) {
    guide.innerText = "Overweight";
  } else {
    guide.innerText = "Obese";
  }

  console.log(R);
});