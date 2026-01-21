// Преобразовать функцию sum с помощью каррирования в
// последовательность функций, вызываемых с одним аргументом

// function sum(a, b, c, d) {
//     return a + b + c + d;
// }

function curry() {
    return (a) => {
        return (b) => {
            return (c) => {
                return (d) => {
                    return a+b+c+d
                }
            };
        };
    };
}

const curriedSum = curry();

console.log(curriedSum(1)(2)(3)(4)); // 10
