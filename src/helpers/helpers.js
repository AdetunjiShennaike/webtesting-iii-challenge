//testing help.asyncThing

export const asyncThing = function (cb) {
  return new Promise((resolve) => {
    setTimeout(() => {
      cb(); //add a spy
      resolve();
    },1000) //pause the test
  })
}