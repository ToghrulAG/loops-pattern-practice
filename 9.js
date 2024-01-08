//                                     1 X 1  = 1
//                                     1 X 10 = 10
//                                     ----------------

//                                     2 X 1  = 2
//                                     2 X 10 = 20
//                                     ----------------

//                                     10 X 10 = 100

// BIRINCI LOOPDA i DEYERI 1 OLANDA, IKINCI LOOP ISLEYEN ZAMAN BUTUN EDEDLERE VURULUR VE HER DEFE IKINCI LOOP BITDIKDE (BIR EDEDIN VURMA CEDVELI BITDIKDE) -------- QOYULUR.

for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`)
    }
    console.log('------------');
}