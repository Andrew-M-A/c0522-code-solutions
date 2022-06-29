let count = 3;
const intervalCount = setInterval(countdown, 1000);

function countdown() {
  console.log(count);
  count--;
  if (count === 0) {
    console.log('Blast Off!');
    clearInterval(intervalCount);
  }
}
