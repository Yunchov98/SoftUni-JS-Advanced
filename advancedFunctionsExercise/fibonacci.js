function getFibonator() {
    let [firstNumber, secondNumber] = [0, 1];

    return () => {
        const sum = firstNumber + secondNumber;
        [firstNumber, secondNumber] = [secondNumber, sum];
        return firstNumber;
    };
}

let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13
