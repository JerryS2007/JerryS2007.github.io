var makeLevelData = function (window) {
  window.opspark = window.opspark || {};

  window.opspark.makeDataInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game

    // TODO 12: change the below data
    var levelData = [
      {
        name: "Robot Romp",
        number: 1,
        speed: -3,
        gameItems: [
          { type: "obstacle", x: 400, y: groundY - 105, damage: 20, hitZoneSize: 25, image:"img/DANGER; THUNDERSTORM.png", rotation: 0, offsetX: -78, offsetY: -100, scaleX: 1, scaleY: 1},
          { type: "obstacle", x: 600, y: groundY - 105, damage: 30, hitZoneSize: 25,  image:"img/DANGER; THUNDERSTORM.png", rotation: 0, offsetX: -78, offsetY: -100, scaleX: 1, scaleY: 1},
          { type: "obstacle", x: 800, y: groundY - 105, damage: 40, hitZoneSize: 25, image:"img/DANGER; THUNDERSTORM.png", rotation: 0, offsetX: -78, offsetY: -100, scaleX: 1, scaleY: 1},
          { type: "enemy", x: 450, y: groundY - 25, damage: 40, hitZoneSize: 25, image: "img/Snow.png", speed: 2, offsetX: -20, offsetY: -40, scaleX:0.25, scaleY: 0.25, score: 350},
          { type: "enemy", x: 675, y: groundY - 25, damage: 40, hitZoneSize: 25, image: "img/Snow.png", speed: 2, offsetX: -20, offsetY: -40, scaleX:0.25, scaleY: 0.25, score: 350},
          { type: "enemy", x: 900, y: groundY - 25, damage: 40, hitZoneSize: 25, image: "img/Snow.png", speed: 2, offsetX: -20, offsetY: -40, scaleX:0.25, scaleY: 0.25, score: 350},
          { type: "reward", x: 450, y: groundY - 150, increaseHealth: 25, hitZoneSize: 25, image: "img/Bandage.png", speed: 1, offsetX: -65, offsetY: -75, scaleX: 0.25, scaleY: 0.25},
          { type: "reward", x: 900, y: groundY - 150, increaseHealth: 100, hitZoneSize: 25, image: "img/Medkit.png", speed: 1, offsetX: -55, offsetY: -45, scaleX: 0.25, scaleY: 0.25},
          { type: "reward", x: 450, y: groundY - 50, increaseHealth: 25, hitZoneSize: 25, image: "img/Banana.png", speed: 1, offsetX: -65, offsetY: -75, scaleX: 0.25, scaleY: 0.25},
          { type: "reward", x: 900, y: groundY - 50, increaseHealth: 25, hitZoneSize: 25, image: "img/Apple.png", speed: 1, offsetX: -65, offsetY: -75, scaleX: 0.25, scaleY: 0.25},
          { type: "levelMarker", x: 850, y: groundY - 70, increaseHealth: 100, hitZoneSize: 25, image: "img/Rift.png", speed: 0.5, offsetX: -45, offsetY: -45, scaleX: 0.5, scaleY: 0.5},
        ],
      },
      {
        name: "Robot Rampage",
        number: 2,
        speed: -3,
        gameItems: [
          { type: "obstacle", x: 400, y: groundY - 105, damage: 20, hitZoneSize: 25, image:"img/DANGER; THUNDERSTORM.png", rotation: 0, offsetX: -78, offsetY: -100, scaleX: 1, scaleY: 1},
          { type: "obstacle", x: 600, y: groundY - 105, damage: 30, hitZoneSize: 25,  image:"img/DANGER; THUNDERSTORM.png", rotation: 0, offsetX: -78, offsetY: -100, scaleX: 1, scaleY: 1},
          { type: "obstacle", x: 800, y: groundY - 105, damage: 40, hitZoneSize: 25, image:"img/DANGER; THUNDERSTORM.png", rotation: 0, offsetX: -78, offsetY: -100, scaleX: 1, scaleY: 1},
          { type: "enemy", x: 450, y: groundY - 25, damage: 40, hitZoneSize: 25, image: "img/Snow.png", speed: 2, offsetX: -20, offsetY: -40, scaleX:0.25, scaleY: 0.25, score: 350},
          { type: "enemy", x: 675, y: groundY - 25, damage: 40, hitZoneSize: 25, image: "img/Snow.png", speed: 2, offsetX: -20, offsetY: -40, scaleX:0.25, scaleY: 0.25, score: 350},
          { type: "enemy", x: 900, y: groundY - 25, damage: 40, hitZoneSize: 25, image: "img/Snow.png", speed: 2, offsetX: -20, offsetY: -40, scaleX:0.25, scaleY: 0.25, score: 350},
          { type: "reward", x: 450, y: groundY - 150, increaseHealth: 25, hitZoneSize: 25, image: "img/Bandage.png", speed: 1, offsetX: -65, offsetY: -75, scaleX: 0.25, scaleY: 0.25},
          { type: "reward", x: 900, y: groundY - 150, increaseHealth: 100, hitZoneSize: 25, image: "img/Medkit.png", speed: 1, offsetX: -55, offsetY: -45, scaleX: 0.25, scaleY: 0.25},
          { type: "reward", x: 450, y: groundY - 50, increaseHealth: 25, hitZoneSize: 25, image: "img/Banana.png", speed: 1, offsetX: -65, offsetY: -75, scaleX: 0.25, scaleY: 0.25},
          { type: "reward", x: 900, y: groundY - 50, increaseHealth: 25, hitZoneSize: 25, image: "img/Apple.png", speed: 1, offsetX: -65, offsetY: -75, scaleX: 0.25, scaleY: 0.25},
        ],
      },
    ];
    window.opspark.levelData = levelData;
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = makeLevelData;
}
