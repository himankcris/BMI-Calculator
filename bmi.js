const button = document.querySelector('#btn');
const result = document.querySelector('#result');
const form = document.querySelector('form');

button.addEventListener('click',function(){
       const height = (document.querySelector('#height').value);
       const weight = (document.querySelector('#weight').value);

       const bmi = weight/(height*height)

       let bmi_msg = ' ';
       let color = ' ';

       if (bmi < 18.5){
          bmi_msg = 'Underweight';
          color = 'red';
       }
       else if (bmi > 18.5 && bmi < 24.9){
          bmi_msg = 'Healthy';
          color = 'green';
       }
       else if (bmi > 25 && bmi < 29.9){
          bmi_msg = 'Overweight';
          color = 'red';      
       }
       else {
          bmi_msg = 'Obesity';
          color = 'red';    
       }

       result.innerHTML = `<p id="result">BMI = ${Math.round(bmi*100)/100} <b>(${bmi_msg})</b></p>`;
       result.style.color = color;

})

form.addEventListener('submit',e =>{
    e.preventDefault();
    
})
