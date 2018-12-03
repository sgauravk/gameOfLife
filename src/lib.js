const { repeatCharacter, makeHorizontalBorder,getNeighbors1,
  getNeighbors2, getNeighbors3, selectAlive } = require('./util.js');

const createObject = function(length,width){
  let sampleObject = {};
  for(let count=1; count <= length*width; count++){
    sampleObject[count] = ' ';
  };
  return sampleObject;
};

let createAlive = function(object,array){
  for(let element of array){
    object[element] = '*';
  }
  return object;
};

const outlineGenerator = function(length,width,object){
  let outLine = makeHorizontalBorder(length)+"\n";
  let height = 0;
  let startingIndex = 1;
  let lastIndex = length;
  while (height < width){
    let line = '';
    for(let index=startingIndex; index<=lastIndex; index++){
      line += '| ' + object[index] + ' ';
    };
    line = line + '|' + '\n'
    outLine += line;
    height++;
    startingIndex += length;
    lastIndex += length;
  }
  outLine += makeHorizontalBorder(length);
  return outLine;
}

const getAllNeighbors = function(length,width,position){
  let result = [];
  result = getNeighbors1(length,width,position).concat(getNeighbors2(length,width,position));
  result = result.concat(getNeighbors3(length,width,position));
  return result;
}

const getLiveNeighbors = function(length,width,position,object){
  let neighbours = getAllNeighbors(length,width,position);
  let liveNeighbors = [];
  for (let element of neighbours){
    if (object[element] == '*'){
      liveNeighbors.push(element);
    }
  }
  return liveNeighbors.length;
}

const findAllAlives = function(length,width,object){
  let alives = [];
  for(let count=1; count<=length*width; count++){
    if(object[count] == '*'){
      alives.push(count);
    }
  }
  return alives;
};

const makeRules = function(length,width,object,list){
  let array = [[],[]];
  list = list.map(x=>+x);
  for(let pos=1; pos <= length*width; pos++){
    let liveNeighbors = getLiveNeighbors(length,width,pos,object);
    if(list.includes(pos) && liveNeighbors < 2 || list.includes(pos) && liveNeighbors > 3){
      array[1].push(pos);
    }
    if(list.includes(pos) && liveNeighbors == 2 || list.includes(pos) && liveNeighbors == 3){
      array[0].push(pos);
    }
    if(!list.includes(pos) && liveNeighbors == 3){
      array[0].push(pos);
    }
  }
  return array;
}

const modifyObject = function(length,width,object,aliveList){
  let list = makeRules(length,width,object,aliveList);
  for(let index of list[0]){
    object[index] = '*';
  }
  for(let element of list[1]){
    object[element] = ' ';
  }
  return object;
}

const makeObject = function(aliveList,object){
  for(let element of aliveList){
    object[element] = '*';
  }
  return object;
}

module.exports = { outlineGenerator, createAlive, getLiveNeighbors, createObject,
  getAllNeighbors, findAllAlives, modifyObject, makeRules, makeObject };
