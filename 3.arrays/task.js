function compareArrays(arr1, arr2) {
    if (arr1.length === arr2.length) {
        return arr1.every((item, index) => item === arr2[index]);
    }
    return false;
}

function getUsersNamesInAgeRange(users, gender) {
    if (users.length === 0 && gender != "женский" && gender != "мужской") {
        return 0;
    }
    
    return users.filter((user) => user.gender === gender)
    .map(user => user.age)
    .reduce((acc, age, index, arr) => acc + age / arr.length, 0);
}