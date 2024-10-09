const questions=[
    {
        question: "what is the Speed Limit in Residential areas ?",
        answers :[
            {
                text:"30-35km/h",correct:false
            },
            {
                text:"25-30km/h",correct:true
            },
            {
                text:"10-20km/h",correct:false
            },
            {
                text:"45-50km/h",correct:false
            },
        ]
    },
    {
        question: "what does Red octagonal sign indicate?",
        answers :[
            {
                text:"start",correct:false
            },
            {
                text:"Go slow",correct:false
            },
            {
                text:"Stop",correct:true
            },
            {
                text:"Maintanence",correct:false
            },
        ]
    },
    {
        question: "what should you do if a traffic light is flashing yellow ?",
        answers :[
            {
                text:"proceed with caution",correct:true
            },
            {
                text:"stop completely",correct:false
            },
            {
                text:"ingnore it continue driving slowly",correct:false
            },
            {
                text:"Speed up to clear intersection",correct:false
            },
        ]
    },
    {
        question: "How far from a fire hydrant are you allowed to park?",
        answers :[
            {
                text:"3 meter",correct:true
            },
            {
                text:"5 meter",correct:false
            },
            {
                text:"2 meter",correct:false
            },
            {
                text:"4 meter",correct:false
            },
        ]
    },
];
const questionElement = document.getElementById("question");
const answerbutton= document.getElementById("ansbutton");
const nextbutton=document.getElementById("next-btn");
let currentquestionindex=0;
let score=0;
 function startquiz(){
    currentquestionindex = 0;
    score=0;
    nextbutton.innerHTML="NEXT";
    showquestions();
 }
 function   showquestions(){
    resetstate();
    let currentquestion = questions[currentquestionindex];
    let questionno= currentquestionindex + 1 ;
    questionElement.innerHTML= questionno + "."+ currentquestion.question;

    currentquestion.answers.forEach(answer =>{
         const button = document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerbutton.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAnswer);

    });
 }


 function resetstate(){
    nextbutton.style.display = "none";
    while(answerbutton.firstChild){
        answerbutton.removeChild(answerbutton.firstChild);
    }
 }
 function selectAnswer(e){
    const selectedbtn=e.target;
    const isCorrect=selectedbtn.dataset.correct==="true";
    if(isCorrect)
        {
            selectedbtn.classList.add("correct");
            score++;
        }
       else{
        selectedbtn.classList.add("incorrect");
       } 
       Array.from(answerbutton.children).forEach(button=>{
        if(button.dataset.correct==="true")
            {
                button.classList.add("correct");
            }
            button.disabled = true;
       });
       nextbutton.style.display="block";
 }
 function showscore(){ 
    resetstate();
    questionElement.innerHTML = `YOU scored ${score} / ${questions.length}
   ....... DRIVE SAFE..!`;
    nextbutton.innerHTML=  " PLAY AGAIN ";
    nextbutton.style.display="block";
 }
 function handleNextButton(){
    currentquestionindex++;
    if(currentquestionindex<questions.length){
        showquestions();
    }
    else{
        showscore();
    }
 }
 nextbutton.addEventListener("click",()=>{
    if(currentquestionindex< questions.length){
        handleNextButton();
    }
    else{
        startquiz();
    }
 })
 startquiz();
