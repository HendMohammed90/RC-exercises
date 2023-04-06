
function alternatingCharacters(s: string): number {
    // Write your code here
    let deletions:number = 0 ;
    for (let i = 0 ; i < s.length ; i++){
        if(s[i] == s[i+1]){
            deletions++;
        }
    }
    return deletions;

}
