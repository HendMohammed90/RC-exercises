function hourglassSum(arr: number[][]): number {
    let maxSum: number = Number.MIN_SAFE_INTEGER;
    for (let rows = 0; rows < arr.length - 2; rows++) {
        for (let cols = 0; cols < arr[rows].length - 2; cols++) {
            let firstItem = arr[rows][cols];
            let secondItem = arr[rows][cols + 1];
            let thirdItem = arr[rows][cols + 2];
            let fourthItem = arr[rows + 1][cols + 1];
            let fifthItem = arr[rows + 2][cols];
            let sixthItem = arr[rows + 2][cols + 1];
            let seventhItem = arr[rows + 2][cols + 2];
            let hourglassSum = firstItem + secondItem + thirdItem + fourthItem + fifthItem + sixthItem + seventhItem;
            maxSum = Math.max(maxSum, hourglassSum);
        }
    }
    return maxSum;
}

// function hourglassSum(arr: number[][]): number {
//     // Write your code here
//     let result: number[] = [];
//     for( let rows=0 ; rows<arr.length-2 ;rows++){
//         for(let cols = 0 ; cols<arr[rows].length-2 ; cols++){
//             let firstItem =arr[rows][cols];
//             let secondtItem =[rows][cols+1];
//             let thirdtItem =[rows][cols+2]; 
//             let fortItem = arr[rows+1][cols+1];
//             let fifthtItem =arr[rows+2][cols];
//             let sixtItem =arr[rows+2][cols+1];   
//             let seventhItem =arr[rows+2][cols+3]; 
//             let result = firstItem + secondtItem + thirdtItem + fortItem +  fifthtItem + sixtItem + seventhItem ;
//             result.push(result)  ;
//         }
//     }
//     return Math.max(...result);
// }