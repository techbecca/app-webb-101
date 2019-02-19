var promise = new Promise(function(resolve, reject) {
    setTimeout(function() {
      //resolve("This is executed once the timer is done");
      reject({ code: 500, message: "Horrible error" });
    }, 3000);
  });
  
  promise
    .then(function(text) {
      console.log(text);
    })
    .catch(function(error) {
      console.error(error.code, error.message);
    });

    