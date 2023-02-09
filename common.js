/*     Перша дія     */
const finish = 10;
const arrStep= [];

for (let i = 0; i <= finish; ){
    const step = 20 + i;
    arrStep.push(step);
    i += 0.5;
}
alert(`Ось числа від 20 до 30 через крок 0.5 = ${arrStep.join(',  ')}`);



/*     Друга дія     */
const oneDollar = 27;
const arrDollar = [];
let user= 10 ;
let sum;
for(let i = 0; i < user; i++){
    sum = oneDollar * user;
    arrDollar.push(`${user} = ${sum} `);
     user=user +10;

     if(user===110){
        break
     }
}
alert(`Ось дані з розрахунком вартості $ в гривні: ${arrDollar.join(` ,`)}`);



/*     Третя дія     */

const f = function*(n) {
    const limit = Math.min(100, Math.sqrt(n));
    let i = 1;
    while (i <= limit) {
        yield i++;
    }
}

const arr= [];

let N = +prompt('Вкажіть ціле число.')

if(Number.isInteger(N) && N > 0){
    for (const x of f(N)) {
        arr.push(x);
    }
    alert(`Всі цілі числа від 1 до 100, квадрат яких не перевищує числа ${N}.\n${arr.join(',  ')}`)
}else {
    alert(`Ви ввели не валідні дані.`)
}



/*     Четверта дія     */

const nNew = +prompt('Введить ціле число.');

if(Number.isInteger(nNew)){

    alert(`Дякую, ви ввели ціле число = ${nNew}`)

    function primeNumber(num) {
            for (let i = 2; i < num; i++) {
                if (num % i === 0) {
                    return alert(`${nNew} = складене число.`);
                }
            }
            return alert(`${nNew} = просте число.`);
    }
}else {
    alert('Ви ввели не валідні дані.');
}

primeNumber(nNew);


/*     П'ята дія     */

const numberFromUser = +prompt(`Введіть число яке дорівнює або більше 3.`);

let i= 1;
let result;

if(numberFromUser >= 3) {

    for (let j= 2; i < j; i++, j++) {
        const exponent = Math.pow(3, i);
         result = numberFromUser === exponent
        console.log(exponent)
        console.log(i)
        console.log(result)
        if (result ){
            break
        }
        if(j === numberFromUser || exponent === Infinity){
            break
        }
    }
    if (result) {
        alert(`Число ${numberFromUser} можливо отримати шляхом зведення числа 3 у ${i} ступінь.`)

    } else {
        alert(`Число ${numberFromUser} неможлово отримати зведення числа 3 у ступінь.`)
    }
} else {
    alert(`Ви ввелі не валядні дані.\nВведіть число яке дорівнює або більше 3.`)
}


