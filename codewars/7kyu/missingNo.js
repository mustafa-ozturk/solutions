// https://www.codewars.com/kata/57f5e7bd60d0a0cfd900032d/
function missingNo(nums) {
    const sorted = nums.sort((a,b) => a - b);
    let min = sorted[0];
    let max = sorted[sorted.length - 1];
    for (let i = min; i < max; i++) {
      if(sorted[i] + 1 !== sorted[i + 1]) {
        return sorted[i] + 1
      }
    }
    return 0;
}