const myPromise7 = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() >= 0.5) {
      resolve(1);
    } else {
      reject("An error has occurred");
    }
  }, 500);
});

const getResult7 = async () => {
  try {
    let result: number = (await myPromise7) as number;
    result = result + 1;
    console.log(result);
  } catch (err) {
    console.error(err);
  }
};
getResult7();
