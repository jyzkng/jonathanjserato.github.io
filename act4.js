const myArray = [30, 15, 12, 21, 19 ];

const isLessThan100 = a => a.filter(e => +e === e && e < 18);

console.log(isLessThan100(myArray));