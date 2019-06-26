function spiral(param1) {
    
    var matrix = [
        [ 1,  2,  3,  4,  5,  6],
        [ 7,  8,  9, 10, 11, 12],
        [13, 14, 15, 16, 17, 18],
        [19, 20, 21, 22, 23, 24],
        [25, 26, 27, 28, 29, 30],
        [31, 32, 33, 34, 35, 36]
    ];
    
    var endRow = matrix.length;
    var endColumn = matrix[0].length;
    var arr = [];
    
    spiralLoop(endRow, endColumn, matrix);

    /**
     * Function that loops in a spiral way trough a given matrix (clockwise)
     */
    function spiralLoop(endRow, endColumn, matrix) {
        let ii, startRow = 0, startColumn = 0, resultString = '';
        // row are 6
        // columns inside row are six

        while( startRow < endRow){
            for(ii = startColumn; ii < endColumn; ii++){
                arr.push(matrix[startRow][ii]);
            }

            startRow++;

            for (ii = startRow; ii < endRow; ++ii) {
                // resultString += matrix[i][endColumn - 1] + ' ';
                arr.push(matrix[ii][endColumn - 1]);
            }
            endColumn--;

            if( startColumn < endColumn ){
                for(ii = endColumn - 1; ii >= startColumn; --ii){
                    arr.push(matrix[endRow - 1][ii]);
                }
                endRow--;
            }

            // if( startColumn < endColumn ){
            //     for(ii = endColumn - 1; ii >= startColumn; --ii){
            //         arr.push(matrix[endRow - 1][ii]);
            //     }
            //     endRow--;
            // }
            
        }
        console.log(arr);
    }
    
}

spiral(5);