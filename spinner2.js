
const symbols = ['|', '/', '-', '\\', '|']
// const wordsTry = "This is a list of words";

const animation = function(stepList) {
  // console.log(typeof stepList);
  let steps = stepList.length;
  let timer = 100;
  for (let i = 0; i < steps; i++) {
    setTimeout(() => {
      process.stdout.write(`\r${stepList[i]}   `)
    }, timer)
    timer += 300;
  }
  setTimeout(() => {
    process.stdout.write('\n');
  }, timer);
};

animation(symbols);
// animation(wordsTry);