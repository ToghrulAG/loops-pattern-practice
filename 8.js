//                                      0, 1, 1, 2, 3, 5, 8, 13, ...

//                                            Fibonacci 

let N = 14;   // EDED Girin  

let fibo = [0, 1]; 
// num deyiskeninde yerine yetirdiyimiz alqoritmi (fibonaci dusturu) yazmaq ucun, ilkin olaraq 0,1 ededleri goturdum, daha sonra ise num deyiskeninde olan alqoritm hesablaya push edir..
// Ve yazdigimiz n deyerine qeder loop isleyir. Her defe loop isledikde deyerler push oluna-oluna artir.

for(let i = 2; i < N; i++) {
    let num =  fibo[i - 1] + fibo[i - 2];  
    fibo.push(num)
}
console.log(fibo)


