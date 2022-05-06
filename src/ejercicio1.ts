const myPromise = new Promise((res, rej) => {
  setTimeout(() => {
    res("Success");
  }, 850);
});

async function getResult1() {
  const result = await myPromise;
  console.log("Result:", result); // log: 'Result: Success'
}

getResult();
