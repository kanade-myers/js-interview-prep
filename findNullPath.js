// получить массив с путями полей, значение которых равно null

const data = {
    user: {
        name: "Alice",
        age: null,
        info: {
            email: null,
            city: "Paris",
        },
    },
    settings: {
        theme: null,
    },
    debug: null,
};

const findNullPaths = (obj, path = "") => {
    let nulls = new Array();
    for (let key in obj) {
        const currentPath = path ? path + "." + key : key;
        if (obj[key] === null) {
            nulls.push(currentPath);
        } else if (typeof obj[key] === "object") {
            nulls.push(...findNullPaths(obj[key], currentPath));
        }
    }
    return nulls;
};

console.log(findNullPaths(data));
// [
//     "user.age",
//     "user.info.email",
//     "settings.theme",
//     "debug"
// ]
