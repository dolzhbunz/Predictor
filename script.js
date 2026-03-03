// ========================================
// ДАННЫЕ: ОТВЕТЫ ПО КАТЕГОРИЯМ
// ========================================

const answers = {
    love: [
        "О да, она/он думает о тебе... во сне. 😏",
        "Шансы 50/50. Как найти монетку в кармане.",
        "Любовь рядом! За углом. В смысле, в соседнем городе.",
        "Он/а любит тебя. Пока ты не читаешь это.",
        "Забудь. Судьба — это ты сам.",
        "У тебя есть шанс! Небольшой. Очень небольшой.",
        "Сердце знает ответ. Но оно молчит, потому что занято.",
        "Ответ: да. Вопрос: какой именно вопрос ты задал?",
        "Любовь придет... когда перестанешь искать. Или завтра. Неважно.",
        "Он/а тоже смотрит на тебя! Но это может быть косоглазый прохожий.",
        "Сейчас не время. Но когда оно было?",
        "Твоя вторая половинка где-то... ждет, пока ты станешь лучше.",
        "Отношения как интернет: то есть, то нет.",
        "Спроси ещё раз. Ночью. После полуночи.",
        "Звёзды говорят: повезёт тому, кто не верит в гороскопы.",
        "Да, но сначала научись готовить.",
        "Нет. Но не расстраивайся — это же сарказм.",
        "Ты уже знаешь ответ. Просто не хочешь его слышать.",
        "Любовь — как прыщ: появляется неожиданно и в неудобном месте.",
        "Скоро. Если не завтра, то через год. Точно."
    ],
    work: [
        "Работа найдёт тебя. Особенно если ты спрячешься.",
        "Повышение? Скоро. В смысле, скоро спросят, сколько ещё ты будешь работать.",
        "Ты уволен. Шучу. Надеюсь.",
        "Карьерный рост — как Золушка: сначала надо много работать, а потом... бал.",
        "Новая работа? Попробуй сначала найти старые носки.",
        "Начальник думает о тебе... как об инструменте. В хорошем смысле.",
        "Успех неизбежен. Но медленнее, чем хотелось бы.",
        "Твой проект взлетит. Как и твоя зарплата — вверх!",
        "Работа — это когда ты делаешь что-то, за что тебе платят. Наслаждайся.",
        "Скоро будет много работы. И денег. Где-то там.",
        "Ты слишком умён для этой работы. Но недостаточно умён, чтобы это признать.",
        "Босс оценит твой вклад. Когда-нибудь. В другой компании.",
        "Ты на правильном пути. Просто этот путь — объездной.",
        "Успех — это 10% везения и 90% кофе.",
        "Скоро станет легче. Или труднее. Без разницы.",
        "Твоя работа — твой вклад в мировое зло. Или добро. Зависит от точки зрения.",
        "Дождись понедельника. Или следующего. Или следующего.",
        "Ты молодец. Но никто не узнает. Кроме меня.",
        "Карьера — это марафон. Только без финиша.",
        "Скоро будет перерыв. Надеюсь."
    ],
    money: [
        "Деньги — это бумага. Но очень важная бумага.",
        "Твой кошелёк пустеет. Но не путай с мудростью — она растёт!",
        "Богатство рядом! За углом. В банке. Который лопнул.",
        "Финансовый успех? Скоро. Если перестанешь покупать кофе каждый день.",
        "Деньги придут. Когда перестанешь их считать.",
        "Ты богат! В душе. Это ничего, но приятно.",
        "Инвестируй в себя. Остальное — в мусор.",
        "Скоро будет больше денег. Или меньше долгов. Одно из двух.",
        "Богатство — это когда ты можешь купить время. Или хотя бы кофе.",
        "Деньги не главное. Но без них главное — сложно.",
        "Твой финансовый план: работать, экономить, мечтать.",
        "Богатство придёт. Но может заблудиться.",
        "Трать с умом. Или без ума. Результат одинаковый.",
        "Скоро заработаешь. На новых кроссовках.",
        "Финансы — это как пиво: надо контролировать, чтобы не переборщить.",
        "Ты богат ресурсов. Не денег, но ресурсов!",
        "Деньги — это средство. Или цель. Зависит от веры.",
        "Богатство неизбежно. Но сначала — налоги.",
        "Твой банковский счёт плачет. Но это слёзы радости!",
        "Скоро повезёт. Если повезёт."
    ],
    health: [
        "Здоровье — это когда ничего не болит. И ты замечаешь это только когда заболит.",
        "Тебе нужен отдых. Или работа. Без разницы.",
        "Здоров как бык! Только бык не ест на ночь.",
        "Скоро поправишься. Если перестанешь есть на ночь.",
        "Твоё тело говорит тебе... заткнись и выспись.",
        "Здоровье в порядке! Но это неточно.",
        "Пей воду. Ешь овощи. Живи долго. Или не очень. На удачу.",
        "Ты молод! Биологически. Или психологически. Неважно.",
        "Скоро будешь здоров. Если повезёт.",
        "Твоё сердце стучит. Значит, пока живёшь.",
        "Здоровье — это баланс. Между работой и отдыхом. Или пиццей и салатом.",
        "Болезни — это когда тело просит отпуска.",
        "Ты в отличной форме! Форме шара. Для пинг-понга.",
        "Иммунитет укрепляется. После каждой болезни.",
        "Здоровье — это когда ты не думаешь о нём. Начни уже.",
        "Скоро вылечишься. Или привыкнешь. Одно из двух.",
        "Тело — это храм. Иногда заброшенный. Пора убрать.",
        "Здоров как космонавт! Только без тренировок.",
        "Пить витамины — это как верить в Деда Мороза. Но полезно.",
        "Скоро будешь в форме. Если перестанешь есть форму."
    ]
};

// ========================================
// МОНЕТКА СУДЬБЫ
// ========================================

const coinResults = [
    "Да, но не сегодня",
    "Нет, и не надейся",
    "Может быть, если повезёт",
    "Спроси ещё раз — я занят",
    "Однозначно... нет",
    "Шансы есть, но они мизерные",
    "Да! (Подожди, это ошибка)",
    "Нет, но ты молодец что спросил",
    "Может быть... в параллельной вселенной",
    "Ответ — 42. Остальное неважно"
];

// ========================================
// ГЕНЕРАТОР ОТМАЗОК
// ========================================

const excuses = [
    "Меня похитили инопланетяне и провели эксперимент над моим чувством времени.",
    "Проснулся в 2077 году — временная аномалия, не спрашивай.",
    "Мой кот решил, что я его личная подушка и не отпускал.",
    "Пытался перевести бабушку через дорогу, но она передумала и мы пошли за мороженым.",
    "Застрял в лифте с человеком, который рассказывал о своих внуках. Выбрал опоздание.",
    "Опоздал, потому что искал носки, а нашёл смысл жизни. Не успел вернуть.",
    "Мой будильник — мазохист. Он меня ненавидит.",
    "Проспал из-за того, что смотрел сериал про людей, которые не спят. Ирония.",
    "Дорогу перебегала стая голубей. Пришлось ждать, пока они закончат совещание.",
    "Трамвай сломался, а я решил, что это знак судьбы. Оказалось, просто трамвай.",
    "Пытался найти правильный маршрут, но Google увел меня в лес.",
    "Проснулся и решил, что сегодня пятница. Мораль была важнее логики.",
    "Мой левый носок объявил забастовку. Пришлось урегулировать конфликт.",
    "Ждал, пока загрузится компьютер. Он и не думал.",
    "В метро был замечен единорог. Остановился, чтобы сделать селфи.",
    "Застрял в очереди за кофе. Очередь была метафорической.",
    "Пытался понять, какой ключ от какой двери. До сих пор не понял.",
    "Проспал, потому что ночью приснился сон о том, что я сплю.",
    "Думал, что сегодня воскресенье. Групповая галлюцинация.",
    "Мой питомец решил, что утро — идеальное время для экзистенциального кризиса."
];

// ========================================
// ЗЛОВ ШАР 8
// ========================================

const evilBallAnswers = [
    "Нет. И не смей спрашивать почему.",
    "Спроси маму. Она всё знает.",
    "Я устал. Спроси в другой раз.",
    "Определённо нет. Даже не думай.",
    "Может быть. А может и нет. Да.",
    "Ты серьёзно? Ладно, пусть будет да.",
    "Шансы: 0.0001%. Не благодари.",
    "Мой ответ — нет. Но ты всё равно попробуешь.",
    "Судьба говорит: забей.",
    "Спроси ещё раз, когда повзрослеешь.",
    "Да! Хотя нет. ладно, пусть будет да.",
    "Я в отпуске. Позвони позже.",
    "Нет, нет и ещё раз нет. Понял?",
    "Скорее всего. Но это не точно.",
    "Ты уверен, что хочешь знать ответ? Ну ладно: нет.",
    "Звёзды говорят: забудь.",
    "Это вопрос, на который я не буду отвечать.",
    "Смейся, но ответ — может быть.",
    "Я думаю — нет. Ты думай что хочешь.",
    "Спроси у зеркала. Оно честнее."
];

// ========================================
// ТЕСТ НА АДЕКВАТНОСТЬ
// ========================================

const quizResult = [
    "Ты нормальный! Ну, как бывает...",
    "Результат: нормальность под вопросом. Но это не точно.",
    "Ты прошёл! (Но куда — непонятно)",
    "Тест провален. Но ты молодец, что попробовал.",
    "Твоя адекватность: 73% — больше, чем у среднестатистического человека."
];

// ========================================
// LOCALSTORAGE
// ========================================

function loadStats() {
    const stats = localStorage.getItem('sarcasticPredictorStats');
    return stats ? JSON.parse(stats) : {
        questions: 0,
        coinFlips: 0,
        excuses: 0,
        quizTaken: 0,
        ballShakes: 0
    };
}

function saveStats(stats) {
    localStorage.setItem('sarcasticPredictorStats', JSON.stringify(stats));
}

function updateStatsDisplay() {
    const stats = loadStats();
    const total = stats.questions + stats.coinFlips + stats.excuses + stats.quizTaken + stats.ballShakes;
    document.getElementById('statsDisplay').textContent = 
        `Q:${stats.questions} | C:${stats.coinFlips} | E:${stats.excuses} | T:${stats.quizTaken} | B:${stats.ballShakes} | TOTAL:${total}`;
}

// ========================================
// НАВИГАЦИЯ
// ========================================

const navBtns = document.querySelectorAll('.nav-btn');
const sections = document.querySelectorAll('.section');

navBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const sectionId = btn.dataset.section;
        
        navBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        sections.forEach(s => s.classList.remove('active'));
        document.getElementById(sectionId).classList.add('active');
    });
});

// ========================================
// ПРЕДСКАЗАТЕЛЬ
// ========================================

let currentCategory = 'love';
let isAnimating = false;

const categoryBtns = document.querySelectorAll('.category-btn');
const magicBall = document.getElementById('magicBall');
const answerText = document.getElementById('answerText');
const questionCounter = document.getElementById('questionCounter');

categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        categoryBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentCategory = btn.dataset.category;
    });
});

function getRandomAnswer() {
    const categoryAnswers = answers[currentCategory];
    const randomIndex = Math.floor(Math.random() * categoryAnswers.length);
    return categoryAnswers[randomIndex];
}

function createParticles(x, y) {
    const colors = ['#00ff41', '#00cc33', '#ffffff', '#00ffff'];
    const particleCount = 20;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const size = Math.random() * 8 + 4;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const angle = (Math.PI * 2 * i) / particleCount + Math.random() * 0.5;
        const velocity = Math.random() * 100 + 50;
        const tx = Math.cos(angle) * velocity;
        const ty = Math.sin(angle) * velocity;

        particle.style.cssText = `
            width: ${size}px;
            height: ${size}px;
            background: ${color};
            left: ${x}px;
            top: ${y}px;
            box-shadow: 0 0 ${size}px ${color};
            --tx: ${tx}px;
            --ty: ${ty}px;
        `;

        document.body.appendChild(particle);
        setTimeout(() => particle.remove(), 1500);
    }
}

magicBall.addEventListener('click', () => {
    if (isAnimating) return;
    isAnimating = true;

    const stats = loadStats();
    stats.questions++;
    saveStats(stats);
    updateStatsDisplay();

    questionCounter.textContent = stats.questions;
    questionCounter.style.transform = 'scale(1.3)';
    setTimeout(() => questionCounter.style.transform = 'scale(1)', 200);

    const rect = magicBall.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    answerText.classList.remove('show');
    magicBall.classList.add('shaking');

    setTimeout(() => {
        magicBall.classList.remove('shaking');
        
        answerText.textContent = '> ' + getRandomAnswer();
        answerText.classList.add('show');
        
        createParticles(centerX, centerY);
        
        isAnimating = false;
    }, 1000);
});

// ========================================
// МОНЕТКА СУДЬБЫ
// ========================================

const coin = document.getElementById('coin');
const flipCoinBtn = document.getElementById('flipCoin');
const coinResult = document.getElementById('coinResult');

flipCoinBtn.addEventListener('click', () => {
    if (coin.classList.contains('flipping')) return;
    
    const stats = loadStats();
    stats.coinFlips++;
    saveStats(stats);
    updateStatsDisplay();

    coin.classList.add('flipping');
    coinResult.classList.remove('show');

    setTimeout(() => {
        const result = coinResults[Math.floor(Math.random() * coinResults.length)];
        coinResult.textContent = '> ' + result;
        coinResult.classList.add('show');
        coin.classList.remove('flipping');
    }, 1500);
});

// ========================================
// ГЕНЕРАТОР ОТМАЗОК
// ========================================

const excuseInput = document.getElementById('excuseInput');
const generateExcuseBtn = document.getElementById('generateExcuse');
const excuseResult = document.getElementById('excuseResult');

generateExcuseBtn.addEventListener('click', () => {
    if (!excuseInput.value.trim()) {
        excuseResult.textContent = '> Сначала введи, куда опоздал!';
        excuseResult.classList.add('show');
        return;
    }

    const stats = loadStats();
    stats.excuses++;
    saveStats(stats);
    updateStatsDisplay();

    const excuse = excuses[Math.floor(Math.random() * excuses.length)];
    excuseResult.textContent = '> ' + excuse;
    excuseResult.classList.add('show');
    excuseInput.value = '';
});

// ========================================
// ТЕСТ НА АДЕКВАТНОСТЬ
// ========================================

const questions = document.querySelectorAll('.question');
const quizResultEl = document.getElementById('quizResult');
const resultText = document.querySelector('.result-text');
const restartTestBtn = document.getElementById('restartTest');
let currentQuestion = 0;

document.querySelectorAll('.answer-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        questions[currentQuestion].classList.add('hidden');
        currentQuestion++;

        if (currentQuestion < questions.length) {
            questions[currentQuestion].classList.remove('hidden');
        } else {
            const stats = loadStats();
            stats.quizTaken++;
            saveStats(stats);
            updateStatsDisplay();

            const result = quizResult[Math.floor(Math.random() * quizResult.length)];
            resultText.textContent = '> ' + result;
            quizResultEl.classList.remove('hidden');
        }
    });
});

restartTestBtn.addEventListener('click', () => {
    currentQuestion = 0;
    questions.forEach(q => q.classList.add('hidden'));
    questions[0].classList.remove('hidden');
    quizResultEl.classList.add('hidden');
});

// ========================================
// ЗЛОЙ ШАР 8
// ========================================

const ballInput = document.getElementById('ballInput');
const shakeBallBtn = document.getElementById('shakeBall');
const ballResult = document.getElementById('ballResult');

shakeBallBtn.addEventListener('click', () => {
    if (!ballInput.value.trim()) {
        ballResult.textContent = '> Задай вопрос, трусишка!';
        ballResult.classList.add('show');
        return;
    }

    const stats = loadStats();
    stats.ballShakes++;
    saveStats(stats);
    updateStatsDisplay();

    const answer = evilBallAnswers[Math.floor(Math.random() * evilBallAnswers.length)];
    ballResult.textContent = '> ' + answer;
    ballResult.classList.add('show');
    ballInput.value = '';
});

// ========================================
// ИНИЦИАЛИЗАЦИЯ
// ========================================

const initialStats = loadStats();
questionCounter.textContent = initialStats.questions;
updateStatsDisplay();

answerText.classList.add('show');
coinResult.classList.add('show');
excuseResult.classList.add('show');
ballResult.classList.add('show');
