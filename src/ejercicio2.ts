const myPromise2: Promise<number> = new Promise((success, reject) => {
  setTimeout(() => {
    success(1);
  }, 1000);
});

async function getResult() {
  const result: number = await myPromise2;

  const result2 = result + 2;

  console.log("Result:", result2); // log: 'Result: 3'
}

getResult();
