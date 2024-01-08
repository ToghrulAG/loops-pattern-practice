//                                           * * * * * * * * *
//                                           * * * * * * * * *
//                                           * * * * * * * * *
//                                           * * * * * * * * *
//                                           * * * * * * * * *
//                                           * * * * * * * * *
//                                           * * * * * * * * *
//                                           * * * * * * * * *

// Bir sertde 8 eded stun ve 9 eded setr var, loop 9 * 8 == 87 eded ulduz edir, 
// Mentiqle her 9 ulduzdan sonra biz bir setr asagi dusmeliyik.
// Aglima basqa sey gelmediyi ucun  i elementinin 9-a bolunduyu zaman 0 alinarsa bu dussun deye kod yazdim
// Neticede her setrde 9 eded ulduz olur ve istediyimiz forma duzelir 

let result = '';
for(let i = 1; i <= 9 * 8; i++) {
    result += ' *'
    if(i % 9 == 0) {
        result += '\n';
    }
}
console.log(result)


