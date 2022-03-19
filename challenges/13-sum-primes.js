'use strict';
// CHALLENGE : SUM ALL PRIMES
// Pass in a number to loop up to and add all of the prime numbers. A prime number is a whole number greater than 1 whose only factors are 1 and itself
// ex. sumAllPrimes(10) == 17
// prime numbers : 1,2,3,5,7,11,13,17
function sumAllPrimes(num){
    let total = 0;
    
    function checkForPrime(i){
        for(let j=2; j<i;j++){
            if(i % j === 0){
                return false;
            }
        }
        return true;
    }

    for(let i=2; i<=num;i++){
        if(checkForPrime(i)){
            total += i;
        }
    }
    return total;
}

console.log(sumAllPrimes(10));