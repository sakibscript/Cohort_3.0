class Promise2 {
  constructor(func) {
    func(() => {
      this.resolve();
    });
  }
  then(callback) {
    this.resolve = callback;
  }
}

let promise = new Promise2((resolve) => setTimeout(resolve, 3000));

function callback() {
  console.log("Promise succeed");
}

promise.then(callback);
