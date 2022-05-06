const myPromise3: Promise<number> = new Promise((success, reject) => {
  setTimeout(() => {
    success(1);
  }, 1000);
});

async function getResult3() {
  const result = await myPromise3;

  const result2 = result + 2;

  return result2;
}

getResult3().then((result: number) => {
  console.log("Result:", result); // log: 'Result: 3'
});
