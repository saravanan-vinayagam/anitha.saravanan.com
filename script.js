const quizData = [
    {
        question: "who is  president of india ?",
        a: "saravanan",
        b: "narendra modi",
        c: "jayalalitha",
        d: "karunanidhi",
        correct: "b",
    },
    {
        question: 'Popular programming lang in 2020 ?',
        a: 'python',
        b: 'kotlin',
        c: 'java',
        d: 'javascript',
        correct: 'a',
    },
    {
        question: 'Founder of google company ?',
        a: 'Larry page',
        b: 'mark zukerberg',
        c: 'steve jobs',
        d: 'bill gates',
        correct: 'a',
    },
    {
        question: 'Founder of microsoft company ? ',
        a: 'Larry page',
        b: 'mark zukerberg',
        c: 'steve jobs',
        d: 'bill gates',
        correct: 'd',
    }
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionE1 = document.getElementById('question');

const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;
loadQuiz();
function loadQuiz(){
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];

    questionE1.innerText = currentQuizData.
    question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
    

    }
function getSelected() {
    let answer = null;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () =>{
   // check to see the answer
   const answer = getSelected();

   if (answer) {
       if (answer === quizData[currentQuiz].correct) {
           score++;
        
       }
       

       currentQuiz++;
       if (currentQuiz < quizData.length) {
           loadQuiz();
       } else {
           quiz.innerHTML = `
               <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
               
               <button onclick="location.reload()">Reload</button>
           `;
       }
   }
   else {
      window.alert("please select the answer!");
    
   }
});     