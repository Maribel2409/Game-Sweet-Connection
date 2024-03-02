function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const levels = [
  {
    level: 1,
    secondsLimit: 10,
    cards: [
      {
        name: "candy-peach",
        url: "https://sugaramma.com/3638-large_default/corazones-de-melocoton-250u-vidal.jpg",
      },
      {
        name: "jelly-sweet",
        url: "https://static.vecteezy.com/system/resources/previews/007/307/407/large_2x/colorful-sweet-jelly-candies-photo.jpg",
      },
      {
        name: "cloud-color",
        url: "./assets/img/cloud-color.jpeg",
      },
      {
        name: "cloud-color",
        url: "./assets/img/cloud-color.jpeg",
      },
      {
        name: "candy-peach",
        url: "https://sugaramma.com/3638-large_default/corazones-de-melocoton-250u-vidal.jpg",
      },
      {
        name: "jelly-sweet",
        url: "https://static.vecteezy.com/system/resources/previews/007/307/407/large_2x/colorful-sweet-jelly-candies-photo.jpg",
      },
    ],
  },
  {
    level: 2,
    secondsLimit: 35,
    cards: [
      {
        name: "besitos",
        url: "./assets/img/besitos.jpeg",
      },
      {
        name: "cerezas",
        url: "assets/img/cerezas.jpeg",
      },
      {
        name: "cerebros",
        url: "assets/img/cerebros.jpeg",
      },
      {
        name: "labios",
        url: "assets/img/labios.jpeg",
      },
      {
        name: "snake",
        url: "assets/img/snake.jpeg",
      },
      {
        name: "ositos",
        url: "assets/img/ositos.jpeg",
      },
      {
        name: "besitos",
        url: "./assets/img/besitos.jpeg",
      },
      {
        name: "cerezas",
        url: "assets/img/cerezas.jpeg",
      },
      {
        name: "cerebros",
        url: "assets/img/cerebros.jpeg",
      },
      {
        name: "labios",
        url: "assets/img/labios.jpeg",
      },
      {
        name: "snake",
        url: "assets/img/snake.jpeg",
      },
      {
        name: "ositos",
        url: "assets/img/ositos.jpeg",
      },
    ],
  },
  {
    level: 3,
    secondsLimit: 100,
    cards: [
      {
        name: "corazon-goma",
        url: "assets/img/corazon-goma.jpeg",
      },
      {
        name: "dedos",
        url: "assets/img/dedos.jpeg",
      },
      {
        name: "dentadura",
        url: "assets/img/dentadura.jpeg",
      },
      {
        name: "espiral",
        url: "assets/img/espiral.jpg",
      },
      {
        name: "fresas",
        url: "assets/img/fresas.jpeg",
      },
      {
        name: "huevos",
        url: "assets/img/huevos.jpeg",
      },
      {
        name: "ladrillos",
        url: "assets/img/ladrillos.jpeg",
      },
      {
        name: "moras",
        url: "assets/img/moras.jpeg",
      },
      {
        name: "coca-cola",
        url: "assets/img/coca-cola.jpeg",
      },
      {
        name: "platanos",
        url: "assets/img/platanos.jpeg",
      },
      {
        name: "sandia",
        url: "assets/img/sandia.jpeg",
      },
      {
        name: "melones",
        url: "assets/img/melones.jpeg",
      },
      {
        name: "corazon-goma",
        url: "assets/img/corazon-goma.jpeg",
      },
      {
        name: "dedos",
        url: "assets/img/dedos.jpeg",
      },
      {
        name: "dentadura",
        url: "assets/img/dentadura.jpeg",
      },
      {
        name: "espiral",
        url: "assets/img/espiral.jpg",
      },
      {
        name: "fresas",
        url: "assets/img/fresas.jpeg",
      },
      {
        name: "huevos",
        url: "assets/img/huevos.jpeg",
      },
      {
        name: "ladrillos",
        url: "assets/img/ladrillos.jpeg",
      },
      {
        name: "moras",
        url: "assets/img/moras.jpeg",
      },
      {
        name: "coca-cola",
        url: "assets/img/coca-cola.jpeg",
      },
      {
        name: "platanos",
        url: "assets/img/platanos.jpeg",
      },
      {
        name: "sandia",
        url: "assets/img/sandia.jpeg",
      },
      {
        name: "melones",
        url: "assets/img/melones.jpeg",
      },
    ],
  },
];
