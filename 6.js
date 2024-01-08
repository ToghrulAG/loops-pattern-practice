//                                            * * * * * * * * *
//                                            * * * * * * * *
//                                            * * * * * * *
//                                            * * * * * *
//                                            * * * * *                                           
//                                            * * * *
//                                            * * *
//                                            * *
//                                            *
//  


// 1-CI USUL  

// 1.js FAYLINDAKI ANLATMANIN BIR TIK TERS VERSIYASIDIR
// BURDA ISE ITERASIYA 10-DAN BASLAYIR VE 0-A KIMI DEVAM EDIR, HER ITERASIYADA ULDUZLAR i-nin SAYI QEDER TEKRARLANIR

for (let i = 10; i > 0; i--) {
    let row = ' *'.repeat(i);
    console.log(row);
}

console.log("------------------------------------------")

// 2-CI USUL

// BIRINCI LOOPDAKI i AZALDIQCA, IKINCI LOOPDAKI j, i-NIN QIYMETINE QEDER COXALIR;
// HER DEFE IKINCI LOOPUN ITERASIYASI BITENDEN SONRA BIRINCI LOOP AZALIR, VE YENIDEN IKINCI LOOP ISE DUSDUKDE
// BIRINCI LOOPUN QIYMETINE  QEDER DAVAM EDIR VE BITDIKDE CONSOLE-A CAVAB YAZDIRILIR
// result DEYISKENINI COLDE YAZMAMAGIMIZIN MEQSEDI, HER result+= * OLDUQDA UST USTE YAZMAMASIDIR
// result DEYISKENININ ICERDE YAZDIGIMIZA GORE HER DEFE IKINCI LOOPUN ITERASIYASI BITENDE BIZE CONSOLEYE CAVAB GELIR
// VE YENI LOOP BASLADIQDA result DEYISKENI SIFIRLANIR :)

for(let i = 10; i > 0; i--){
    let result = ''
    for(let j = 0; j < i; j++ ){
        result += " *";
    }
    console.log(result)
}
