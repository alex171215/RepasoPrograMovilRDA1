// Estado de la aplicación
const state = {
    currentIndex: 0,
    answers: {}, // index -> selectedOptionIndex
    bookmarks: {}, // index -> boolean
    reviewMode: false
};

// Variables de UI
const elements = {
    questionText: document.getElementById('question-text'),
    optionsContainer: document.getElementById('options-container'),
    feedbackContainer: document.getElementById('feedback-container'),
    feedbackTitle: document.getElementById('feedback-title'),
    feedbackText: document.getElementById('feedback-text'),
    feedbackIcon: document.getElementById('feedback-icon'),
    btnPrev: document.getElementById('btn-prev'),
    btnNext: document.getElementById('btn-next'),
    btnBookmark: document.getElementById('btn-bookmark'),
    btnReset: document.getElementById('btn-reset'),
    btnFilter: document.getElementById('btn-filter'),
    btnExitFilter: document.getElementById('btn-exit-filter'),
    badgeStatus: document.getElementById('badge-status'),
    progressBar: document.getElementById('progress-bar'),
    questionCounter: document.getElementById('question-counter'),
    scoreCounter: document.getElementById('score-counter'),
    filterModeBanner: document.getElementById('filter-mode-banner')
};

// Inicialización
function init() {
    lucide.createIcons();
    loadState();
    setupEventListeners();
    renderQuestion();
}

function loadState() {
    const saved = localStorage.getItem('rda1_quiz_state');
    if (saved) {
        try {
            const parsed = JSON.parse(saved);
            state.currentIndex = parsed.currentIndex || 0;
            state.answers = parsed.answers || {};
            state.bookmarks = parsed.bookmarks || {};
            state.reviewMode = parsed.reviewMode || false;
        } catch (e) {
            console.error('Error parsing localStorage state', e);
        }
    }
}

function saveState() {
    localStorage.setItem('rda1_quiz_state', JSON.stringify(state));
}

// Lógica de filtrado
function getFilteredQuestions() {
    if (!state.reviewMode) {
        return questions.map((q, i) => i);
    }
    
    // En modo repaso, solo devolvemos índices de preguntas marcadas o con respuesta incorrecta
    return questions.map((q, i) => i).filter(i => {
        const isBookmarked = state.bookmarks[i];
        const isAnsweredIncorrectly = state.answers[i] !== undefined && state.answers[i] !== questions[i].correctIndex;
        return isBookmarked || isAnsweredIncorrectly;
    });
}

function renderQuestion() {
    const validIndices = getFilteredQuestions();
    
    if (validIndices.length === 0) {
        if (state.reviewMode) {
            elements.questionText.textContent = "¡Felicidades! No tienes preguntas marcadas ni incorrectas para repasar.";
            elements.optionsContainer.innerHTML = '';
            elements.feedbackContainer.classList.add('hidden');
            elements.badgeStatus.textContent = "Completado";
            elements.badgeStatus.className = "badge correct";
            updateControls(validIndices);
            return;
        }
    }

    // Asegurarse de que el índice actual es válido dentro de los filtrados
    if (!validIndices.includes(state.currentIndex)) {
        state.currentIndex = validIndices.length > 0 ? validIndices[0] : 0;
    }

    const currentGlobalIndex = state.currentIndex;
    const question = questions[currentGlobalIndex];
    
    if (!question) return;

    // Actualizar Texto
    elements.questionText.textContent = question.question;

    // Actualizar Bookmark
    if (state.bookmarks[currentGlobalIndex]) {
        elements.btnBookmark.classList.add('bookmarked');
    } else {
        elements.btnBookmark.classList.remove('bookmarked');
    }

    // Renderizar Opciones
    elements.optionsContainer.innerHTML = '';
    const letters = ['A', 'B', 'C', 'D'];
    
    const hasAnswered = state.answers[currentGlobalIndex] !== undefined;
    const selectedAnswer = state.answers[currentGlobalIndex];

    question.options.forEach((opt, idx) => {
        const optDiv = document.createElement('div');
        optDiv.className = 'option';
        
        if (hasAnswered) {
            optDiv.classList.add('disabled');
            if (idx === question.correctIndex) {
                optDiv.classList.add('correct');
            } else if (idx === selectedAnswer) {
                optDiv.classList.add('incorrect');
            }
        } else {
            optDiv.onclick = () => handleOptionClick(idx);
        }

        optDiv.innerHTML = `
            <span class="option-letter">${letters[idx]}.</span>
            <span class="option-text">${opt}</span>
        `;
        
        elements.optionsContainer.appendChild(optDiv);
    });

    // Estado del Badge
    if (!hasAnswered) {
        elements.badgeStatus.textContent = "Sin responder";
        elements.badgeStatus.className = "badge";
        elements.feedbackContainer.classList.add('hidden');
    } else {
        const isCorrect = selectedAnswer === question.correctIndex;
        elements.badgeStatus.textContent = isCorrect ? "Correcto" : "Incorrecto";
        elements.badgeStatus.className = `badge ${isCorrect ? 'correct' : 'incorrect'}`;
        
        // Mostrar Feedback
        elements.feedbackContainer.classList.remove('hidden', 'correct', 'incorrect');
        elements.feedbackContainer.classList.add(isCorrect ? 'correct' : 'incorrect');
        elements.feedbackTitle.textContent = isCorrect ? "¡Excelente!" : "Respuesta Incorrecta";
        
        // Re-crear icono
        elements.feedbackIcon.setAttribute('data-lucide', isCorrect ? 'check-circle' : 'x-circle');
        lucide.createIcons();
        
        elements.feedbackText.textContent = question.feedback;
    }

    // UI Updates
    updateControls(validIndices);
    updateProgress();
    
    if (state.reviewMode) {
        elements.filterModeBanner.classList.remove('hidden');
        elements.btnFilter.classList.add('active');
    } else {
        elements.filterModeBanner.classList.add('hidden');
        elements.btnFilter.classList.remove('active');
    }
}

function handleOptionClick(optionIndex) {
    state.answers[state.currentIndex] = optionIndex;
    saveState();
    renderQuestion();
}

function updateControls(validIndices) {
    if (validIndices.length === 0) {
        elements.btnPrev.disabled = true;
        elements.btnNext.disabled = true;
        return;
    }

    const currentPos = validIndices.indexOf(state.currentIndex);
    
    elements.btnPrev.disabled = currentPos <= 0;
    
    if (currentPos >= validIndices.length - 1) {
        elements.btnNext.innerHTML = 'Finalizar <i data-lucide="flag"></i>';
        elements.btnNext.onclick = () => alert('¡Has llegado al final de esta lista de preguntas!');
    } else {
        elements.btnNext.innerHTML = 'Siguiente <i data-lucide="arrow-right"></i>';
        elements.btnNext.onclick = nextQuestion;
    }
    
    lucide.createIcons();
}

function nextQuestion() {
    const validIndices = getFilteredQuestions();
    const currentPos = validIndices.indexOf(state.currentIndex);
    if (currentPos < validIndices.length - 1) {
        state.currentIndex = validIndices[currentPos + 1];
        saveState();
        renderQuestion();
    }
}

function prevQuestion() {
    const validIndices = getFilteredQuestions();
    const currentPos = validIndices.indexOf(state.currentIndex);
    if (currentPos > 0) {
        state.currentIndex = validIndices[currentPos - 1];
        saveState();
        renderQuestion();
    }
}

function updateProgress() {
    const total = questions.length;
    let correctCount = 0;
    let answeredCount = 0;
    
    Object.keys(state.answers).forEach(key => {
        answeredCount++;
        if (state.answers[key] === questions[key].correctIndex) {
            correctCount++;
        }
    });

    const progressPercent = (answeredCount / total) * 100;
    elements.progressBar.style.width = `${progressPercent}%`;
    
    const validIndices = getFilteredQuestions();
    const displayTotal = state.reviewMode ? validIndices.length : total;
    const currentPos = validIndices.indexOf(state.currentIndex) + 1;
    
    elements.questionCounter.textContent = `Pregunta ${currentPos > 0 ? currentPos : 0} de ${displayTotal}`;
    elements.scoreCounter.textContent = `Puntuación: ${correctCount} / ${total}`;
}

function toggleBookmark() {
    if (state.bookmarks[state.currentIndex]) {
        delete state.bookmarks[state.currentIndex];
    } else {
        state.bookmarks[state.currentIndex] = true;
    }
    saveState();
    renderQuestion();
}

function toggleReviewMode() {
    state.reviewMode = !state.reviewMode;
    // Reset index to beginning of filtered list
    const valid = getFilteredQuestions();
    if (valid.length > 0) {
        state.currentIndex = valid[0];
    }
    saveState();
    renderQuestion();
}

function resetProgress() {
    if (confirm('¿Estás seguro de que quieres borrar todo tu progreso? Esto no se puede deshacer.')) {
        state.currentIndex = 0;
        state.answers = {};
        state.bookmarks = {};
        state.reviewMode = false;
        saveState();
        renderQuestion();
    }
}

function setupEventListeners() {
    elements.btnPrev.addEventListener('click', prevQuestion);
    elements.btnNext.addEventListener('click', nextQuestion);
    elements.btnBookmark.addEventListener('click', toggleBookmark);
    elements.btnReset.addEventListener('click', resetProgress);
    elements.btnFilter.addEventListener('click', toggleReviewMode);
    elements.btnExitFilter.addEventListener('click', () => {
        state.reviewMode = false;
        saveState();
        renderQuestion();
    });
}

// Iniciar app
document.addEventListener('DOMContentLoaded', init);
