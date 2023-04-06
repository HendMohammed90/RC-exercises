function hourglassSum(arr) {
    var maxSum = Number.MIN_SAFE_INTEGER;
    for (var rows = 0; rows < arr.length - 2; rows++) {
        for (var cols = 0; cols < arr[rows].length - 2; cols++) {
            var firstItem = arr[rows][cols];
            var secondItem = arr[rows][cols + 1];
            var thirdItem = arr[rows][cols + 2];
            var fourthItem = arr[rows + 1][cols + 1];
            var fifthItem = arr[rows + 2][cols];
            var sixthItem = arr[rows + 2][cols + 1];
            var seventhItem = arr[rows + 2][cols + 2];
            var hourglassSum_1 = firstItem + secondItem + thirdItem + fourthItem + fifthItem + sixthItem + seventhItem;
            maxSum = Math.max(maxSum, hourglassSum_1);
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
