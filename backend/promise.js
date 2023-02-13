function successCallback(result) {
    console.log("It succeeded with " + result);
  }
  
  function failureCallback(error) {
    console.log("It failed with " + error);
  }

doSomething().then(successCallback, failureCallback);
