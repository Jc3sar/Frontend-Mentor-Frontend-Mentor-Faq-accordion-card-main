// let q1 = document.getElementById("accordion__questions-1");
// let q2 = document.getElementById("accordion__questions-2");
// let q3 = document.getElementById("accordion__questions-3");
// let q4 = document.getElementById("accordion__questions-4");
// let q5 = document.getElementById("accordion__questions-5");


// q1.addEventListener("click", () =>{
//     let answer = document.getElementById("accordion-answer1");
//     let arrow = document.getElementById("arrow1");
//     let tittle = document.getElementById("tittle1");
//     answer.classList.toggle("active");
//     arrow.classList.toggle("rotate");
//     tittle.classList.toggle("tittleBold");
// })


// q2.addEventListener("click", () =>{
//     let answer = document.getElementById("accordion-answer2");
//     let arrow = document.getElementById("arrow2");
//     let tittle = document.getElementById("tittle2");
//     answer.classList.toggle("active");
//     arrow.classList.toggle("rotate");
//     tittle.classList.toggle("tittleBold");
// })



// q3.addEventListener("click", () =>{
//     let answer = document.getElementById("accordion-answer3");
//     let arrow = document.getElementById("arrow3");
//     let tittle = document.getElementById("tittle3");
//     answer.classList.toggle("active");
//     arrow.classList.toggle("rotate");
//     tittle.classList.toggle("tittleBold");
// })



// q4.addEventListener("click", () =>{
//     let answer = document.getElementById("accordion-answer4");
//     let arrow = document.getElementById("arrow4");
//     let tittle = document.getElementById("tittle4");
//     answer.classList.toggle("active");
//     arrow.classList.toggle("rotate");
//     tittle.classList.toggle("tittleBold");
// })



// q5.addEventListener("click", () =>{
//     let answer = document.getElementById("accordion-answer5");
//     let arrow = document.getElementById("arrow5");
//     let tittle = document.getElementById("tittle5");
//     answer.classList.toggle("active");
//     arrow.classList.toggle("rotate");
//     tittle.classList.toggle("tittleBold");
// })



let questions = document.querySelectorAll("accordion__toggle");
console.log(questions)

questions.forEach(question => {
  console.log(question.value);
});
