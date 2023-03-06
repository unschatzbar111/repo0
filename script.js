const { controllers } = require("chart.js");

function template(){
  const semester = document.getElementById("semester-box");
    const semesterOption = semester.options[semester.selectedIndex];
    const semesterValue = semesterOption.value;

    const checkbox = document.querySelector('input[type="checkbox"]');

    if(semesterValue == 1 && checkbox.checked){
      window.location.href = `Sem1-Elc.html`
    } else if (semesterValue == 1){ 
      window.location.href = `Sem1-Non-Elc.html`
    } else if (semesterValue == 2 && checkbox.checked){
      window.location.href = `Both ElC first.html`
    } else if (semesterValue == 2){
      window.location.href = `Both ELC second.html`
    }
    
}

function translate(){
const data = document.querySelectorAll('textarea');
const grades = [];

data.forEach(function(textArea) {
  grades.push(textArea.value);
});

const size = grades.length;

for(i = 0; i<size; i++){
if(grades[i] == "A*" || grades[i] == "A") grades[i] = 10;
else if (grades[i] == "B+") grades[i] = 9;
else if (grades[i] == "B") grades[i] = 8;
else if (grades[i] == "C+") grades[i] = 7;
else if (grades[i] == "C") grades[i] = 6;
else if (grades[i] == "D+") grades[i] = 5;
else if (grades[i] == "D") grades[i] = 4;
else if (grades[i] == "E" || grades[i] == "F" || grades[i] == "I") grades[i] = 0;
else return;
}
return grades;
}

function calculate1NonELC(){
  const c = [6, 6, 11, 6, 7, 7, 3];
  const g = translate();
  const totalC = 46;
  let totalG = 0;

  for (i=0; i<7; i++){
    totalG += c[i]*g[i];
  }
 
  spi = totalG/totalC;
  
  const output = document.querySelector('#output');
  output.innerHTML = "Your SPI for Sem-I is : " + spi;
}

function calculate1ELC(){
  const c = [6, 6, 11, 9, 9, 4, 4, 3];
  const g = translate();
  const totalC = 52;
  let totalG = 0;

  for (i=0; i<8; i++){
    totalG += c[i]*g[i];
  }

  spi = totalG/totalC;

  const output = document.querySelector('#output');
  output.innerHTML = "Your SPI for Sem-I is : " + spi;
}

function calculate2NonELC(){
  const c1 = [6, 6, 11, 6, 7, 7, 3];
  const c2 = [6, 6, 11, 9, 9, 4, 4, 3];
  const g = translate();
  const totalC1 = 46;
  const totalC2 = 52;

  let totalG1 = 0;
  let totalG2 = 0;

  for (i=0; i<7; i++){
    totalG1 += c1[i]*g[i];
  }
  spi1 = totalG1/totalC1;
  
  for(i=7; i<15; i++){
    totalG2 += c2[i-7]*g[i];
  }
  spi2 = totalG2/totalC2;

  cpi = (totalG1 + totalG2)/(totalC1 + totalC2);

  const output = document.querySelector('#output');
  output.innerHTML = "Your SPI for Sem-I is : " + spi1 + "\nYour SPI for Sem-II is : " + spi2 + "\nYour CPI uptil Sem-II is : " +cpi;
}

function calculate2ELC(){
  const c2 = [6, 6, 11, 6, 7, 7, 3];
  const c1 = [6, 6, 11, 9, 9, 4, 4, 3];
  const g = translate();
  const totalC1 = 52;
  const totalC2 = 46;

  let totalG1 = 0;
  let totalG2 = 0;

  for (i=0; i<8; i++){
    totalG1 += c1[i]*g[i];
  }
  spi1 = totalG1/totalC1;
  
  for(i=8; i<15; i++){
    totalG2 += c2[i-8]*g[i];
  }
  spi2 = totalG2/totalC2;

  cpi = (totalG1 + totalG2)/(totalC1 + totalC2);

  const output = document.querySelector('#output');
  output.innerHTML = "Your SPI for Sem-I is : " + spi1 + "\nYour SPI for Sem-II is : " + spi2 + "\nYour CPI uptil Sem-II is : " +cpi;
}