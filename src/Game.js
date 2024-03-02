class Game {
  constructor(container) {
    this.container = container;
    this.levelIndex = 0;
    this.cardIndexCounter = 0;
    this.cards = this.generateCards();

    this.cardsFlipped = [];
    this.tick = 0;
    this.seconds = 0;

    this.timerNode = null;
    this.drawTimer();
  }

  start() {
    this.intervalId = setInterval(() => {
      this.update();
      this.cleanup();
      this.tick++;

      if (this.tick % 60 === 0) {
        this.tick = 0;
        this.seconds++;
        this.updateTimer();
      }
    }, 1000 / 60);
    this.printCards();
    this.activateCards();
  }

  printCards() {
    this.cards.forEach((card) => {
      card.draw();
    });
  }

  win() {
  const audioWin = new Audio("./assets/audio/win-music.mp3");
  const winBoard = document.createElement("div");
  winBoard.classList.add("win-board");
  const title = document.createElement("h2");
  title.textContent = "You Win!";
  winBoard.appendChild(title);
  document.body.appendChild(winBoard);
  audioWin.play(); 

  clearInterval(this.intervalId);
}

  gameOver() {
    const audioGameOver = new Audio("./assets/audio/game-over-laugh.mp3");
    const gameOverBoard = document.createElement("div");
    gameOverBoard.classList.add("game-over-board");
    const title = document.createElement("h2");
    title.innerText = "Game Over!";
    gameOverBoard.appendChild(title);
    document.body.appendChild(gameOverBoard);
    audioGameOver.play(); 
  
    clearInterval(this.intervalId);
  }
  

  cleanup() {}

  update() {
    if (this.cards.every((card) => card.matched)) {
      clearInterval(this.intervalId);
      setTimeout(() => {
        this.drawInfoBanner();
      }, 500);
    }
  }

  flipDownCards() {
    if (this.cardsFlipped.length === 2) {
      this.cardsFlipped.forEach((card) => {
        card.classList.remove("clicked");
      });
    }
  }

  drawTimer() {
    this.timerNode = document.createElement("p");
    this.timerNode.classList.add("timer");
    this.updateTimer();

    this.container.appendChild(this.timerNode);
  }

  updateTimer() {
    this.timerNode.innerHTML = `
      <p id="timer">Timer: ${this.seconds} s</p>
      <p id="limit">Limit: ${levels[this.levelIndex].secondsLimit}</p>
    `;
  }

  drawInfoBanner() {
    const infoBannerNode = document.createElement("div");
    infoBannerNode.classList.add("info-banner");

    let secondsLimit;

    if (this.levelIndex === 0) {
      secondsLimit = 10;
    } else if (this.levelIndex === 1) {
      secondsLimit = 35;
    } else if (this.levelIndex === 2) {
      secondsLimit = 100;
    }

    infoBannerNode.innerHTML = `
        <h2>You have done ${this.seconds} seconds</h2>
        <p>To pass the level you must do less ${secondsLimit} seconds</p>
    `;

    const actionButton = document.createElement("button");

    if (this.seconds >= secondsLimit) {
      actionButton.innerText = "Restart";
    } else {
      actionButton.innerText = "Next";
      if (this.levelIndex === 1) {
        levels[this.levelIndex].secondsLimit = 35;
      } else if (this.levelIndex === 2) {
        levels[this.levelIndex].secondsLimit = 100;
      }
    }

    actionButton.addEventListener("click", () => {
      if (this.seconds >= secondsLimit) {
        this.restartCount++;
      } else {
        this.levelIndex++;
      }
      if (this.levelIndex === 3 && this.restartCount === 3) {
        this.gameOver();
      } else if (this.levelIndex === 3 && this.seconds < 100) {
        this.win();
      } else {
        this.resetGame();
      }
      infoBannerNode.remove();
    });
    infoBannerNode.appendChild(actionButton);

    this.container.appendChild(infoBannerNode);
  }

  generateCards() {
    const prevCards = [...document.querySelectorAll(".flip-card")];

    if (prevCards.length > 0) {
      prevCards.forEach((card) => card.remove());
    }

    const levelCards = shuffle(levels[this.levelIndex].cards);
    let finalCardsArr = [];

    if (this.levelIndex === 2) {
      const perChunk = 8;

      const result = levelCards.reduce((resultArray, card, index) => {
        const chunkIndex = Math.floor(index / perChunk);

        if (!resultArray[chunkIndex]) {
          resultArray[chunkIndex] = [];
        }

        resultArray[chunkIndex].push(card);

        return resultArray;
      }, []);

      for (let i = 0; i < result.length; i++) {
        for (let j = 0; j < result[i].length; j++) {
          finalCardsArr.push(
            new Card(
              this.container,
              85 * j + 100,
              145 * i + 50,
              75,
              120,
              result[i][j].name,
              result[i][j].url
            )
          );
        }
      }
      return finalCardsArr;
    }

    return levelCards.map((cardInfo, index) => {
      if (this.cardIndexCounter < levelCards.length / 2 - 1) {
        this.cardIndexCounter++;
      } else {
        this.cardIndexCounter = 0;
      }

      const { name, url } = cardInfo;
      const containerWidth = this.container.offsetWidth;

      let gap;

      if (this.levelIndex === 0) {
        gap = 20;
      } else if (this.levelIndex === 1) {
        gap = 10;
      } else if (this.levelIndex === 2) {
        gap = 5;
      }

      let x;
      let y;
      let width;
      let height;

      if (this.levelIndex === 2) {
        width = 55;
        height = 78;
      } else {
        width = 100;
        height = 150;
      }

      if (this.levelIndex === 2) {
        x =
          (containerWidth - (levelCards.length / 2) * width) / 2 +
          this.cardIndexCounter * (width + gap);
        y = index < (levelCards.length - 1) / 2 ? 175 : 300;
      } else {
        x =
          (containerWidth - (levelCards.length / 2) * width) / 2 +
          this.cardIndexCounter * (width + gap);
        y = index < (levelCards.length - 1) / 2 ? 100 : 270;
      }
      return new Card(this.container, x, y, width, height, name, url);
    });
  }

  activateCards() {
    const audio = new Audio("./assets/audio/swing.mp3");
    [...document.querySelectorAll(".flip-card")].forEach((card) => {
      card.addEventListener("click", () => {
        if (this.cardsFlipped.length < 2) {
          card.classList.add("clicked");
          this.cardsFlipped.push(card);
          audio.currentTime = 0;
          audio.play();

          if (this.cardsFlipped.length === 2) {
            const firstCardAtt = this.cardsFlipped[0].getAttribute("name");
            const secondCardAtt = this.cardsFlipped[1].getAttribute("name");
            if (firstCardAtt === secondCardAtt) {
             
              this.cards.forEach((card) => {
                if (card.name === firstCardAtt || card.name === secondCardAtt) {
                  card.matched = true;
                }
              });
              this.cardsFlipped = [];
            } else {
              setTimeout(() => {
                this.flipDownCards();
                this.cardsFlipped = [];
              }, 1000);
            }
          }
        }
      });
    });
  }

  resetGame() {
  
    this.cardIndexCounter = 0;
    this.cards = this.generateCards();

    this.cardsFlipped = [];
    this.tick = 0;
    this.seconds = 0;

    this.start();
    this.updateTimer();
  }
}
