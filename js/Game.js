class Game {
  constructor() {}

  getState(){
    var gameStateRef = database.ref("gameState") //here game state is field in databse
    gameStateRef.on("value", function(data){
      gameState = data.val(); //var gameState of our visual studio code
    })

  }

  update(state) {
    database.ref("/").update({
     gameState: state
    });
  }

  start() {
    form = new Form();
    form.display();
    player = new Player();
  playerCount = player.getCount();
  }




}
