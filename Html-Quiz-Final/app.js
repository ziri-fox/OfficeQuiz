'use strict';
/**
 * Example store structure
 */
const store = {
  // 5 or more questions are required
  questions: [
    {
      question: 'What kind of bear is best?',
      answers: [
        // eslint-disable-next-line quotes
        "Brown Bear",
        'Black Bear',
        'Beets',
        'Battlestar Galactica',
      ],
      correctAnswer: 'Black Bear',
    },
    {
      question: 'How much did Jims Dwight costume cost him? ',
      answers: ['$11', '$15', '$7', 'It was free'],
      correctAnswer: '$11',
    },
    {
      // eslint-disable-next-line quotes
      question: "Why does Creed's desk smell like death?",
      answers: [
        'Creed does not believe in showers',
        // eslint-disable-next-line quotes
        "There's a dead rat in the vent above",
        'Nobody knows or wants to find out',
        'Creed sprouts mung beans at his desk',
      ],
      correctAnswer: 'Creed sprouts mung beans at his desk',
    },
    {
      question: 'How much is 19,154 pies divided by 61 pies?',
      answers: ['322 pies', '232 pies', '138 pies', '314 pies'],
      correctAnswer: '314 pies',
    },
    {
      question: 'What is Dwights middle name?',
      answers: ['Danger', 'Kurt', 'Olympus', 'Schrute'],
      correctAnswer: 'Kurt',
    },
    {
      question: 'Why did Toby move back from Costa Rica?',
      answers: ['He kept getting sunburns', 'He broke his neck', 'He missed Scranton', 'He missed his family'],
      correctAnswer: 'He broke his neck',
    },
    {
      question: 'Where do Dwight and Angela get married?',
      answers: ['Town Hall', 'The Office', 'A field', 'Schrute Farms'],
      correctAnswer: 'Schrute Farms',
    },
    {
      question: 'What is Jim and Pams daughters name?',
      answers: ['Pam Jr.', 'Sophie', 'Cece', 'Olivia'],
      correctAnswer: 'Cece',
    },
    {
      question: 'What is Jims first prank on Dwight?',
      answers: ['Gift-wrapped his desk and all other belongings', 'Stapler in Jello', 'Moved his desk to the bathroom', 'Filled his phone with quarters'],
      correctAnswer: 'Stapler in Jello',
    },
    {
      question: 'Where does Angela keep her cat?',
      answers: ['At home', 'In the A/C vent', 'Filing cabinet', 'Desk Drawer'],
      correctAnswer: 'Filing cabinet',
    },
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0,
  wrongCount: 0
};

function generateMainPage() {
  let mainPage = `<h1>The Office Quiz</h1><button id="start-quiz">Clock-In</button><embed src="TheOffice.mp3" loop="true" autostart="true" width="2"
  height="0">`;

  $('body').addClass('background middle');

  $('main').html(mainPage);
}

/**
 *
 * Technical requirements:
 *
 * Your app should include a render() function, that regenerates the view each time the store is updated.
 * See your course material, consult your instructor, and reference the slides for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 *
 */

/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store
function render() {
  let html = '';
  if (store.quizStarted === false) {
    html = generateMainPage();
  } else {
    html = generateQuestion();
  }

  $('main').html(html);
}

function generateQuestion() {
  let question = store.questions[store.questionNumber];

  let answerS = question.answers;

  let totalQuestions = store.questions.length;
  let currentScore = store.score;

  let nextQuestion = `<div class ="center paper"><form id="OfficeQuiz">
  <h3>${question.question}</h3>
  <input type="radio" name="question" id="answer1" value= '${answerS[0]}' />
  <label for="answer1">${answerS[0]}</label><br>
  <input type="radio" name="question" id="answer2" value= '${answerS[1]}' />
  <label for="answer2">${answerS[1]}</label><br>
  <input type="radio" name="question" id="answer3" value= '${answerS[2]}' />
  <label for="answer3">${answerS[2]}</label><br>
  <input type="radio" name="question" id="answer4" value= '${answerS[3]}' />
  <label for="answer4">${answerS[3]}</label><br>
  <p>Your current score is ${currentScore} correct and ${store.wrongCount} incorrect</p>
  <p>You're currently on question ${store.questionNumber + 1} of ${totalQuestions}</p>
  <button id="submit-button" class ="button">Submit</button></form></div>`;

  $('body').removeClass('background middle oscar phyllis');

  $('main').html(nextQuestion);
}

function generateFinalPage() {
  //let chosenAnswer = $('input[name = "question"]:checked').val();
  // let rightAnswer = store.questions[store.questionNumber].correctAnswer;
  let totalQuestions = store.questions.length;
  let finalScore = (store.score / totalQuestions) * 100;
  let finalPageDwight = `<div class = "middle"><h1>Final Score</h1>
  <h2>You scored ${finalScore}% That's Dwight level genius right there!</h2>
  <button id="restart-button">Restart</button></div>`;
  let finalPageDwightJim = `<div class = "middle"><h1>Final Score</h1>
  <h2>You scored a ${finalScore}% Not quite Dwight level genius but not as dumb as Jim, that's for sure.</h2>
  <button id="restart-button">Restart</button></div>`;
  let finalPagePam = `<div class = "middle"><h1>Final Score</h1>
  <h2>You scored a ${finalScore}% You seem to know most of what's going on around the office, but maybe you're a bit too busy answering phones to catch everything.</h2>
  <button id="restart-button">Restart</button></div>`;
  let finalPageJim = `<div class = "middle"><h1>Final Score</h1>
  <h2>You scored a ${finalScore}% Maybe if you didn't spend so much time planning pranks on coworkers you would've answered more questions correctly.</h2>
  <button id="restart-button">Restart</button></div>`;
  let finalPageKevin = `<div class = "middle"><h1>Final Score</h1>
  <h2>You scored a ${finalScore}% Maybe you're good at doing math as long as it involves pie but not much else.</h2>
  <button id="restart-button">Restart</button></div>`;
  let finalPageMichael = `<div class = "middle"><h1>Final Score</h1>
  <h2>You scored a ${finalScore}% You were about as good at this quiz as this guy is at being a boss</h2>
  <button id="restart-button">Restart</button></div>`;

  if (finalScore === 100) {
    $('body').removeClass('oscar phyllis');
    $('body').addClass('Dwight');
    $('main').html(finalPageDwight);
  } else if (finalScore >= 90) {
    $('body').removeClass('oscar phyllis');
    $('body').addClass('DwightJim');
    $('main').html(finalPageDwightJim);
  } else if (finalScore >= 80) {
    $('body').removeClass('oscar phyllis');
    $('body').addClass('Pam');
    $('main').html(finalPagePam);
  } else if (finalScore >= 70) {
    $('body').removeClass('oscar phyllis');
    $('body').addClass('Jim');
    $('main').html(finalPageJim);
  } else if (finalScore >= 60) {
    $('body').removeClass('oscar phyllis');
    $('body').addClass('Kevin');
    $('main').html(finalPageKevin);
  } else if (finalScore <= 50) {
    $('body').removeClass('oscar phyllis');
    $('body').addClass('Michael');
    $('main').html(finalPageMichael);
  }
}

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)
function startButton() {
  $('main').on('click', '#start-quiz', function (event) {
    store.quizStarted = true;

    render();
  });
}

function nextButton() {
  $('main').on('click', '#next-button', function (event) {
    event.preventDefault();
    let html = '';
    if (
      store.quizStarted === true &&
      store.questionNumber + 1 === store.questions.length
    ) {
      html = generateFinalPage();
      $('main').html(html);
    } else {
      store.questionNumber++;
      render();
    }

    // $('main').html(store.questionNumber);
  });
}

function submitButton() {
  $('main').on('click', '#submit-button', function (event) {
    event.preventDefault();
    let chosenAnswer = $('input[name = "question"]:checked').val();
    let rightAnswer = store.questions[store.questionNumber].correctAnswer;
    let correctAnswerPage = `<div class = "center"><h2>You got that one right! Im so proud of you</h2>
    <button id="next-button">Next</button></div>`;
    let wrongAnswerPage = `<div class ="center"><h2>Actually that's not true, I know the question you were trying to answer and the answer was: ${rightAnswer} </h2><button id="next-button">Next</button></div>`;
    if (chosenAnswer === rightAnswer) {
      store.score++;
      $('main').html(correctAnswerPage);
      $('body').removeClass('oscar');
      $('body').addClass('phyllis');
    } else {
      store.wrongCount++;
      $('main').html(wrongAnswerPage);
      $('body').removeClass('phyllis');
      $('body').addClass('oscar');
    }
  });
}

function restartButton() {
  $('main').on('click', '#restart-button', function (event) {
    event.preventDefault();
    store.questionNumber = 0;
    store.score = 0;
    store.wrongCount = 0;
    $('body').removeClass(
      'oscar phyllis Dwight DwightJim Pam Jim Kevin Michael'
    );
    $('main').html(generateMainPage());
  });
}

function all() {
  startButton();
  render();
  nextButton();
  submitButton();
  restartButton();
}

$(all());
