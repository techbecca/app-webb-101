var promise = new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve("This is executed once the timer is done");
    }, 3000);
  });
  
  promise
    .then(function(text) {
      console.log(text);
    });

    