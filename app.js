// ================================================================
// APP STATE & CONFIGURATION
// ================================================================
const BANKS = {
    'all':     { name: 'Banco Completo (Ejemplo)', questions: () => questions },
    'week1':   { name: 'Semana 1 - Ecosistema Móvil', questions: () => questionsWeek1 },
    'week2':   { name: 'Semana 2 - Kotlin Fundamentos', questions: () => questionsWeek2 },
    'week3':   { name: 'Semana 3 - Kotlin Avanzado', questions: () => questionsWeek3 },
    'allNew':  { name: 'Todo el Contenido', questions: () => [...questions, ...questionsWeek1, ...questionsWeek2, ...questionsWeek3] }
};

// Estado de la aplicación
let activeBank = null;
let activeQuestions = [];

const state = {
    currentIndex: 0,
    answers: {},   // "bankName_index" -> selectedOptionIndex
    bookmarks: {}, // "bankName_index" -> boolean
    reviewMode: false,
    currentBank: null
};

// ================================================================
// DOM Elements
// ================================================================
const screenSelection = document.getElementById('screen-selection');
const screenQuiz = document.getElementById('screen-quiz');

const elements = {
    appTitle: document.getElementById('app-title'),
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
    btnHome: document.getElementById('btn-home'),
    badgeStatus: document.getElementById('badge-status'),
    progressBar: document.getElementById('progress-bar'),
    questionCounter: document.getElementById('question-counter'),
    scoreCounter: document.getElementById('score-counter'),
    filterModeBanner: document.getElementById('filter-mode-banner')
};

// ================================================================
// BANK KEY HELPERS (para separar el progreso por banco)
// ================================================================
function makeKey(index) {
    return `${state.currentBank}_${index}`;
}

// ================================================================
// INITIALIZATION
// ================================================================
function init() {
    lucide.createIcons();
    loadState();
    setupEventListeners();

    // Si había un banco activo, volver al quiz directamente
    if (state.currentBank && BANKS[state.currentBank]) {
        startQuiz(state.currentBank, false);
    }
}

function loadState() {
    const saved = localStorage.getItem('rda1_quiz_state_v2');
    if (saved) {
        try {
            const parsed = JSON.parse(saved);
            state.currentIndex = parsed.currentIndex || 0;
            state.answers = parsed.answers || {};
            state.bookmarks = parsed.bookmarks || {};
            state.reviewMode = parsed.reviewMode || false;
            state.currentBank = parsed.currentBank || null;
        } catch (e) {
            console.error('Error parsing state', e);
        }
    }
}

function saveState() {
    localStorage.setItem('rda1_quiz_state_v2', JSON.stringify(state));
}

// ================================================================
// BANK SELECTION
// ================================================================
function selectBank(bankName) {
    startQuiz(bankName, true);
}

function startQuiz(bankName, reset) {
    if (!BANKS[bankName]) return;

    state.currentBank = bankName;
    activeQuestions = BANKS[bankName].questions();

    if (reset) {
        state.currentIndex = 0;
        state.reviewMode = false;
    }

    // Asegurarse de que el índice es válido
    if (state.currentIndex >= activeQuestions.length) {
        state.currentIndex = 0;
    }

    elements.appTitle.textContent = BANKS[bankName].name;

    screenSelection.classList.add('hidden');
    screenQuiz.classList.remove('hidden');

    saveState();
    renderQuestion();
}

function goHome() {
    screenQuiz.classList.add('hidden');
    screenSelection.classList.remove('hidden');
    // Reset feedback container
    if (elements.feedbackContainer) {
        elements.feedbackContainer.classList.add('hidden');
    }
    lucide.createIcons();
}

// ================================================================
// FILTER / REVIEW MODE
// ================================================================
function getFilteredIndices() {
    if (!state.reviewMode) {
        return activeQuestions.map((_, i) => i);
    }

    return activeQuestions.map((_, i) => i).filter(i => {
        const key = makeKey(i);
        const isBookmarked = state.bookmarks[key];
        const isAnsweredIncorrectly = state.answers[key] !== undefined &&
            state.answers[key] !== activeQuestions[i].correctIndex;
        return isBookmarked || isAnsweredIncorrectly;
    });
}

// ================================================================
// RENDERING
// ================================================================
function renderQuestion() {
    const validIndices = getFilteredIndices();

    if (validIndices.length === 0) {
        if (state.reviewMode) {
            elements.questionText.textContent = "¡Felicidades! No tienes preguntas marcadas ni incorrectas para repasar en este banco.";
            elements.optionsContainer.innerHTML = '';
            elements.feedbackContainer.classList.add('hidden');
            elements.badgeStatus.textContent = "Sin pendientes";
            elements.badgeStatus.className = "badge correct";
            updateControls(validIndices);
            updateProgress();
            return;
        }
    }

    // NO forzar state.currentIndex aquí. Esto permite que si el usuario responde bien 
    // o desmarca la pregunta en modo repaso, siga viéndola hasta que navegue manualmente.

    const globalIndex = state.currentIndex;
    const question = activeQuestions[globalIndex];
    if (!question) return;

    const key = makeKey(globalIndex);

    // Texto de la pregunta
    elements.questionText.textContent = question.question;

    // Estado del Bookmark
    const isBookmarked = !!state.bookmarks[key];
    elements.btnBookmark.classList.toggle('bookmarked', isBookmarked);

    // Renderizar opciones
    elements.optionsContainer.innerHTML = '';
    const letters = ['A', 'B', 'C', 'D'];
    const hasAnswered = state.answers[key] !== undefined;
    const selectedAnswer = state.answers[key];

    question.options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = 'option';

        if (hasAnswered) {
            btn.classList.add('disabled');
            if (idx === question.correctIndex) btn.classList.add('correct');
            else if (idx === selectedAnswer) btn.classList.add('incorrect');
        } else {
            btn.addEventListener('click', () => handleOptionClick(idx));
        }

        btn.innerHTML = `<span class="option-letter">${letters[idx]}.</span><span class="option-text">${opt}</span>`;
        elements.optionsContainer.appendChild(btn);
    });

    // Badge de estado
    if (!hasAnswered) {
        elements.badgeStatus.textContent = "Sin responder";
        elements.badgeStatus.className = "badge";
        elements.feedbackContainer.classList.add('hidden');
    } else {
        const isCorrect = selectedAnswer === question.correctIndex;
        elements.badgeStatus.textContent = isCorrect ? "✓ Correcto" : "✗ Incorrecto";
        elements.badgeStatus.className = `badge ${isCorrect ? 'correct' : 'incorrect'}`;

        elements.feedbackContainer.classList.remove('hidden', 'correct', 'incorrect');
        elements.feedbackContainer.classList.add(isCorrect ? 'correct' : 'incorrect');
        elements.feedbackTitle.textContent = isCorrect ? "¡Excelente!" : "Respuesta Incorrecta";
        elements.feedbackIcon.setAttribute('data-lucide', isCorrect ? 'check-circle' : 'x-circle');
        elements.feedbackText.textContent = question.feedback;
        lucide.createIcons();
    }

    // Banner de modo repaso
    const showBanner = state.reviewMode;
    elements.filterModeBanner.classList.toggle('hidden', !showBanner);
    elements.btnFilter.classList.toggle('active', state.reviewMode);

    updateControls(validIndices);
    updateProgress();
}

// ================================================================
// USER ACTIONS
// ================================================================
function handleOptionClick(optionIndex) {
    const key = makeKey(state.currentIndex);
    state.answers[key] = optionIndex;
    saveState();
    renderQuestion();
}

function nextQuestion() {
    const validIndices = getFilteredIndices();
    let nextIndex = -1;
    for (let idx of validIndices) {
        if (idx > state.currentIndex) {
            nextIndex = idx;
            break;
        }
    }

    if (nextIndex !== -1) {
        state.currentIndex = nextIndex;
        saveState();
        renderQuestion();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
        alert('🎉 ¡Has llegado al final de este banco de preguntas!\nRevisa tu puntuación en el contador superior.');
    }
}

function prevQuestion() {
    const validIndices = getFilteredIndices();
    let prevIndex = -1;
    for (let i = validIndices.length - 1; i >= 0; i--) {
        if (validIndices[i] < state.currentIndex) {
            prevIndex = validIndices[i];
            break;
        }
    }

    if (prevIndex !== -1) {
        state.currentIndex = prevIndex;
        saveState();
        renderQuestion();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

function toggleBookmark() {
    const key = makeKey(state.currentIndex);
    if (state.bookmarks[key]) {
        delete state.bookmarks[key];
    } else {
        state.bookmarks[key] = true;
    }
    saveState();
    renderQuestion();
}

function toggleReviewMode() {
    state.reviewMode = !state.reviewMode;
    const valid = getFilteredIndices();
    if (state.reviewMode && valid.length > 0 && !valid.includes(state.currentIndex)) {
        state.currentIndex = valid[0];
    }
    saveState();
    renderQuestion();
}

function resetProgress() {
    if (confirm(`¿Seguro que quieres reiniciar el progreso del banco "${BANKS[state.currentBank].name}"? Esto eliminará respuestas y marcadores de este banco.`)) {
        // Borrar solo las claves de este banco
        const prefix = `${state.currentBank}_`;
        Object.keys(state.answers).forEach(k => { if (k.startsWith(prefix)) delete state.answers[k]; });
        Object.keys(state.bookmarks).forEach(k => { if (k.startsWith(prefix)) delete state.bookmarks[k]; });
        state.currentIndex = 0;
        state.reviewMode = false;
        saveState();
        renderQuestion();
    }
}

// ================================================================
// UI UPDATES
// ================================================================
function updateControls(validIndices) {
    if (validIndices.length === 0) {
        elements.btnPrev.disabled = true;
        elements.btnNext.disabled = true;
        return;
    }

    const hasPrev = validIndices.some(idx => idx < state.currentIndex);
    const hasNext = validIndices.some(idx => idx > state.currentIndex);

    elements.btnPrev.disabled = !hasPrev;

    elements.btnNext.innerHTML = !hasNext
        ? 'Finalizar <i data-lucide="flag"></i>'
        : 'Siguiente <i data-lucide="arrow-right"></i>';
    elements.btnNext.disabled = false;

    lucide.createIcons();
}

function updateProgress() {
    const total = activeQuestions.length;
    const prefix = `${state.currentBank}_`;

    let correctCount = 0;
    let answeredCount = 0;

    Object.keys(state.answers).forEach(key => {
        if (!key.startsWith(prefix)) return;
        const idx = parseInt(key.replace(prefix, ''));
        if (isNaN(idx) || idx >= total) return;
        answeredCount++;
        if (state.answers[key] === activeQuestions[idx].correctIndex) {
            correctCount++;
        }
    });

    const progressPercent = total > 0 ? (answeredCount / total) * 100 : 0;
    elements.progressBar.style.width = `${progressPercent}%`;

    const validIndices = getFilteredIndices();
    const displayTotal = state.reviewMode ? validIndices.length : total;
    let currentPos = validIndices.indexOf(state.currentIndex) + 1;
    if (currentPos === 0 && state.reviewMode) {
        // Si la pregunta actual ya no está en validIndices, aproximamos su posición
        currentPos = validIndices.filter(idx => idx < state.currentIndex).length + 1;
    }
    const displayPos = currentPos;

    elements.questionCounter.textContent = `Pregunta ${displayPos} de ${displayTotal}`;
    elements.scoreCounter.textContent = `✓ ${correctCount} / ${total}`;
}

// ================================================================
// EVENT LISTENERS
// ================================================================
function setupEventListeners() {
    elements.btnPrev.addEventListener('click', prevQuestion);
    elements.btnNext.addEventListener('click', nextQuestion);
    elements.btnBookmark.addEventListener('click', toggleBookmark);
    elements.btnReset.addEventListener('click', resetProgress);
    elements.btnFilter.addEventListener('click', toggleReviewMode);
    elements.btnHome.addEventListener('click', goHome);
    elements.btnExitFilter.addEventListener('click', () => {
        state.reviewMode = false;
        saveState();
        renderQuestion();
    });
}

// ================================================================
// START
// ================================================================
document.addEventListener('DOMContentLoaded', init);
