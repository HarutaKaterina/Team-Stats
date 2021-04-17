const team = {
  _players: [{firstName: 'Mihai', lastName: 'Pricop', age: 25},
  {firstName: 'Bruce', lastName: 'Scott', age: 23},
  {firstName: 'Ali', lastName: 'Muhamed', age: 20}
  ],
  _games: [{opponent: 'Broncos', teamPoints: 42, opponentPoints: 27},
  {opponent: 'Divin', teamPoints: 40, opponentPoints: 22},
  {opponent: 'Ohio', teamPoints: 52, opponentPoints: 17}
  ],

  get players() {
return this._players;
  },
  get games() {
return this._games;
  },
addPlayer(firstName, lastName, age) {
let player =  {
  firstName: firstName,
  lastName: lastName,
  age: age
};
this.players.push(player);
},

addGame(opponentsName, points, opponentsPoints){
  const game = {
    opponent: opponentsName,
    points: points,
    opponentPoints: opponentsPoints
  }
  this.games.push(game);
}
}


team.addPlayer( 'Steph', 'Curry', 28);
team.addPlayer( 'Lisa', 'Leslie', 44);
team.addPlayer( 'Bugs', 'Bunny', 76);
console.log(team.players);

team.addGame('Zimbru', 55, 30);
team.addGame('Miras', 155, 90);
team.addGame('Print', 68, 25);
console.log(team.games);