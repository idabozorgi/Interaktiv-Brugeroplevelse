'use strict';

// Funktion til at gemme brugerens valg og vise den rigtige slutning
function goToChoice(choice) {
  // Gem brugerens valg i localStorage
  localStorage.setItem('cyberChoice', choice);

  // Skjul startskærmen
  document.getElementById('start-screen').classList.add('hidden');

  // Vis den rigtige resultatsektion
  document.getElementById(`result-${choice}`).classList.remove('hidden');

  // Vis feedback-knappen/skærmen
  setTimeout(showFeedback, 2000); // Vis feedback efter 2 sekunder (kan justeres)
}

// Funktion til at vise feedback baseret på gemt valg
function showFeedback() {
  const feedbackScreen = document.getElementById('feedback-screen');
  const feedbackText = document.getElementById('feedback-text');

  const choice = localStorage.getItem('cyberChoice');

  // Vis kort opsummering afhængigt af valg
  let feedbackMsg = '';

  switch (choice) {
    case 'klik':
      feedbackMsg = 'Du valgte at klikke på linket. Resultat: Dine data blev stjålet.';
      break;
    case 'slet':
      feedbackMsg = 'Du slettede mailen. Resultat: Du undgik faren, men lærte ikke meget.';
      break;
    case 'undersøg':
      feedbackMsg = 'Du undersøgte mailen og kontaktede banken. Godt klaret!';
      break;
    default:
      feedbackMsg = 'Ingen valg fundet.';
  }

  feedbackText.textContent = feedbackMsg;
  feedbackScreen.classList.remove('hidden');
}

// Funktion til at nulstille oplevelsen og starte forfra
function resetExperience() {
  localStorage.removeItem('cyberChoice');

  // Skjul alle sektioner
  document.querySelectorAll('section').forEach(section => {
    section.classList.add('hidden');
  });

  // Vis startskærmen igen
  document.getElementById('start-screen').classList.remove('hidden');
}
