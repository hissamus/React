
var testModule = (function () {
 
  var counter = 0;
  var privateFunction=function(){
      console.log("This is private...");
  }
 
  return {
 
    incrementCounter: function () {
      return counter++;
    },
 
    resetCounter: function () {
      console.log( "counter value prior to reset: " + counter );
      counter = 0;
    }
  };
 
})();
 
 //console.log("counter:"+counter);
testModule.privateFunction();
// Usage:
 
// Increment our counter
testModule.incrementCounter();
 
// Check the counter value and reset
// Outputs: counter value prior to reset: 1
testModule.resetCounter();