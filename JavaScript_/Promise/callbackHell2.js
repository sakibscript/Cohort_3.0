///has callback hell
function setTimeoutPromisified(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

setTimeoutPromisified(1000).then(() => {
  console.log("Hi");
  setTimeoutPromisified(3000).then(() => {
    console.log("Hello");
    setTimeoutPromisified(5000).then(() => {
      console.log("Hello there");
    });
  });
});

///doesn't really have callback hell
///Promise chaining
setTimeoutPromisified(1000)
  .then(() => {
    console.log("Hi");
    return setTimeoutPromisified(3000);
  })
  .then(() => {
    console.log("Hello");
    return setTimeoutPromisified(5000);
  })
  .then(() => {
    console.log("Hello there");
  });
