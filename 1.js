//                                              *
//                                              * *
//                                              * * *
//                                              * * * *
//                                              * * * * *
//                                              * * * * * *
//                                              * * * * * * *
//                                              * * * * * * * *
//                                              * * * * * * * * *


// MAKS ULDUZ SAYI 9 OLDUGU UCUN

// REPEAT METODU OZUNDEN EVVEL OLAN SETRI COPY EDIB, ELAVE EDIR.
// DAHA ASAN DESEK, HER ITERASIYADA LOG ETDIYIMIZ DEYERI BIZE ELAVE EDIR.
// lOOP 1-DEN BASLAYIR VE 10-A KIMI DEVAM EDIR (9 DEFE TEKRARLANIR)

// 1-ci USUL  
for (let i = 1; i < 10; i++) {
    console.log(' *'.repeat(i));
};
console.log('----------------------------------------')

// BURDA SADECE OLARAQ 9DAN 0 OLANA KIMI AZALDIRIQ VE HER ITERASIYADA I NECE DEFE TEKRARLANIRSA
// O QEDER DE RESULT-DA MENIMSEYIRIK

// 2-ci USUL
let result = ''
for (let i = 9; i > 0; i--) {
    result += " *"
    console.log(result)
}

console.log('----------------------------------------')


// EYNI USULDUR, SADECE -- YERINE ++ OLUR :)
// 3-ci USUL 

let result2 = ''
for(let i = 0; i < 9; i++) {
    result2 += " *"
    console.log(result2)
}




