
/*
 * Complete the 'makeAnagram' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. STRING a
 *  2. STRING b
 */

function makeAnagram(a: string, b: string): number {
    // Write your code here
    let deletedChar: number = 0;
    let myMapOfA = new Map<string, number>();
    let myMapOfB = new Map<string, number>();

    for (let i = 0; i < a.length; i++) {
        let aChar: string = a[i];
        if (myMapOfA.has(aChar)) {
            myMapOfA.set(aChar, myMapOfA.get(aChar) + 1);
        } else {
            myMapOfA.set(aChar, 1);
        }
    }
    for (let j = 0; j < b.length; j++) {
        let bChar: string = b[j];
        if (myMapOfB.has(bChar)) {
            myMapOfB.set(bChar, myMapOfB.get(bChar) + 1);
        } else {
            myMapOfB.set(bChar, 1);
        }
    }
    // Compare values of each key in both maps
    myMapOfA.forEach((value, key) => {
        if (myMapOfB.has(key)) {
            deletedChar += Math.abs(value - myMapOfB.get(key));
            myMapOfB.delete(key);
        } else {
            deletedChar += value;
        }
    });

    // Add remaining values in myMapOfB
    myMapOfB.forEach((value, key) => {
        deletedChar += value;
    });

    return deletedChar;

}