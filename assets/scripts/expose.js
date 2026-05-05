// expose.js

window.addEventListener('DOMContentLoaded', init);

const HORN_ALT = {
  'air-horn': 'Air horn',
  'car-horn': 'Car horn',
  'party-horn': 'Party horn',
};

function init() {
  const hornSelect = document.getElementById('horn-select');
  const hornImage = document.querySelector('#expose > img');
  const volumeSlider = document.getElementById('volume');
  const volumeIcon = document.querySelector('#volume-controls img');
  const playButton = document.querySelector('#expose button');
  const audio = document.querySelector('#expose audio');

  const jsConfetti =
    typeof window.JSConfetti === 'function' ? new window.JSConfetti() : null;

  function applyVolumeUi() {
    const level = Number(volumeSlider.value);
    audio.volume = level / 100;

    let file;
    let altLevel;
    if (level === 0) {
      file = 'volume-level-0.svg';
      altLevel = 0;
    } else if (level < 33) {
      file = 'volume-level-1.svg';
      altLevel = 1;
    } else if (level < 67) {
      file = 'volume-level-2.svg';
      altLevel = 2;
    } else {
      file = 'volume-level-3.svg';
      altLevel = 3;
    }

    volumeIcon.src = `assets/icons/${file}`;
    volumeIcon.alt = `Volume level ${altLevel}`;
  }

  hornSelect.addEventListener('change', () => {
    const value = hornSelect.value;
    if (value === 'select') {
      return;
    }
    hornImage.src = `assets/images/${value}.svg`;
    hornImage.alt = HORN_ALT[value] ?? 'Selected horn';
    audio.src = `assets/audio/${value}.mp3`;
  });

  volumeSlider.addEventListener('input', applyVolumeUi);

  playButton.addEventListener('click', () => {
    const value = hornSelect.value;
    if (value === 'select') {
      return;
    }
    audio.currentTime = 0;
    audio.play();

    if (value === 'party-horn' && jsConfetti) {
      jsConfetti.addConfetti();
    }
  });

  applyVolumeUi();
}
