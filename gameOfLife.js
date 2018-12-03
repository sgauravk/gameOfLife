const read = require('readline-sync');

const {outlineGenerator,
  createAlive,
  createObject,
  findAllAlives,
  modifyObject,
  makeRules,
makeObject} = require('./src/lib.js');

const getLength = () => read.question('enter length of rectangle: ') || getLength();

const getWidth = () => read.question('enter width of rectangle: ') || getWidth();

const getAlivePlaces = () => read.question('enter places to alive as comma(,) seperated: ') || getAlivePlaces();

const getIteration = () => read.question('enter the iteration you want: ') || getIteration();

const startGame = function(){
  let length = +getLength();
  let width = +getWidth();
  let aliveList = getAlivePlaces().split(',');
  let iterationRequired = +getIteration();
  let count = 0;
  let object = createObject(length,width);
  object = makeObject(aliveList,object);

  while(count < iterationRequired){
    aliveList = findAllAlives(length,width,object);
    console.clear();
    console.log(outlineGenerator(length,width,object));
    object = modifyObject(length,width,object,aliveList);
    count++;
  }
}

startGame();
