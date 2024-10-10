// practice-logic.js

let currentQuestions = [];
let currentQuestionIndex = 0;
let correctAnswers = 0;
const totalQuestions = 5;
let timeRemaining = 600; // 10 minutes in seconds
let timerInterval;

function initializePractice(practiceType) {
    switch(practiceType) {
        case 'Math':
            currentQuestions = mathQuestions;
            break;
        case 'Verbal':
            currentQuestions = verbalQuestions;
            break;
        case 'Writing':
            currentQuestions = writingQuestions;
            break;
    }
    
    currentQuestions = shuffleArray(currentQuestions).slice(0, totalQuestions);
    updateProgressBar();
    startTimer();
    showQuestion();

    document.getElementById('nextButton').addEventListener('click', showQuestion);
    document.getElementById('toggleCalculator').style.display = 
        practiceType === 'Math' ? 'block' : 'none';
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function showQuestion() {
    if (currentQuestionIndex >= totalQuestions) {
        finishPractice();
        return;
    }

    const question = currentQuestions[currentQuestionIndex];
    
    // Clear previous question content
    document.getElementById('questionLabel').textContent = '';
    document.getElementById('optionButtons').innerHTML = '';
    
    // Add question number
    document.getElementById('questionNumber').textContent = `Question ${currentQuestionIndex + 1} of ${totalQuestions}`;

    if (question.hasPassage) {
        // Create and add passage container
        const passageContainer = document.createElement('div');
        passageContainer.className = 'passage-container';
        passageContainer.textContent = question.passage;
        document.getElementById('practiceView').insertBefore(passageContainer, document.getElementById('questionLabel'));
    }

    document.getElementById('questionLabel').textContent = question.text;
    
    const optionButtonsDiv = document.getElementById('optionButtons');
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = `${String.fromCharCode(65 + index)}. ${option}`;
        button.onclick = () => checkAnswer(option);
        optionButtonsDiv.appendChild(button);
    });

    document.getElementById('feedbackLabel').textContent = '';
    document.getElementById('nextButton').style.display = 'none';
    updateProgressBar();
}

function checkAnswer(selectedAnswer) {
    const currentQuestion = currentQuestions[currentQuestionIndex];
    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
    if (isCorrect) {
        document.getElementById('feedbackLabel').textContent = "Correct!";
        document.getElementById('feedbackLabel').style.color = '#4CAF50';
        correctAnswers++;
    } else {
        document.getElementById('feedbackLabel').textContent = "Incorrect. The correct answer is: " + currentQuestion.correctAnswer;
        document.getElementById('feedbackLabel').style.color = '#F44336';
    }
    
    currentQuestionIndex++;
    document.getElementById('nextButton').style.display = 'block';
    
    // Disable all option buttons after an answer is selected
    document.querySelectorAll('#optionButtons button').forEach(button => {
        button.disabled = true;
    });

    updateProgressBar();
    
    // Remove passage after answering
    const passageContainer = document.querySelector('.passage-container');
    if (passageContainer) passageContainer.remove();
}

function updateProgressBar() {
    const progress = (currentQuestionIndex / totalQuestions) * 100;
    document.getElementById('progressBar').style.width = `${progress}%`;
}

function startTimer() {
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        if (timeRemaining > 0) {
            timeRemaining--;
            updateTimerDisplay();
        } else {
            clearInterval(timerInterval);
            finishPractice();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    document.getElementById('timeRemaining').textContent = 
        `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function finishPractice() {
    clearInterval(timerInterval);
    const score = (correctAnswers / totalQuestions) * 100;
    alert(`Practice complete! Your score: ${score.toFixed(1)}%`);
    window.location.href = 'index.html';
}
