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
          { type: "reward", x: 450, y: groundY - 150, increaseHealth: 25, hitZoneSize: 25, image: "img/Bandage.png", speed: 1, offsetX: -65, offsetY: -75, scaleX: 0.25, scaleY: 0.25},
          { type: "reward", x: 900, y: groundY - 150, increaseHealth: 25, hitZoneSize: 25, image: "img/Medkit.png", speed: 1, offsetX: -65, offsetY: -75, scaleX: 0.25, scaleY: 0.25},
          { type: "reward", x: 450, y: groundY - 150, increaseHealth: 25, hitZoneSize: 25, image: "img/Bandage.png", speed: 1, offsetX: -65, offsetY: -75, scaleX: 0.25, scaleY: 0.25},
          { type: "reward", x: 900, y: groundY - 150, increaseHealth: 25, hitZoneSize: 25, image: "img/Apple.png", speed: 1, offsetX: -65, offsetY: -75, scaleX: 0.25, scaleY: 0.25},
          { type: "levelMarker", x: 1400, y: groundY - 100},
        ],
      },
      {
        name: "Robot Rampage",
        number: 2,
        speed: -3,
        gameItems: [
          { type: "obstacle", x: 400, y: groundY - 10, damage: 40, hitZoneSize: 25, image:"img/DANGER; THUNDERSTORM.png", rotation: 0, offsetX: -0.25, offsetY: -0.25, scaleX: 0.50, scaleY: 0.50},
          { type: "obstacle", x: 600, y: groundY - 10, damage: 50, hitZoneSize: 25,  image:"img/DANGER; THUNDERSTORM.png", rotation: 0, offsetX: -0.25, offsetY: -0.25, scaleX: 0.50, scaleY: 0.50},
          { type: "obstacle", x: 800, y: groundY - 10, damage: 60, hitZoneSize: 25, image:"img/DANGER; THUNDERSTORM.png", rotation: 0, offsetX: -0.25, offsetY: -0.25, scaleX: 0.50, scaleY: 0.50},
          { type: "enemy", x: 450, y: groundY - 25, damage: 40, hitZoneSize: 25, image: "img/Snow.png", speed: 2, offsetX: -20, offsetY: -40, scaleX:0.25, scaleY: 0.25, score: 350},
          { type: "enemy", x: 450, y: groundY - 25, damage: 40, hitZoneSize: 25, image: "img/Snow.png", speed: 2, offsetX: -20, offsetY: -40, scaleX:0.25, scaleY: 0.25, score: 350},
          { type: "reward", x: 450, y: groundY - 150, increaseHealth: 25, hitZoneSize: 25, image: "img/Bandage.png", speed: 1, offsetX: -65, offsetY: -75, scaleX: 0.25, scaleY: 0.25},
          { type: "reward", x: 900, y: groundY - 150, increaseHealth: 25, hitZoneSize: 25, image: "img/Medkit.png", speed: 1, offsetX: -65, offsetY: -75, scaleX: 0.25, scaleY: 0.25},
          { type: "reward", x: 450, y: groundY - 150, increaseHealth: 25, hitZoneSize: 25, image: "img/Bandage.png", speed: 1, offsetX: -65, offsetY: -75, scaleX: 0.25, scaleY: 0.25},
          { type: "reward", x: 900, y: groundY - 150, increaseHealth: 25, hitZoneSize: 25, image: "img/Medkit.png", speed: 1, offsetX: -65, offsetY: -75, scaleX: 0.25, scaleY: 0.25},
          { type: "levelMarker", x: 1400, y: groundY - 100},
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
