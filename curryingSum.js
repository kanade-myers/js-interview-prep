// Каррирование функции. Функция может принимать несколько аргументов за раз. Всего аргументов 5.

const curring = () => {
    return function curringResult (...nums) {
        if (nums.length >= 5) {
            const [a,b,c,d,e] = nums
            return a+b+c+d+e
        }
        return function (...nextNums) {
            const numsArr = [...nums, ...nextNums]
            return curringResult(...numsArr)
        }
    }
}

const curringSum = curring()

console.log(curringSum(1,1,1)(1,1))
