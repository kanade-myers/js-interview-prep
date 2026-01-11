// реализовать нахождение n-го числа последовательности фибоначчи с использованием рекурсии
// F = 0, 1, 1, 2, 3, 5, 8, 13, 21...

const n = 8;

const fibonacci = (n) => {
    if(n === 0) {
        return 0
    }
    if (n === 1) {
        return 1
    }
    return fibonacci(n-1) + fibonacci(n-2)
};

console.log(fibonacci(n));
