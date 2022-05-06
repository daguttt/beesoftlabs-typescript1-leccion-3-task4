const myPromise4: Promise<string> = new Promise((success, reject) => {
  setTimeout(() => {
    reject("error!");
  }, 1000);
});

async function getResult4() {
  try {
    const result = await myPromise4;
    console.log(result);
  } catch (err) {
    console.error(err);
  }
}

getResult4();
