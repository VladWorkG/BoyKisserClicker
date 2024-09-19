const Telegram = document.getElementById('TelegramChannel');
Telegram.addEventListener('click', function () {
  window.location.href = "https://t.me/BoyKisserClicker";
});
const Boosty = document.getElementById('Boosty');
Boosty.addEventListener('click', function () {
  window.location.href = "https://boosty.to/boykisser_clicker";
});


var TotalKiss = 0;
var KissPerClick = 1;
var SoundForKissTimer = 0;
var KissPerSecond = 1;


let timerDuration = 15; // Длительность таймера в секундах
let timeLeft = timerDuration;
let timer;

// Функция, которая будет выполнена после истечения таймера
function onTimerEnd() {
  document.getElementById('BoyFace').src = 'sprite/CRY.gif';
}

// Запуск таймера
function startTimer() {
    clearInterval(timer); // Очищаем предыдущий таймер, если есть
    timeLeft = timerDuration;

    timer = setInterval(() => {
        timeLeft--;

        if (timeLeft <= 0) {
            clearInterval(timer);
            onTimerEnd();
        }
    }, 1000);
}

// Обработчик клика для восполнения таймера
document.getElementById('BoyFace').addEventListener('click', () => {
    startTimer();
});

// Запуск таймера при загрузке страницы
startTimer();


const SUM = document.getElementById('SUM'); // Сумма поцелуев
const KissPerClickStats = document.getElementById('KissPerClickStats'); // Сумма поцелуев за клик
const KissPerSecondStats = document.getElementById('KissPerSecondStats');
KissPerClickStats.textContent = KissPerClick;
KissPerSecondStats.textContent = KissPerSecond;



document.getElementById("closeBtn").addEventListener("click", function() {
  var modal = document.getElementById("modal");
  if (modal.classList.contains("hidden")) {
      modal.classList.remove("hidden");
  } else {
      modal.classList.add("hidden");
  }
  KissPerClickStats.textContent = KissPerClick;
});
document.getElementById("openBth").addEventListener("click", function() {
  var modal = document.getElementById("modal");
  if (modal.classList.contains("hidden")) {
      modal.classList.remove("hidden");
  } else {
      modal.classList.add("hidden");
  }

});









const KissButt = document.getElementById('BoyFace'); //кнопка для поцелуев
const overlayImage = document.getElementById('overlayImage'); // PNG поверх

KissButt.addEventListener('click', function(event) { // Добавляем параметр event
  const overlayImage = document.getElementById('overlayImage');
        // Устанавливаем его координаты в соответствии с позицией клика
        overlayImage.style.left = `${event.pageX - 50}px`;
        overlayImage.style.top = (event.pageY - overlayImage.offsetHeight / 1) + 'px';
        
        // Отображаем изображение
        overlayImage.style.display = 'block';
        
        // Убираем изображение через 1 секунду (по желанию)
        setTimeout(function() {
            overlayImage.style.display = 'none';
        }, 1000);
});


KissButt.addEventListener('click', function () {
  if (SoundForKissTimer == 0) {
    audioKiss1.play()
    audioKiss1.volume = 0.4;
    SoundForKissTimer = 1;
  } else if (SoundForKissTimer == 1) {
    audioKiss2.play()
    audioKiss2.volume = 0.4;
    SoundForKissTimer = 2;
  } else {
    audioKiss3.play()
    audioKiss3.volume = 0.4;
    SoundForKissTimer = 0;
  }

  document.getElementById('BoyFace').src = 'sprite/KISSED.png'; // Слушатель поцелуев
  setTimeout(function () {
    document.getElementById('BoyFace').src = 'sprite/NOTKISS.png';
  }, 200);
  TotalKiss = TotalKiss + KissPerClick;
  SUM.textContent = Math.round(TotalKiss * 10) / 10
});



// Функция для добавления поцелуев в секунду
function addKissesPerSecond() {
  TotalKiss += KissPerSecond; // Увеличиваем ровно на значение KPS
  SUM.textContent = Math.round(TotalKiss * 10) / 10;
}

// Проверяем, что `setInterval` вызван один раз
if (!window.kissInterval) {
  window.kissInterval = setInterval(addKissesPerSecond, 1000); // Добавляем поцелуи каждую секунду
}


var TVStatus = false;
const TV = document.getElementById('TV');
TV.addEventListener('click', function () {
  if (TVStatus == false) {
    document.getElementById('TV').src = 'sprite/TV on.gif';
    TVStatus = true;
    ChipiChipi.play(); // Начинаем воспроизведение аудио
    ChipiChipi.loop = true; // Включаем зацикливание
    ChipiChipi.volume = 0.1; // Устанавливаем громкость на 50%
    document.getElementById('BoyFace').src = 'sprite/DANCE.gif';

  } else {
    document.getElementById('TV').src = 'sprite/TV off.png';
    TVStatus = false;
    ChipiChipi.pause(); // Приостанавливаем воспроизведение аудио
    ChipiChipi.currentTime = 0; // Возвращаем воспроизведение к началу
    document.getElementById('BoyFace').src = 'sprite/NOTKISS.png';
  } 
});


const ChipiChipi = new Audio();
ChipiChipi.src = "audio/ChipiChipi.mp3";
const audioKiss1 = new Audio();
audioKiss1.src = "audio/Kiss.1.mp3";
const audioKiss2 = new Audio();
audioKiss2.src = "audio/Kiss.2.mp3";
const audioKiss3 = new Audio();
audioKiss3.src = "audio/Kiss.3.mp3";

