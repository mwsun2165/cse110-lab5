// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const faceImage = document.querySelector('#explore img');
  const textArea = document.getElementById('text-to-speak');
  const voiceSelect = document.getElementById('voice-select');
  const talkButton = document.querySelector('#explore button');
  const synth = window.speechSynthesis;

  const closedMouthImg = 'assets/images/smiling.png';
  const openMouthImg = 'assets/images/smiling-open.png';

  function loadVoices() {
    const voices = synth.getVoices();

    while (voiceSelect.options.length > 1) {
      voiceSelect.remove(1);
    }

    voices.forEach((voice) => {
      const option = document.createElement('option');
      option.value = voice.name;
      option.textContent = `${voice.name} (${voice.lang})`;
      voiceSelect.appendChild(option);
    });
  }

  loadVoices();
  synth.addEventListener('voiceschanged', loadVoices);

  talkButton.addEventListener('click', () => {
    const text = textArea.value.trim();
    const selectedVoiceName = voiceSelect.value;
    if (!text || selectedVoiceName === 'select') {
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    const voices = synth.getVoices();
    const selectedVoice = voices.find((voice) => voice.name === selectedVoiceName);
    if (!selectedVoice) {
      return;
    }
    utterance.voice = selectedVoice;

    utterance.addEventListener('start', () => {
      faceImage.src = openMouthImg;
    });

    utterance.addEventListener('end', () => {
      faceImage.src = closedMouthImg;
    });

    utterance.addEventListener('error', () => {
      faceImage.src = closedMouthImg;
    });

    synth.cancel();
    synth.speak(utterance);
  });
}