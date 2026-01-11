// реализовать нахождение n-го числа последовательности фибоначчи
// F = 0, 1, 1, 2, 3, 5, 8, 13, 21...

const n = 8;

const fibonacci = (n) => {
    if(n === 0) {
        return 0
    }
    if (n === 1) {
        return 1
    }
    let prev = 0
    let current = 1
    for(let i=2; i<n;i++) {
        let newCurrent = current + prev
        let newPrev = current
        prev = newPrev
        current = newCurrent
    }
    return prev+current
};

console.log(fibonacci(n));
