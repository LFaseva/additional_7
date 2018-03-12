module.exports = function solveSudoku(matrix){
    
    let res = searchZeros(matrix);
    if(res === true){
        return matrix;
    }
    
}

function searchZeros(matrix){
    for (let i = 0; i <= 8; i++) {
            for (let j = 0; j <= 8; j++) {
                if (matrix[i][j] === 0){
                    for (let k = 1; k <= 9; k++) {
                        if (checkMatrix(matrix, i, j, k)) {
                            matrix[i][j] = k;
                            b = searchZeros(matrix);
                            if (b) { return true; }
                            matrix[i][j] = 0;
                        }
                    }
                    return false;
                }
            }
        }
    return matrix;
};

function checkMatrix(matrix, i, j, k) {
    for (let a = 0; a <= 8; a++) {
        if (a != i && matrix[a][j] == k) {
            return false;
        }
    }
    for (a = 0; a <= 8; a++) {
        if (a != j && matrix[i][a] == k) {
            return false;
        }
    }

    let y = Math.floor((i / 3)) * 3,
        x = Math.floor((j / 3)) * 3;
    for (a = 0; a < 3; a++) {
        for (let b = 0; b < 3; b++) {
            if (a != i && b != j && matrix[y + a][x + b] == k){
                return false;
            }
        }
    }
    return true;
}
