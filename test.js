class _Promise {
  constructor(userExecutor) {
    userExecutor((data) => { this.resolveMethod(data); });
    this.endUserThenFunction = null;
  }

  resolveMethod(data) {
    console.log(this.endUserThenFunction);
    this.endUserThenFunction(data);
  }

  then(endPassedThenFunction) {
    this.endUserThenFunction = endPassedThenFunction;
  }
}

function myTest() {
  return new _Promise((callBackForCallingThen) => {
    setTimeout(() => {
      callBackForCallingThen('data');
    }, 3000);
  });
}

myTest().then(data => {
  console.log('Result is ' + data);
});
