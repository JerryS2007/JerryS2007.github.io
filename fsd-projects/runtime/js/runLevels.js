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
    game.setDebugMode(true);

    // TODOs 5 through 11 go here
    // BEGIN EDITING YOUR CODE HERE

      function createObstacle(x, y, damage){
        var hitZoneSize = 25; //size of the obstacles collision area
        var damageFromObstacle = damage; //amount of damage the obstacle deals upon impact
        var obstacleHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);//creates obstacle and provides a hitzone size and damage
        obstacleHitZone.x = x;//creates x position for the hitzone
        obstacleHitZone.y = y;//creates y position for the hitzone
        game.addGameItem(obstacleHitZone);//adds obstacle to the game
        var obstacleImage = draw.bitmap("img/sawblade.png");//draws the obstacles image
        obstacleHitZone.addChild(obstacleImage);//takes object picture and adds it as a child to the hitzone
        obstacleImage.x = -25;//offets the image horizontally relatvie to the hit zone
        obstacleImage.y = -25;//offets the image vertically relatvie to the hit zone

        obstacleHitZone.rotationalVelocity = 5;

      }

      function createEnemy(x, y){
        var enemy = game.createGameItem("enemy", 25);// stores enemy in the enemt variable and creates it in the game.
        var enemyImage = draw.rect(50, 50, "red");//stores the enemy image
        enemyImage.x = -25;//offset image for the image to the hitzone
        enemyImage.y = -25;//offset image for the image to the hitzone
        enemy.addChild(enemyImage);//takes enemy image and adds it as a child to the hitzone
        enemy.x = x;//setting x enemy position
        enemy.y = y;//setting y enemy position
        game.addGameItem(enemy);//adds the enemy to the game

        enemy.velocityX -= 3;//moving enemy across the screen
        
        //handles when hallebot collides with the enemy
        enemy.onPlayerCollision = function(){
          game.changeIntegrity(-10);//reduces player health
        };

        //handles when hallebot shoots the enemy
        enemy.onProjectileCollision = function(){
          game.increaseScore(100);//increases the player score
          enemy.fadeOut();//makes the enemys disappear gradually whenever shot and killed
        };
      };

        function createObstacle(x, y, damage, rotation, hitZoneSize, image, offsetX, offsetY, scale){
          var hitZoneSize = hitZoneSize; //size of the obstacles collision area
          var damageFromObstacle = damage; //amount of damage the obstacle deals upon impact
          var obstacleHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);//creates obstacle and provides a hitzone size and damage
          obstacleHitZone.x = x;//creates x position for the hitzone
          obstacleHitZone.y = y;//creates y position for the hitzone
          game.addGameItem(obstacleHitZone);//adds obstacle to the game
          var obstacleImage = draw.bitmap(image);//draws the obstacles image
          obstacleHitZone.addChild(obstacleImage);//takes object picture and adds it as a child to the hitzone
          offsetX = offsetX;//offets the image horizontally relatvie to the hit zone
          offsetY = offsetY;//offets the image vertically relatvie to the hit zone
          obstacleImage.scaleX = scale;
          obstacleImage.scaleY = scale;

          obstacleHitZone.rotationalVelocity = rotation;
      }

      function createReward(x, y){
      var reward = game.createGameItem("reward", 25);// stores reward in the enemt variable and creates it in the game.
        var rewardImage = draw.rect(50, 50, "blue");//stores the reward image
        rewardImage.x = -25;//offset image for the image to the hitzone
        rewardImage.y = -25;//offset image for the image to the hitzone
        reward.addChild(rewardImage);//takes reward image and adds it as a child to the hitzone
        reward.x = x;//setting x reward position
        reward.y = y;//setting y reward position
        game.addGameItem(reward);//adds the reward to the game

        reward.velocityX -= 3;//moving reward across the screen
      
      //handles when hallebot collides with the reward
      reward.onPlayerCollision = function(){
        game.changeIntegrity(10);//increases player health
        reward.fadeOut();
        };
      };

      function createLevelMarker(x,y){
        var levelMarker = game.createGameItem("level marker", 25);// stores level in the enemt variable and creates it in the game.
        var levelImage = draw.rect(50, 50, "yellow");//stores the level image
        levelImage.x = -25;//offset image for the image to the hitzone
        levelImage.y = -25;//offset image for the image to the hitzone
        levelMarker.addChild(levelImage);//takes level image and adds it as a child to the hitzone
        levelMarker.x = x;//setting x level position
        levelMarker.y = y;//setting y level position
        game.addGameItem(levelMarker);//adds the end of level to the game

        levelMarker.velocityX -= 3;//moving level across the screen
      
      //handles when hallebot collides with the levelMarker
      levelMarker.onPlayerCollision = function(){
        game.changeIntegrity(10);//increases player health
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
          createObstacle(element.x, element.y, element.damage, element.rotation, element.hitZoneSize, element.image, element.offsetX, element.offsetY, element.scale);
        }
        if(element.type === "enemy"){
          createEnemy(element.x, element.y);
        }
        if(element.type === "reward"){
          createReward(element.x, element.y);
        }
        if (element.type === "levelMarker"){
          createLevelMarker(element.x, element.y);
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
