//1----------------------------------
function delayTwoSeconds(func) {
    setTimeout(func, 2000);
}

function echo() {
    console.log('привет!');
}

delayTwoSeconds(echo)

//2----------------------------------
const myPromise = new Promise((resolve, reject) => {
    resolve(1);
});

myPromise.then(result => {
    console.log(result);
});

//3----------------------------------
const anotherPromise = new Promise((resolve, reject) => {
    reject('Promise failed');
});

anotherPromise.catch(errorMessage => {
    console.log(errorMessage);
});

//4----------------------------------
function promiseNumber(number) {
    if (typeof number !== 'number') {
        return Promise.reject(new Error('Аргумент должен быть числом'));
    };
    return new Promise(resolve => {
        resolve(number);
    });
};

// Проверяем на валидных данных
promiseNumber(42).then(result => {
    console.log(result);
}).catch(err => {
    console.error(err.message);
});

// Проверяем с невалидной переменной (строка)
promiseNumber('not a number').then(result => {
    console.log(result);
}).catch(err => {
    console.error(err.message);
});