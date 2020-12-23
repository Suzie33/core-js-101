function counter(num, step) {
  let value = num;
  return function() {
    value += step;
    return value;
  }
}

let counter1 = counter(0, 1);

console.log(counter1());
console.log(counter1());
console.log(counter1());

let counterFromZero = counter.bind(null, 0);


let a = {
  name: 'John'
};

function func() {
  console.log(this.name);
}

let func2 = func.bind(a)
func2()

function charsCounter(string) {
  // for (let i = 0; i < string.length; i++) {
  //   if (obj[string[i]]) {
  //     obj[string[i]] += 1;
  //   } else {
  //     obj[string[i]] = 1;
  //   }
  // }

return string.split('').reduce((accum, current) => {
    if (accum[current]) {
      accum[current] += 1;
    } else {
      accum[current] = 1;
    }

    return accum;
  }, {});
}

console.log(charsCounter('abracadabra'));

console.log('start');
setTimeout(() => console.log('timeout'));
const promise = new Promise((resolve, reject) => {
  setTimeout(resolve);
  console.log('inside promise');
});
promise
  .then(() => console.log('after promise'));

console.log('end')

