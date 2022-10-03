import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

if (localStorage.getItem('videoplayer-current-time')) {
  console.log(
    `Начальный прогресс воспроизведения ${localStorage.getItem(
      'videoplayer-current-time'
    )} секунд`
  );
  player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
} else {
  console.log(`Начальный прогресс воспроизведения отсутствует`);
}

const timeChecker = event => {
  localStorage.setItem('videoplayer-current-time', event.seconds);
  console.log(
    `Фиксирую текущий прогресс воспроизведения: ${event.seconds} секунд`
  );
  if (event.seconds === event.duration) {
    localStorage.removeItem('videoplayer-current-time');
    console.log(`Воспроизведение закончено, сбрасываю счётчик прогресса`);
  }
};

player.on('timeupdate', throttle(timeChecker, 1000));
