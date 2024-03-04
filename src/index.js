window.addEventListener("load", () => {
  const container = document.querySelector(".board-container");
  const btnStart = document.querySelector("#intro-game-btn");
  const introBoard = document.querySelector("#intro-game");

  const game = new Game(container);

  btnStart.addEventListener("click", () => {
    game.start();
    introBoard.classList.add("hidden");
    const music = document.querySelector("#music");
    music.play();
    const audioStart = new Audio("./assets/audio/start.mp3");
    audioStart.play();
  });
});

i
