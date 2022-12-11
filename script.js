let questions = [

    {
        "question": "Wer hat die ersten Zündhölzer erfunden?",
        "answer_1": "Aristotles",
        "answer_2": "Albert Einstein",
        "answer_3": "Jean-Louis Chancel",
        "answer_4": "Buddha",
        "right_answer": 3
    },

    {
        "question": "Ein stück Würfel-Zucker wiegt:",
        "answer_1": "3 gramm",
        "answer_2": "5 gramm",
        "answer_3": "7 gramm",
        "answer_4": "10 gramm",
        "right_answer": 1
    },
    {
        "question": "Wer hat John Lennon erschossen?",
        "answer_1": "Old Shatterhand",
        "answer_2": "John F. Kennedy",
        "answer_3": "Mark David Chapman",
        "answer_4": "Wyatt Earp",
        "right_answer": 3
    },

    {
        "question": "Wo fliegen die deutschen am liebsten hin?",
        "answer_1": "Mallorca",
        "answer_2": "USA",
        "answer_3": "Dubai",
        "answer_4": "Neuseeland",
        "right_answer": 1
    },
    {
        "question": "Wer hat Amerika entdeckt?",
        "answer_1": "Charles Darwin",
        "answer_2": "Wladimir Iljitsch Lenin",
        "answer_3": "Christoph Kolumbus",
        "answer_4": "Leonardo da Vinci",
        "right_answer": 3
    },
    {
        "question": "Was essen die Franzosen zum Frühstück?",
        "answer_1": "Avocado",
        "answer_2": "Croissants",
        "answer_3": "Breze",
        "answer_4": "Milchreis",
        "right_answer": 2
    },

    {
        "question": "Wer hat die Impfung erfunden?",
        "answer_1": "Isaac Newton",
        "answer_2": "Neil Armstrong",
        "answer_3": "Pablo Picasso",
        "answer_4": "Edward Jenner",
        "right_answer": 4
    }
];


let currentQuestion = 0;
let rightAnswer = 0;
let colorOfBg = false;
let percentSuccess = 0;
let percentDanger = 0;
let AUDIO_FAIL = new Audio('audio/wrong2.mp3');
let AUDIO_SUCCESS = new Audio('audio/right.mp3');
let soundPlayRight = true;
let soundPlayWrong = true;
let rightAnswerColor = true;
let wrongAnswerColor = true;


function init() {
    document.getElementById('all-questions').innerHTML = questions.length;
    document.getElementById('soundOn').classList.remove('d-none');
    showQuestion();
}


function showQuestion() {
    document.getElementById('question-number').innerHTML = currentQuestion + 1;

    if (currentQuestion >= questions.length) {
        endscreenElements();
    }
    else {
        nextQuestionElements();
    }
}


function nextQuestion() {
    document.getElementById('progress').classList.remove('d-none');
    document.getElementById('imageContainer').style = ``;
    currentQuestion++;
    let percent = Math.round(((currentQuestion) / questions.length) * 100);

    if (colorOfBg) {
        percentSuccess = percent - percentDanger;
        progressSuccess();
    }
    else {
        percentDanger = percent - percentSuccess;
        progressDanger();
    }
    document.getElementById('next-button').disabled = true;
    resetButton();
    showQuestion();
}


function progressSuccess() {
    document.getElementById('progress-bar-success').innerHTML = `${percentSuccess} %`;
    document.getElementById('progress-bar-success').style = `width: ${percentSuccess}%`;
}


function progressDanger() {
    document.getElementById('progress-bar-danger').innerHTML = `${percentDanger} %`;
    document.getElementById('progress-bar-danger').style = `width: ${percentDanger}%`;
}


function answer(selection) {

    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);

    if (selectedQuestionNumber == question['right_answer']) {
        rightAnswerElements(selection);
    }
    else {
        wrongAnswerElements(selection);
    }
    document.getElementById('next-button').disabled = false;
}


function soundButton() {

    if (soundPlayRight) {
        document.getElementById('soundOn').classList.add('d-none');
        document.getElementById('soundOut').classList.remove('d-none');
        soundPlayRight = false;
        soundPlayWrong = false;
    }
    else {
        document.getElementById('soundOn').classList.remove('d-none');
        document.getElementById('soundOut').classList.add('d-none');
        soundPlayWrong = true;
        soundPlayRight = true;
    }
}


function start() {
    currentQuestion = 0;
    rightAnswer = 0;
    colorOfBg = false;
    soundPlayRight = true;
    soundPlayWrong = true;
    percentSuccess = 0;
    percentDanger = 0;
    startElements();
    init();
}


function rightAnswerElements(selection) {

    if (!wrongAnswerColor) {
        return
    }
    if (rightAnswerColor) {
        document.getElementById(selection).parentNode.classList.add('bg-success');
        rightAnswer++;
        colorOfBg = true;
        document.getElementById('imageContainer').style = 'background-image: linear-gradient(green, white)';
        if (soundPlayRight) { AUDIO_SUCCESS.play(); }
        rightAnswerColor = false;
    }
}


function wrongAnswerElements(selection) {

    if (!rightAnswerColor) {
        return
    }
    if (wrongAnswerColor) {
        let question = questions[currentQuestion];
        let idOfRightAnswer = `answer_${question['right_answer']}`;
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        rightAnswerColor = true;
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
        colorOfBg = false;
        document.getElementById('imageContainer').style = `background-image: linear-gradient(#dc3848, white)`;
        if (soundPlayWrong) { AUDIO_FAIL.play(); }
        wrongAnswerColor = false;
    }
    else {
        return
    }

}


function startElements() {
    document.getElementById('questionBody').style = '';
    document.getElementById('endScreen').style = 'display: none';
    document.getElementById('lightbulb').src = 'img/question-mark-5976736_640.png';
    document.getElementById('imageContainer').classList.remove('bg-white');
    document.getElementById('imageContainer').classList.add('bg-bulb');
    document.getElementById('progress').classList.add('d-none');
    document.getElementById('progress-bar-success').innerHTML = `${percentSuccess} %`;
    document.getElementById('progress-bar-success').style = `width: ${percentSuccess}%`;
    document.getElementById('progress-bar-danger').innerHTML = `${percentDanger} %`;
    document.getElementById('progress-bar-danger').style = `width: ${percentDanger}%`;
    document.getElementById('lightbulb').classList.add('turnY');
    document.getElementById('leftContainer').classList.remove('turnY');
}


function resetButton() {
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}


function nextQuestionElements() {
    rightAnswerColor = true;
    wrongAnswerColor = true;
    let question = questions[currentQuestion];
    document.getElementById('questiontext').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}


function endscreenElements() {
    document.getElementById('endScreen').style = '';
    document.getElementById('rightAnswer').innerHTML = `${rightAnswer}`;
    document.getElementById('allAnswer').innerHTML = `${questions.length}`;
    document.getElementById('questionBody').style = 'display: none';
    document.getElementById('imageContainer').classList.add('endScreenStyle');
    document.getElementById('lightbulb').src = 'img/fax.jpg';
    document.getElementById('lightbulb').style = '';
    document.getElementById('leftContainer').classList.add('turnY');
    document.getElementById('lightbulb').classList.remove('turnY');
    document.getElementById('imageContainer').classList.remove('bg-bulb');
    document.getElementById('imageContainer').classList.add('bg-white');
    document.getElementById('soundOn').classList.add('d-none');
    document.getElementById('soundOut').classList.add('d-none');
}







