let q1 = document.getElementById("accordion--question1");
let q2 = document.getElementById("accordion--question2");
let q3 = document.getElementById("accordion--question3");
let q4 = document.getElementById("accordion--question4");
let q5 = document.getElementById("accordion--question5");


q1.addEventListener("click", () =>{
    let answer = document.getElementById("accordion--answer1");
    let arrow = document.getElementById("arrow1");
    let tittle = document.getElementById("accordion__questions--tittle1");
    console.log(tittle);
    answer.classList.toggle("active");
    arrow.classList.toggle("rotate");
    tittle.classList.toggle("tittleBold");
})

q2.addEventListener("click", () =>{
    let answer = document.getElementById("accordion--answer2");
    let arrow = document.getElementById("arrow2");
    let tittle = document.getElementById("accordion__questions--tittle2");
    console.log(tittle);
    answer.classList.toggle("active");
    arrow.classList.toggle("rotate");
    tittle.classList.toggle("tittleBold");
})


q3.addEventListener("click", () =>{
    let answer = document.getElementById("accordion--answer3");
    let arrow = document.getElementById("arrow3");
    let tittle = document.getElementById("accordion__questions--tittle3");
    console.log(tittle);
    answer.classList.toggle("active");
    arrow.classList.toggle("rotate");
    tittle.classList.toggle("tittleBold");
})


q4.addEventListener("click", () =>{
    let answer = document.getElementById("accordion--answer4");
    let arrow = document.getElementById("arrow4");
    let tittle = document.getElementById("accordion__questions--tittle4");
    console.log(tittle);
    answer.classList.toggle("active");
    arrow.classList.toggle("rotate");
    tittle.classList.toggle("tittleBold");
})


q5.addEventListener("click", () =>{
    let answer = document.getElementById("accordion--answer5");
    let arrow = document.getElementById("arrow5");
    let tittle = document.getElementById("accordion__questions--tittle5");
    console.log(tittle);
    answer.classList.toggle("active");
    arrow.classList.toggle("rotate");
    tittle.classList.toggle("tittleBold");
})





// q1.addEventListener("click", () =>{
//     let answer1 = document.getElementById("answer1");
//     let img = document.getElementById("img1");
//     let tittle = document.getElementById("titulo1");
//     answer1.classList.toggle("active");
//     img.classList.toggle("rotate");
//     tittle.classList.remove("tittleBold");
//     tittle.classList.toggle("tiitleSemiBold");
// })


