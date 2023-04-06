'use strict';

/*
 * Complete the 'sockMerchant' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY ar
 */

function sockMerchant(n: number, ar: number[]): number {
    // Write your code here
    const myMap = new Map<number, number>();
    for (let i = 0; i < ar.length; i++) {
        let num: number = ar[i];
        if (myMap.has(num)) {
            myMap.set(num, myMap.get(num) + 1);
        } else {
            myMap.set(num, 1);
        }
    }
    let pairCount: number = 0;
    myMap.forEach((value, key) => {
        if (value >= 2) {
            pairCount += Math.floor(value / 2);
        }
    });

    return pairCount;

}
