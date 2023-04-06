
/*
 * Complete the 'countingValleys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER steps
 *  2. STRING path
 */

function countingValleys(steps: number, path: string): number {
    // Write your code here
    //declare two variables one for check vales and other for check elevetor:
    let vali: number = 0;
    let elevetor: number = 0;
    for (let i = 0; i < path.length; i++) {
        if (path[i] == 'D') {
            elevetor--;
        } else {
            if (elevetor == -1) {
                vali++;
            }
            elevetor++;
        }
    }
    return vali;

}