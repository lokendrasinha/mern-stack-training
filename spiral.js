// generate spiral array of 4X4
function generateSpiralArray(n) {
    const result = Array.from({ length: n }, () => Array(n).fill(0));
    let left = 0, right = n - 1, top = 0, bottom = n - 1;
    let num = 1;

    while (left <= right && top <= bottom) {
        // Fill top row
        for (let i = left; i <= right; i++) {
            result[top][i] = num++;
        }
        top++;

        // Fill right column
        for (let i = top; i <= bottom; i++) {
            result[i][right] = num++;
        }
        right--;

        // Fill bottom row
        for (let i = right; i >= left; i--) {
            result[bottom][i] = num++;
        }
        bottom--;

        // Fill left column
        for (let i = bottom; i >= top; i--) {
            result[i][left] = num++;
        }
        left++;
    }

    return result;
}

const spiralArray = generateSpiralArray(4);
console.log(spiralArray);