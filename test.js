class myPromise {
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
  return new myPromise((callBackForCallingThen) => {
    setTimeout(() => {
      callBackForCallingThen('data');
    }, 3000);
  });
}

myTest().then((data = 'default') => {
  console.log(`Result is ${data}`);
});
