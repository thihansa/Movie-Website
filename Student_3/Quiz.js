//select elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scores = document.getElementById("scores");
const numQuestion = document.getElementById("numQuestion");


//create our questions

let questions = [{
    question: 'Who won his second Oscar in successive years for Forrest Gump?',
    choiceA: "Tom Hank",
    choiceB: "Johnny Depp",
    choiceC: "Brad Pitt ",
    choiceD: "Leonardo DiCaprio",
    correct: "A"
  },
  {
    question: 'Who is the king of wakanda?',
    choiceA: "Erik killmonger",
    choiceB: "T'Challa",
    choiceC: "M'Baku",
    choiceD: "Nakia",
    correct: "B"
  },
  {
    question: 'how many infinity stones are in the Gauntlet in Avengers?',
    choiceA: "6",
    choiceB: "7",
    choiceC: "5",
    choiceD: "8",
    correct: "A"
  },

  {
    question: 'what is the largest movie industry?',
    choiceA: "Bollywood",
    choiceB: "Pollywood ",
    choiceC: "Tollywood",
    choiceD: "Hollywood",
    correct: "D"
  },
  {
    question: "In the movie 'Toy Story' to whom does Woody belong?",
    choiceA: "Andy",
    choiceB: "Sid ",
    choiceC: "Buzz",
    choiceD: "Billy",
    correct: "A"
  },
  {
    question: "In the movie 'Peter Pan' who is Captain Hook's pirate-buddy?",
    choiceA: "Peter",
    choiceB: "Tink ",
    choiceC: "Big Chief",
    choiceD: "Smee",
    correct: "D"
  },
  {
    question: "What car does Dom have waiting in his garage in 'The Fast and the Furious'?",
    choiceA: "1971 Plymouth Barracuda",
    choiceB: "1970 Dodge Charger",
    choiceC: "1971 Dodge Demon",
    choiceD: "1971 Chevy Impala",
    correct: "B"
  },
  {
    question: "what song was dedicated to Paul Walker from 'The Fast and the Furious'",
    choiceA: "see you again",
    choiceB: "lost",
    choiceC: "yesterday",
    choiceD: "one last ride ",
    correct: "A"
  },
  {
    question: 'what is Warner Bros?',
    choiceA: "music label",
    choiceB: "park ",
    choiceC: "studio",
    choiceD: "website",
    correct: "C"
  },
  {
    question: 'which movie was done by Disney',
    choiceA: "COCO",
    choiceB: "Avengers ",
    choiceC: "Captain america",
    choiceD: "Justice league",
    correct: "A"
  },
];

//create some variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 10; //10s
const gaugeWidth = 150; //150px  
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let score = 0;

//render a question
function renderQuestion() {
  let q = questions[runningQuestion];

  question.innerHTML = "<p>" + q.question + "</p>";
  choiceA.innerHTML = q.choiceA;
  choiceB.innerHTML = q.choiceB;
  choiceC.innerHTML = q.choiceC;
  choiceD.innerHTML = q.choiceD;
}

start.addEventListener("click", startQuiz);

//start quiz
function startQuiz() {
  start.style.display = "none";
  renderQuestion();
  quiz.style.display = "block";
  // renderprogress();  
  renderCounter();
  TIMER = setInterval(renderCounter, 1000); //1000ms=1s

}

//render progress
function renderprogress() {
  for (let qIndex = 0; qIndex <= lastQuestion; qIndex++) {
    progress.innerHTML += "<div class='prog' id=" + qIndex + "></div";
  }
}

//counter render

function renderCounter() {
  if (count <= questionTime) {
    counter.innerHTML = count;
    timeGauge.style.width = count * gaugeUnit + "px";
    count++;
  } else {
    count = 0;
    // answerIsWrong();
    if (runningQuestion < lastQuestion) {
      runningQuestion++;
      renderQuestion();
    } else {
      //end the quiz and show the score
      clearInterval(TIMER);
      scoreRender();


    }
  }

}

//checkAnswer
function checkAnswer(answer) {
  if (answer == questions[runningQuestion].correct) {
    //answer is correct
    score = score + 1;

  } else {
    score -= 1;

  }
  count = 0;
  if (runningQuestion < lastQuestion) {
    runningQuestion++;
    renderQuestion();
  } else {
    //end the quiz and show the score
    clearInterval(TIMER);
    scoreRender();
    correctAnswer()
    //returnScore();
  }

}




//score render
function scoreRender() {
  scores.style.display = "block";
  const scorePercent = Math.round(score);
  scores.innerHTML = "<P>YOUR SCORE IS : " + scorePercent + "/10</p>";
}

//wrong answer
function correctAnswer() {
  if (score < 3) {
    document.body.style.backgroundColor = "red";
  } else {
    document.body.style.backgroundColor = "green";
  }

}
