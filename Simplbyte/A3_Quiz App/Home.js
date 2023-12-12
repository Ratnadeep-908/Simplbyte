const quizQuestions = [
    {
        question: "Which of the following is not a built in module in Node.jS",
        opt1: "http",
        opt2: "path",
        opt3: "mysql",
        opt4: "fs",
        correct: "opt3",
    },
    {
        question: "Which of the following can read and render HTML web pages",
        opt1: "Web Browser",
        opt2: "Server",
        opt3: "head Tak",
        opt4: "None of the above",
        correct: "opt1",
    },
    {
        question: "Why were cookies designed?",
        opt1: "For server-side programming",
        opt2: "For client-side programming",
        opt3: "both 1 and 2",
        opt4: "None",
        correct: "opt1",
    },
    {
        question: "A website is a _____ cookie",
        opt1: "volatile",
        opt2: "non-volatile",
        opt3: "in-transient",
        opt4: "transient",
        correct: "opt4",
    },
];
let question_number_element = document.getElementById("question-number");
let question_txt_element = document.getElementById("question-txt");
let option_1_element = document.getElementById("option1");
let option_2_element = document.getElementById("option2");
let option_3_element = document.getElementById("option3");
let option_4_element = document.getElementById("option4");
let next_button = document.getElementById("next-button");
let current_question_number=0;
let score=0;
/**
 * A function to show question and options on html page.
 */
function showQuestion(){
    //uncheck all the option seleceted
    document.querySelectorAll("input[name = opt]").forEach(option=> option.checked=false)
    
    //set questions and options from array
    question_number_element.innerHTML = (current_question_number+1) + ". ";
    question_txt_element.innerHTML = quizQuestions[current_question_number].question;
    option_1_element.innerHTML = quizQuestions[current_question_number].opt1;
    option_2_element.innerHTML = quizQuestions[current_question_number].opt2;
    option_3_element.innerHTML= quizQuestions[current_question_number].opt3;
    option_4_element.innerHTML= quizQuestions[current_question_number].opt4;
}

/**
 * Handling Event listner on button click
 */
next_button.addEventListener('click',()=>{
    let optionIdSelected = document.querySelector('input[name = opt]:checked');
    if(optionIdSelected==null)
    {
        alert("Please select one option");
    }else{

        let option_correct = quizQuestions[current_question_number].correct;
        if(optionIdSelected.id==option_correct){
            score++;        
        }
        current_question_number ++;
        if(current_question_number>=quizQuestions.length){
            // show final answer
            current_question_number = 0;
            localStorage.setItem("score", score);
            location.href = "./page.html";
    
        }else{
            //show next question
            showQuestion();
        }
    }
});

showQuestion();