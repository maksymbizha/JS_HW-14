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
alert(`Один доллар коштуе = ${oneDollar}грн.`)

const arrDollar = [];
let user= 10 ;
let sum;
for(let i = 0; i < user; i++){
    sum = oneDollar * user;
    arrDollar.push(`${user}$ = ${sum}грн \n`);
     user=user +10;

     if(user===110){
        break
     }
}
alert(`Ось дані з розрахунком вартості $ в гривні: \n${arrDollar.join(``)}`);



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

if(Number.isInteger(nNew) && nNew > 1){

    alert(`Дякую, ви ввели ціле число = ${nNew}`)

    function primeNumber(num) {
        if (num > 1) {

            for (let i = 2; i < num; i++) {
                if (num % i === 0) {
                    return alert(`${nNew} = складене число.`);
                }
            }
            return alert(`${nNew} = просте число.`);
        }
    }
}else {
    alert('Ви ввели не валідні дані.');
}

primeNumber(nNew);


/*     П'ята дія     */

let numberExponentiate = +prompt(`Введіть число яке дорівнює або більше 3.`);

if(numberExponentiate >= 3){
    if(numberExponentiate % 3 === 0){
        const x = numberExponentiate / 3;
        alert(`Число ${numberExponentiate} можливо отримати шляхом зведення числа 3 у ${x} ступінь.`)
    }else {
        alert(`Число ${numberExponentiate} неможлово отримати зведення числа 3 у ступінь.`)
    }
} else {
    alert(`Ви ввелі не валядні дані.\nВведіть число яке дорівнює або більше 3.`)
}




