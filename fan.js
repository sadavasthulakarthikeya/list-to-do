const fan = document.querySelector('.fan');
const onoffBtn = document.getElementById('onoff');
const speedBtns = [
  document.getElementById('speed1'),
  document.getElementById('speed2'),
  document.getElementById('speed3'),
];

let isOn = false;
let speed = 1; // 1=slow, 2=medium, 3=fast
let animFrame;
let angle = 0;
const SPEED_DEGREES = [3, 9, 18]; // degrees per frame for 1,2,3

function setSpeed(s) {
  speed = s;
  speedBtns.forEach((btn, i) => {
    if (i === speed - 1) btn.classList.add('active');
    else btn.classList.remove('active');
  });
}

function animateFan() {
  if (isOn) {
    angle = (angle + SPEED_DEGREES[speed - 1]) % 360;
    fan.style.transform = `rotate(${angle}deg)`;
    animFrame = requestAnimationFrame(animateFan);
  }
}

function startFan() {
  if (!isOn) {
    isOn = true;
    onoffBtn.textContent = 'OFF';
    onoffBtn.classList.add('active');
    animateFan();
  }
}

function stopFan() {
  isOn = false;
  onoffBtn.textContent = 'ON';
  onoffBtn.classList.remove('active');
  cancelAnimationFrame(animFrame);
}

onoffBtn.addEventListener('click', () => {
  if (isOn) {
    stopFan();
  } else {
    startFan();
  }
});

speedBtns.forEach((btn, i) => {
  btn.addEventListener('click', () => {
    setSpeed(i + 1);
  });
});

// Init
setSpeed(1);
stopFan();
