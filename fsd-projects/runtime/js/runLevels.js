var runLevels = function (window) {
  window.opspark = window.opspark || {};

  var draw = window.opspark.draw;
  var createjs = window.createjs;
  let currentLevel = 0;

  window.opspark.runLevelInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game
    var levelData = window.opspark.levelData;

    // set this to true or false depending on if you want to see hitzones
    game.setDebugMode(false);

    // TODOs 5 through 11 go here
    // BEGIN EDITING YOUR CODE HERE

    function createObstacle(x, y, damage, rotation, hitZoneSize, image, offsetX, offsetY, scaleX, scaleY){
          var hitZoneSize = hitZoneSize; //size of the obstacles collision area
          var damageFromObstacle = damage; //amount of damage the obstacle deals upon impact
          var obstacleHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);//creates obstacle and provides a hitzone size and damage
          obstacleHitZone.x = x;//creates x position for the hitzone
          obstacleHitZone.y = y;//creates y position for the hitzone
          game.addGameItem(obstacleHitZone);//adds obstacle to the game
          var obstacleImage = draw.bitmap(image);//draws the obstacles image
          obstacleHitZone.addChild(obstacleImage);//takes object picture and adds it as a child to the hitzone
          obstacleImage.x = offsetX;//offets the image horizontally relatvie to the hit zone
          obstacleImage.y = offsetY;//offets the image vertically relatvie to the hit zone
          obstacleImage.scaleX = scaleX;
          obstacleImage.scaleY = scaleY;

          obstacleHitZone.rotationalVelocity = rotation;
      }

      function createEnemy(x, y, image, offsetX, offsetY, score, hitZoneSize, damage, speed, scaleX, scaleY, image){
        var enemy = game.createGameItem("enemy", hitZoneSize);// stores enemy in the enemt variable and creates it in the game.
        var enemyImage = draw.bitmap(image);//stores the enemy image
        enemyImage.x = offsetX;//offset image for the image to the hitzone
        enemyImage.y = offsetY;//offset image for the image to the hitzone
        enemy.addChild(enemyImage);//takes enemy image and adds it as a child to the hitzone
        enemy.x = x;//setting x enemy position
        enemy.y = y;//setting y enemy position
        game.addGameItem(enemy);//adds the enemy to the game
        enemyImage.scaleX = scaleX;
        enemyImage.scaleY = scaleY;

        enemy.velocityX -= speed;//moving enemy across the screen
        
        //handles when hallebot collides with the enemy
        enemy.onPlayerCollision = function(){
          game.changeIntegrity(damage);//reduces player health
        };

        //handles when hallebot shoots the enemy
        enemy.onProjectileCollision = function(){
          game.increaseScore(score);//increases the player score
          enemy.fadeOut();//makes the enemys disappear gradually whenever shot and killed
        };
      };

      function createReward(x, y, increaseHealth, speed, image, offsetX, offsetY, hitZoneSize, scaleX, scaleY){
      var reward = game.createGameItem("reward", hitZoneSize);// stores reward in the enemt variable and creates it in the game.
        var rewardImage = draw.bitmap(image);//stores the reward image
        rewardImage.x = offsetX;//offset image for the image to the hitzone
        rewardImage.y = offsetY;//offset image for the image to the hitzone
        reward.addChild(rewardImage);//takes reward image and adds it as a child to the hitzone
        reward.x = x;//setting x reward position
        reward.y = y;//setting y reward position
        game.addGameItem(reward);//adds the reward to the game
        rewardImage.scaleX = scaleX;
        rewardImage.scaleY = scaleY;

        reward.velocityX -= speed;//moving reward across the screen
      
      //handles when hallebot collides with the reward
      reward.onPlayerCollision = function(){
        game.changeIntegrity(increaseHealth);//increases player health
        reward.fadeOut();
        };
      };

      function createLevelMarker(x, y, increaseHealth, speed, image, offsetX, offsetY, hitZoneSize, scaleX, scaleY){
        var levelMarker = game.createGameItem("level marker", hitZoneSize);// stores level in the enemt variable and creates it in the game.
        var levelImage = draw.bitmap(image);//stores the level image
        levelImage.x = offsetX;//offset image for the image to the hitzone
        levelImage.y = offsetY;//offset image for the image to the hitzone
        levelMarker.addChild(levelImage);//takes level image and adds it as a child to the hitzone
        levelMarker.x = x;//setting x level position
        levelMarker.y = y;//setting y level position
        game.addGameItem(levelMarker);//adds the end of level to the game
        levelImage.scaleX = scaleX;
        levelImage.scaleY = scaleY;

        levelMarker.velocityX -= speed;//moving level across the screen
      
      //handles when hallebot collides with the levelMarker
      levelMarker.onPlayerCollision = function(){
        game.changeIntegrity(increaseHealth);//increases player health
        startLevel();
        levelMarker.fadeOut();
      };
    };

    function startLevel() {
      // TODO 13 goes below here
      var level = levelData[currentLevel];//fetches current level from the level data array
      var levelObjects = level.gameItems;//retrieves the array of game items and stores it in the level objects
      
      for(var i = 0; i < levelObjects.length; i++){
        var element = levelObjects[i];

        if(element.type === "obstacle"){
          createObstacle(element.x, element.y, element.damage, element.rotation, element.hitZoneSize, element.image, element.offsetX, element.offsetY, element.scaleX, element.scaleY);
        }
        if(element.type === "enemy"){
          createEnemy(element.x, element.y, element.image, element.offsetX, element.offsetY, element.score, element.hitZoneSize, element.damage, element.speed, element.scaleX, element.scaleY, element.image);
        }
        if(element.type === "reward"){
          createReward(element.x, element.y, element.increaseHealth, element.speed, element.image, element.offsetX, element.offsetY, element.hitZoneSize, element.scaleX, element.scaleY);
        }
        if (element.type === "levelMarker"){
          createLevelMarker(element.x, element.y, element.increaseHealth, element.speed, element.image, element.offsetX, element.offsetY, element.hitZoneSize, element.scaleX, element.scaleY);
        }
      }




      //////////////////////////////////////////////
      // DO NOT EDIT CODE BELOW HERE
      //////////////////////////////////////////////
      if (++currentLevel === levelData.length) {
        startLevel = () => {
          console.log("Congratulations!");
        };
      }
    }
    startLevel();
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = runLevels;
}
