// Wait till the browser is ready to render the game (avoids glitches)
window.requestAnimationFrame(function () {
  new GameManager(100, KeyboardInputManager, HTMLActuator, LocalScoreManager);
});
