async function f() {

    let promise = new Promise(function(resolve, reject){
      setTimeout(function()
      {resolve("done!")}, 1000)
    });
  
    let result =  promise; // wait till the promise resolves (*)
  
    console.log(result); // "done!"
  }
  
  f();