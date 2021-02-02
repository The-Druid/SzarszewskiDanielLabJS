const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
var score = 0;
var q = 0;
let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  alert("Twoje punkty: "+parseInt(score) +"/"+questions.length);
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
		
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
	
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
	score=score+1;
	
	
  } else {
    element.classList.add('wrong')
	score=score-0.33;
	
  }
  
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
  
  
}

const questions = [
  {
    question: 'Ile to 2 + 2?',
    answers: [
      { text: '4', correct: true },
      { text: '22', correct: false }
    ]
  },
  {
    question: 'Kto nosił miano barda solidarności i grał odwrotnie na gitarze',
    answers: [
      { text: 'Józef Łapiński', correct: false },
      { text: 'Jacek Kaczmarski', correct: true },
      { text: 'Michał Szpak', correct: false },
      { text: 'Przemysław Gintrowski', correct: false }
    ]
  },
  {
    question: 'Jak miał na imię Krzysztof Kolumb',
    answers: [
      { text: 'Kolumb', correct: false },
      { text: 'Krzysztof', correct: true },
      { text: 'Kryspin', correct: false },
      { text: 'Krystian', correct: false }
    ]
  },
 
    {
    question: 'RMAN?',
    answers: [
      { text: 'Recovery Manager', correct: true },
      { text: 'Random Access Native', correct: false },
      { text: 'Russia Mothers and Naphews', correct: false },
      { text: 'Raz mi archiwizacja nie(poszła)', correct: false }
    ]
  },
  {
    question: 'Na czym robimy repacka?',
    answers: [
      { text: 'Na Thunderbirdzie', correct: false },
      { text: 'Na Oracle', correct: false },
      { text: 'Na Firebirdzie', correct: true },
      { text: 'Na nowym Fametwerku', correct: false }
    ]
  },
  {
   question: 'Jak NIE nazywała się żadna z atomówek',
    answers: [
      { text: 'Bójka', correct: false },
      { text: 'Bajka', correct: false },
      { text: 'Barka', correct: true },
      { text: 'Brawurka', correct: false }
    ]
  },
  
  {
    question: 'Ile to 5 * 3?',
    answers: [
      { text: '11', correct: false },
      { text: '15', correct: true }
    ]
  }
]