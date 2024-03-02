class Card {
  constructor(container, x, y, width, height, name, cardImg) {
    this.container = container;
    this.width = width;
    this.height = height;
    this.color = "white";
    this.name = name;
    this.cardImg = cardImg;

    this.x = x;
    this.y = y;

    this.element = document.createElement("div");
    this.element.classList.add("flip-card");
    this.element.setAttribute("name", this.name);
    this.element.innerHTML = `
        <div class="flip-card-inner">
            <div class="flip-card-front">
                <div class="image"></div>
            </div>
            <div class="flip-card-back">
                <div class="image" style="background-image: url('${this.cardImg}')"></div>
            </div>
        </div>
    `;

    this.matched = false;
  }

  draw() {
    this.element.style.height = this.height + "px";
    this.element.style.width = this.width + "px";

    this.element.style.position = "absolute";
    this.element.style.top = this.y + "px";
    this.element.style.left = this.x + "px";
    

    this.container.appendChild(this.element);
  }
}
