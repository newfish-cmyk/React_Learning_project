const numbers = [1,2,3,4,5,6];

const doubledNumbers = numbers.reduce((acc, num) => {
    acc.push(num * 2);
    return acc;
},[]);

console.log(doubledNumbers);