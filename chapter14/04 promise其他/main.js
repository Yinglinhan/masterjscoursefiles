const fn = () =>
  new Promise((resolve, reject) => {
    console.log(1);
    resolve("success");
  });

console.log("start");

fn().then(res => {
  console.log(res);
});

// start 1 sucess 
