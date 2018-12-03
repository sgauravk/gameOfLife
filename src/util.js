const repeatCharacter = function(symbol,width,delimeter){
  return new Array(width).fill(symbol).join(delimeter);
}

const makeHorizontalBorder = function(length){
  return "+"+repeatCharacter(" - +",length,"");
}

const filterNeighbors = function(length,width,array){
  let result = [];
  for(let elements of array){
    if(elements > 0 && elements <= length*width){
      result.push(elements);
    }
  }
  return result;
}

const getNeighbors1 = function(length,width,position){
  let neighbors = [];
  if((position-1) % length == 0){
    neighbors.push(position+1);
    neighbors.push(position-length);
    neighbors.push(position+length);
    neighbors.push(position+length+1);
    neighbors.push(position-length+1);
  }
  return filterNeighbors(length,width,neighbors);
}

const getNeighbors2 = function(length,width,position){
  let neighbors = [];
  if(position % length == 0){
    neighbors.push(position-1);
    neighbors.push(position+length);
    neighbors.push(position-length);
    neighbors.push(position+length-1);
    neighbors.push(position-length-1);
  }
  return filterNeighbors(length,width,neighbors);
}

const getNeighbors3 = function(length,width,position){
  let neighbors = [];
  if((position-1) % length != 0 && position % length != 0 ){
    neighbors.push(position-1);
    neighbors.push(position+1);
    neighbors.push(position-length);
    neighbors.push(position+length);
    neighbors.push(position-length-1);
    neighbors.push(position-length+1);
    neighbors.push(position+length-1);
    neighbors.push(position+length+1);
  }
  return filterNeighbors(length,width,neighbors);
}

module.exports = { repeatCharacter,
  makeHorizontalBorder, getNeighbors1,
  getNeighbors2, getNeighbors3 };
