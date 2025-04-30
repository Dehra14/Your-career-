const quizData = [
    {
        question: "What gas do plants absorb from the atmosphere",
        options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
        answer: "Carbon Dioxide"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Venus", "Mars", "Jupiter", "Saturn"],
        answer: "Mars"
    },
    {
        question: "Which African country has the highest population?",
        options: ["Egypt", "South Africa", "Ethopia", "Nigeria"],
        answer: "Nigeria"
    },
    {
        question: "Which language runs in a web browser?",
        options: ["Java", "C", "Python", "JavaScript"],
        answer: "JavaScript"
    },
    {
        question: "How many continents are there in the world?",
        options: ["5", "8", "7", "None of the above"],
        answer: "7"
    }
];

const quizContent = document.querySelector('.quiz-content');
const resultsContainer = document.querySelector('.results-container');
const questionNumber = document.querySelector('.question-number');
const questionText = document.querySelector('.question-text');
const optionsContainer = document.querySelector('.options-container');
const nextButton = document.querySelector('.next-button');
const scoreDisplay = document.querySelector('.score');
const restartButton = document.querySelector('.restart-button');

let currentQuestionIndex = 0;
let score = 0;
let selectedOption = null;
let quizCompleted = false;


function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    
    
    questionNumber.textContent = `Question ${currentQuestionIndex + 1} of ${quizData.length}`;
    questionText.textContent = currentQuestion.question;
    
    
    optionsContainer.innerHTML = '';
    
   
    currentQuestion.options.forEach(option => {
        const optionElement = document.createElement('div');
        optionElement.classList.add('option');
        optionElement.textContent = option;
        
        
        optionElement.addEventListener('click', () => {
            
            document.querySelectorAll('.option').forEach(opt => {
                opt.classList.remove('selected');
            });
            
            
            optionElement.classList.add('selected');
            selectedOption = option;
            nextButton.disabled = false;
        });
        
        optionsContainer.appendChild(optionElement);
    });
    
    
    nextButton.disabled = true;
    selectedOption = null;
}


function showResults() {
    quizContent.style.display = 'none';
    resultsContainer.style.display = 'block';
    scoreDisplay.textContent = `Your Score: ${score}/${quizData.length}`;
    quizCompleted = true;
}


nextButton.addEventListener('click', () => {
   
    if (selectedOption === quizData[currentQuestionIndex].answer) {
        score++;
    }
    
   
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        showResults();
    }
});


restartButton.addEventListener('click', () => {
    currentQuestionIndex = 0;
    score = 0;
    quizCompleted = false;
    quizContent.style.display = 'block';
    resultsContainer.style.display = 'none';
    loadQuestion();
});


loadQuestion();