///has callback hell
setTimeout(() => {
  console.log("Hi");
  setTimeout(() => {
    console.log("Hello");
    setTimeout(() => {
      console.log("Hello there");
    }, 5000);
  }, 3000);
}, 1000);

///doesn't really have callback hell
function step3Done() {
  console.log("Hello there");
}

function step2Done() {
  console.log("Hello");
  setTimeout(step3Done, 5000);
}

function step1Done() {
  console.log("Hi");
  setTimeout(step2Done, 3000);
}

setTimeout(step1Done, 1000);
