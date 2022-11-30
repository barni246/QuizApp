let questions = [

    {
        "question": "Wer die ersten Zündhölzer erfunden?",
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



function init() {
    document.getElementById('all-questions').innerHTML = questions.length;
    showQuestion();
}


function showQuestion() {
    let question = questions[currentQuestion];
    if (currentQuestion >= questions.length) {
        document.getElementById('endScreen').style = '';
        document.getElementById('endergebnis').innerHTML = `${rightAnswer}`; // meine Lösung
        document.getElementById('fragenAnzahl').innerHTML = `${questions.length}`; //meine Lösung
        document.getElementById('questionBody').style = 'display: none';
    }
    else {
        document.getElementById('questiontext').innerHTML = question['question'];
        document.getElementById('answer_1').innerHTML = question['answer_1'];
        document.getElementById('answer_2').innerHTML = question['answer_2'];
        document.getElementById('answer_3').innerHTML = question['answer_3'];
        document.getElementById('answer_4').innerHTML = question['answer_4'];
    }

}


function nextQuestion() {
    currentQuestion++;
    document.getElementById('question-number').innerHTML = currentQuestion + 1;

    document.getElementById('next-button').disabled = true;
    resetButton();
    showQuestion();

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



function answer(selection) {
    let question = questions[currentQuestion];
    console.log('Current question is ', question['question'], currentQuestion);
    console.log('Selected answer is ', selection);
    let selectedQuestionNumber = selection.slice(-1);
    console.log('Right answer is ', question['right_answer']);

    // let idOfRightAnswer = `answer_3`;
    let idOfRightAnswer = `answer_${question['right_answer']}`;

    if (selectedQuestionNumber == question['right_answer']) {
        console.log('Richtige Antwort!!')
        document.getElementById(selection).parentNode.classList.add('bg-success');
        rightAnswer++; // meine Lösung
        console.log('Richtige Anwort: ',rightAnswer);
    }
    else {
        console.log('Falsche Antwort!!')
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
    }

    document.getElementById('next-button').disabled = false;

}

