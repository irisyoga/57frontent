
function fiftyFiftyPromise() {
  return new Promise((response, reject) => {
    if (Math.random() < 0.5) {
      response("Best day of my life");
    } else {
      reject(new Error("Something is off"));
    }
  });
}

fiftyFiftyPromise()
  .then((msg) => {
    console.log(msg);
  })
  .catch((error) => {
    console.log( error);
  });
