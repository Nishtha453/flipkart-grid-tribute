AOS.init();

document.addEventListener('keydown', (e) => {
  if (e.key.toLowerCase() === 'g') {
    alert('💡 Flipkart Grid Fun Fact: Grid 5.0 saw participation from over 3 lakh students!');
    playSound('celebrate');
  }
});

const heroAnim = lottie.loadAnimation({
  container: document.getElementById('lottie-hero'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'https://lottie.host/f75b351a-8e0c-4a41-93e7-c9fe10ee4dc5/0Yz3xyxn5W.json'
});

let confetti;

function launchConfetti() {
  if (!confetti) {
    confetti = new ConfettiGenerator({ target: 'confetti-canvas' });
    confetti.render();
  } else {
    document.getElementById('confetti-canvas').classList.remove('hidden');
  }
  setTimeout(() => {
    document.getElementById('confetti-canvas').classList.add('hidden');
  }, 5000);
}

function playSound(type) {
  if (type === 'click') document.getElementById('click-sound').play();
  if (type === 'celebrate') document.getElementById('celebrate-sound').play();
}
