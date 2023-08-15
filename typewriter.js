const sentence = "hello there from lighthouse labs";
let i = 0;

for (const char of sentence) {
  setTimeout(() => {
    // print the char here
    //console.log(char);
    process.stdout.write(char);
  }, 500 * i);
  i += 1;
}
// <= 1s delay to make it noticeable. Can dial it down later.