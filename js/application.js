// Read URL parameters
const params = new URLSearchParams(window.location.search);

// Participant ID
const participantId =
  params.get("participant_id") || crypto.randomUUID();

// Session number
const sessionNumber =
  params.get("session") || "1";

// Make globally accessible
window.studyInfo = {
  participantId,
  sessionNumber
};

console.log(window.studyInfo);

// Start game
window.requestAnimationFrame(function () {
  new GameManager(
    4,
    KeyboardInputManager,
    HTMLActuator,
    LocalStorageManager
  );
});
