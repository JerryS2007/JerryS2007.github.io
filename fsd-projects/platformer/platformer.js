$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(1050, 550, 200, 20, "blue"); //plat 1
    createPlatform(250, 550, 200, 20, "green"); //plat 2
    createPlatform(450, 425, 200, 20, "teal"); //plat 3
    createPlatform(750, 600, 200, 20, "red"); //plat 4
    createPlatform(500, 650, 200, 20, "pink"); //plat 5
    createPlatform(150, 365, 200, 20, "purple"); //plat 6

    // TODO 3 - Create Collectables
    createCollectable("database", 1000, 700, 0, 1); //database
    createCollectable("diamond", 500, 360, -0.5, 1); //diamond
    createCollectable("grace", 200, 500, 0.5, 1); //grace
    createCollectable("kennedi", 700, 300, 0, 1); //kennedi
    createCollectable("max", 1100, 500, 0, 1); //max
    createCollectable("steve", 225, 325, 0, 1); //steve

    // TODO 4 - Create Cannons
    createCannon("left",400,1500);
    createCannon("right",500,1200);
    createCannon("top",400,1500);
    createCannon("top",900,1000);
    createCannon("right",700,750);

    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
  });