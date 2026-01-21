// Необходимо сгруппировать пользователей по возрасту (age).
// Для каждой группы посчитать средний балл (score).
// Вернуть объект, где ключ - возраст, значение - объект с двумя свойствами:
// users - массив пользователей этого возраста,
// avgScore - средний балл группы (число с точностью до двух знаков).

const users = [
    { name: "Alice", age: 25, score: 85 },
    { name: "Bob", age: 25, score: 90 },
    { name: "Charlie", age: 30, score: 70 },
    { name: "David", age: 30, score: 75 },
    { name: "Eve", age: 35, score: 88 },
];

const handleObj = (obj) => {
    const result = {};
    obj.forEach((e) => {
        const age = e.age
        if(!result.age) {
            result[age] = {users: [], avgScore: 0}
        }
        }
    );
    obj.forEach((e) => {
        for (let elem in result) {
            if (elem == e.age) {
                result[elem].users.push(e.name);
                result[elem].avgScore += e.score;
            }
        }
    });
    for (e in result) {
        result[e].avgScore = result[e].avgScore / result[e].users.length;
    }
    return result;
};

console.log(handleObj(users));
// {
//     25: {users: ["Alice", "Bob"], avgScore: 87.5},
//     30: {users: ["Charlie", "David"], avgScore: 72.5},
//     35: {users: ["Eve"], avgScore: 88}
// }
