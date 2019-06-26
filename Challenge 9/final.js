function spiral(params) {
    var matrix = [
        [0, 1, 2, 3, 4],
        [5, 6, 7, 8, 9],
        [10, 11, 12, 13, 14],
        [15, 16, 17, 18, 19],
        [20, 21, 22, 23, 24],
    ];
    
    
    var endRow = matrix.length;
    var endColumn = matrix[0].length;
    
    spiralLoop(endRow, endColumn, matrix);
    
    
    /**
     * Function that loops in a spiral way trough a given matrix (clockwise)
     */
    function spiralLoop(endRow, endColumn, matrix2) {
        var i, startRow = 0, startColumn = 0;
        var arr = []
    
        while (startRow < endRow && startColumn < endColumn) {
            /* Loop the first row from the remaining rows */
            for (i = startColumn; i < endColumn; ++i) {
                //resultString += matrix2[startRow][i] + ' ';
                arr.push(matrix[startRow][i]);
            }
            startRow++;
     
            /* Loop the last column from the remaining columns */
            for (i = startRow; i < endRow; ++i) {
                //resultString += matrix2[i][endColumn - 1] + ' ';
                arr.push(matrix[i][endColumn - 1]);
            }
            endColumn--;
     
            /* Loop the last row from the remaining rows */
            if (startRow < endRow) {
                for (i = endColumn - 1; i >= startColumn; --i) {
                    //resultString += matrix2[endRow - 1][i] + ' ';
                    arr.push(matrix[endRow - 1][i]);
                }
                endRow--;
            }
    
            /* Loop the first column from the remaining columns */
            if (startColumn < endColumn) {
                for (i = endRow - 1; i >= startRow; --i) {
                    //resultString += matrix2[i][startColumn] + ' ';
                    arr.push(matrix[i][startColumn]);
                }
                startColumn++;
            }
            console.log(arr);
        }
    }
    
    var matrix2 = [
        [0, 1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10, 11],
        [12, 13, 14, 15, 16, 17],
        [18, 19, 20, 21, 22, 23],
        [24, 25, 26, 27, 28, 29],
        [30, 31, 32, 33, 34, 35],
        
    ];
    
    var endRow = matrix2.length;
    var endColumn = matrix2[0].length;
    
    spiralLoop(endRow, endColumn, matrix2);
    
    
    /**
     * Function that loops in a spiral way trough a given matrix2 (clockwise)
     */
    function spiralLoop(endRow, endColumn, matrix2) {
        var i, startRow = 0, startColumn = 0;
        var arr2 = [] ;
    
        while (startRow < endRow && startColumn < endColumn) {
            /* Loop the first row from the remaining rows */
            for (i = startColumn; i < endColumn; ++i) {
                //resultString += matrix2[startRow][i] + ' ';
                arr2.push(matrix2[startRow][i]);
            }
            startRow++;
     
            /* Loop the last column from the remaining columns */
            for (i = startRow; i < endRow; ++i) {
                //resultString += matrix2[i][endColumn - 1] + ' ';
                arr2.push(matrix2[i][endColumn - 1]);
            }
            endColumn--;
     
            /* Loop the last row from the remaining rows */
            if (startRow < endRow) {
                for (i = endColumn - 1; i >= startColumn; --i) {
                    //resultString += matrix2[endRow - 1][i] + ' ';
                    arr2.push(matrix2[endRow - 1][i]);
                }
                endRow--;
            }
    
            /* Loop the first column from the remaining columns */
            if (startColumn < endColumn) {
                for (i = endRow - 1; i >= startRow; --i) {
                    //resultString += matrix2[i][startColumn] + ' ';
                    arr2.push(matrix2[i][startColumn]);
                }
                startColumn++;
            }
        }
    
        console.log(arr2);
    }
    
    var matrix3 = [
        [0, 1, 2, 3, 4, 5, 6],
        [7, 8, 9, 10, 11, 12, 13],
        [14, 15, 16, 17, 18, 19, 20],
        [21, 22, 23, 24, 25, 26, 27],
        [28, 29, 30, 31, 32, 33, 34],
        [35, 36, 37, 38, 39, 40, 41],
        [42, 43, 44, 45, 46, 47, 48],
    ];
    
    
    var endRow = matrix3.length;
    var endColumn = matrix3[0].length;
    
    spiralLoop(endRow, endColumn, matrix3);
    
    
    /**
     * Function that loops in a spiral way trough a given matrix3 (clockwise)
     */
    function spiralLoop(endRow, endColumn, matrix3) {
        var i, startRow = 0, startColumn = 0;
        var arr3 = [];
    
        while (startRow < endRow && startColumn < endColumn) {
            /* Loop the first row from the remaining rows */
            for (i = startColumn; i < endColumn; ++i) {
                //resultString += matrix3[startRow][i] + ' ';
                arr3.push(matrix3[startRow][i]);
            }
            startRow++;
     
            /* Loop the last column from the remaining columns */
            for (i = startRow; i < endRow; ++i) {
                //resultString += matrix3[i][endColumn - 1] + ' ';
                arr3.push(matrix3[i][endColumn - 1]);
            }
            endColumn--;
     
            /* Loop the last row from the remaining rows */
            if (startRow < endRow) {
                for (i = endColumn - 1; i >= startColumn; --i) {
                   // resultString += matrix3[endRow - 1][i] + ' ';
                   arr3.push(matrix3[endRow - 1][i]);
                }
                endRow--;
            }
    
            /* Loop the first column from the remaining columns */
            if (startColumn < endColumn) {
                for (i = endRow - 1; i >= startRow; --i) {
                   // resultString += matrix3[i][startColumn] + ' ';
                   arr3.push(matrix3[i][startColumn]);
                }
                startColumn++;
            }
        }
    
        console.log(arr3);
    }
    
}

spiral(6);