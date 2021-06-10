let day = "Sunday"
let age = "12"
let time = "12"

document.getElementById('button').addEventListener('click', wario)

function wario () {
  //get the .value from input boxes and save them in the day and age variables
  age = document.getElementById('answer1').value
  age = parseInt(age)
  day = document.getElementById('answer2').value
  if ((age < 18) && (day === "Monday" || day === "Tuesday" || day === "Wednsday" || day === "Thursday" || day == "Friday")) {
    document.getElementById('answer').innerHTML = "Go to School"
  } else if (day==='saturday' || day==='sunday') {
    document.getElementById('answer3').innerHTML = "DO NOT Go to School/Work"
  } else if ((age >= 18) && (day === "Monday" || day === "Tuesday" || day === "Wednsday" || day === "Thursday" || day == "Friday")) {
 document.getElementById('answer4').innerHTML = "Go to Work"
}
}