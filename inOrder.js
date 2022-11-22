function logOne() {
  return new Promise((resolve) => {
    setTimeout(function() {
        console.log("one!");
        resolve();
      }, Math.random() * 1000);
    });
}   
function logTwo() {
  setTimeout(function() {
    console.log("two!");
    }, Math.random() * 1000);
  } 
    function inOrder(one, two) {
      one().then(two);
    }
    
    inOrder(logOne, logTwo);