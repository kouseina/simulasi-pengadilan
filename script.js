let selectedRole = "";
let questionIndex = 0;
let score = 0;
let questions = {
    hakim: [
        { question: "Apa tugas utama seorang hakim?", answers: ["Memutuskan perkara", "Membela terdakwa", "Mengajukan bukti", "Menangkap pelaku"], correct: 1 },
        { question: "Siapa yang harus diutamakan oleh hakim?", answers: ["Kepentingan hukum", "Pendapat pribadi", "Jaksa", "Pengacara"], correct: 1 }
    ],
    jaksa: [
        { question: "Apa tugas utama seorang jaksa?", answers: ["Menuntut terdakwa", "Membela terdakwa", "Memutuskan perkara", "Menjadi saksi"], correct: 1 },
        { question: "Siapa yang bertanggung jawab menghadirkan bukti dalam persidangan?", answers: ["Jaksa", "Hakim", "Pengacara", "Saksi"], correct: 1 }
    ],
    pengacara: [
        { question: "Apa tugas utama seorang pengacara?", answers: ["Membela terdakwa", "Menuntut terdakwa", "Memutuskan perkara", "Menjadi saksi"], correct: 1 },
        { question: "Siapa yang bertanggung jawab atas pembelaan terdakwa?", answers: ["Pengacara", "Jaksa", "Hakim", "Saksi"], correct: 1 }
    ],
    saksi: [
        { question: "Apa tugas utama seorang saksi?", answers: ["Memberikan kesaksian", "Memutuskan perkara", "Membela terdakwa", "Menuntut terdakwa"], correct: 1 },
        { question: "Siapa yang meminta keterangan saksi dalam pengadilan?", answers: ["Hakim", "Pengacara", "Jaksa", "Terdakwa"], correct: 1 }
    ]
};

function startSimulation() {
    document.getElementById('case-selection').style.display = 'none';
    document.getElementById('role-selection').style.display = 'block';
}

function startQuiz() {
    selectedRole = document.getElementById('roleType').value;
    document.getElementById('role-selection').style.display = 'none';
    document.getElementById('quiz-section').style.display = 'block';
    loadQuestion();
}

function loadQuestion() {
    let currentQuestion = questions[selectedRole][questionIndex];
    document.getElementById('question').textContent = currentQuestion.question;
    let answerButtons = document.querySelectorAll('#answers button');
    for (let i = 0; i < answerButtons.length; i++) {
        answerButtons[i].textContent = currentQuestion.answers[i];
    }
}

function selectAnswer(answerIndex) {
    let correctAnswer = questions[selectedRole][questionIndex].correct;
    if (answerIndex === correctAnswer) {
        score++;
    }
    questionIndex++;
    if (questionIndex < questions[selectedRole].length) {
        loadQuestion();
    } else {
        submitQuiz();
    }
}

function submitQuiz() {
    document.getElementById('quiz-section').style.display = 'none';
    document.getElementById('result-section').style.display = 'block';
    let resultText = `Anda mendapatkan skor ${score} dari ${questions[selectedRole].length}.`;
    document.getElementById('result').textContent = resultText;
}

function resetSimulation() {
    score = 0;
    questionIndex = 0;
    document.getElementById('result-section').style.display = 'none';
    document.getElementById('case-selection').style.display = 'block';
}
