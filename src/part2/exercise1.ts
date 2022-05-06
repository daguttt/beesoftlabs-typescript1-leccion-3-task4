const myPromise6 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("success");
  }, 500);
});

const getResult6 = async () => {
  const result = await myPromise6;
  console.log("This is a " + result);
};

getResult6();
