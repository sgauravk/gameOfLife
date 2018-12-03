const assert = require('assert').deepEqual;

const {
  createAlive,
  makeObject,
  getAllNeighbors,
  getLiveNeighbors,
  produceNextGenAliveCells } = require('../src/lib.js');

describe ("Test for lib",function(){
  describe("test for createAlive",function(){
    it('for empty object and empty array should return empty object',function(){
      assert(createAlive({},[]),{});
    });
    it('for empty array, should return the object  unchanged',function(){
      assert(createAlive({1:' ',2:' '},[]),{1:' ',2:' '});
    });
    it('for empty object and non-empty array should return an object of array length',function(){
      assert(createAlive({},[1,2]),{1:"*",2:"*"});
    }); 
    it('for non-zero input should return an object of same length',function(){
      assert(createAlive({1:' ',2:' ',3:' '},[1,3]),{1:'*',2:' ',3:'*'});
    });
  });

  describe("test for getAllNeighbors",function(){
    it('for side 0 should return empty array',function(){
      assert(getAllNeighbors(0,1),[]);
    });
    it('for different sizes array length will depend on the position',function(){
      assert(getAllNeighbors(2,2,1),[2,3,4]);
      assert(getAllNeighbors(3,3,5),[4,6,2,8,1,3,7,9]);
      assert(getAllNeighbors(3,3,1),[2,4,5]);
      assert(getAllNeighbors(3,2,1),[2,4,5]);
    });
  });

  describe("test for getLiveNeighbors",function(){
    it('for empty alive array should return 0 length',function(){
      assert(getLiveNeighbors([],3,1),0);
    });
    it('for different sizes of alive array, length will be less or equal',function(){
      assert(getLiveNeighbors(2,2,1,{1:' ',2: ' ',3:' ',4:' '}),0);
    });
  });

  describe("test for make object",function(){
    it('should make an obeject using alive list' ,function(){
      assert(makeObject([1,2],{1:' ',2:' ',3:' ',4:' '}),{1:'*',2:'*',3:' ',4:' '});
    });
  });
});

