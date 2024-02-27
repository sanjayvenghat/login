let questiones = [
    {
        question: "Which is the most loved programming language?",
        answers: [
            {
                text: "JavaScript",
                answer: true
            },
            {
                text: "C",
                answer: false
            },
            {
                text: "Python",
                answer: false
            },
            {
                text: "Java",
                answer: false
            }
        ]
    },
    {
        question: "Which is used to get the index in JavaScript?",
        answers: [
            {
                text: "for in",
                answer: true
            },
            {
                text: "for of",
                answer: false
            },
            {
                text: "for",
                answer: false
            },
            {
                text: "none of the above",
                answer: false
            }
        ]
    },
    {
        question: "Why do you love JavaScript?",
        answers: [
            {
                text: "Easy",
                answer: true
            },
            {
                text: "Tough",
                answer: false
            },
            {
                text: "Rather",
                answer: false
            },
            {
                text: "None of the above",
                answer: false
            }
        ]
    }
];

const questionElement = document.getElementById("question");
const answerElement = document.getElementById("answer-button");
const nextButton = document.querySelector(".btn_submit");

function startquiz() {
let new_value = 0;
showQuestion(new_value);
}

function showQuestion(index) {
let question_value = questiones[index];
console.log(question_value)
questionElement.innerHTML = question_value.question
answerElement.innerHTML = ''; 

question_value.answers.forEach((answer, value) => {
    let btn_btn = document.createElement("button");
    btn_btn.textContent = answer.text
    btn_btn.classList.add("btn")

    answerElement.appendChild(btn_btn)
    btn_btn.addEventListener("click", () => {
       
        handle_value(answer['answer'], index);
        
    })
});
}

function handle_value(index_val, index) {
let btn_btn = document.querySelector(".btn_submit");
let count=0;

if (index_val) {
    count++
    let style = document.createElement("style");
    style.innerHTML = ".btn_submit{display:block;background-color: green;}";
    document.head.append(style);
    btn_btn.addEventListener("click", () => { 

        index++; 
        if(questiones.length>index)
        {
        showQuestion(index) 
        
        }
        else 
        {
            questionElement.textContent = "Quiz is finished! thanyou for your response"+count;
            questionElement.style.color="green"
            //questionElement.textContent =  count;
            answerElement.innerHTML = '';
            nextButton.style.display = "none";
        }
       
    });
} else {
    let style = document.createElement("style");
    style.innerHTML = ".btn_submit{display:block;background-color: red;}";
    document.head.append(style);
}
}
startquiz();
