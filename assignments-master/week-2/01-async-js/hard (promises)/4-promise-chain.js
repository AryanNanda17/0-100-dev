function wait1(t) {
  return new Promise(function (resolve) {
    setTimeout(resolve, t * 1000);
  });
}

function wait2(t) {
  return new Promise(function (resolve) {
    setTimeout(resolve, t * 1000);
  });
}

function wait3(t) {
  return new Promise(function (resolve) {
    setTimeout(resolve, t * 1000);
  });
}

function calculateTime(t1, t2, t3) {
  const start = new Date(); // Record the start time

  // Chain the promises sequentially
  return wait1(t1)
    .then(() => wait2(t2))
    .then(() => wait3(t3))
    .then(() => {
      const end = new Date(); // Record the end time
      return end.getTime() - start.getTime(); // Return the time taken in milliseconds
    });
}

module.exports = calculateTime;
