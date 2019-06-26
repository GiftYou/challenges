function spiral(params) {
    let count = 0;
    let arr = [];

    let ii, jj;
    for(ii = 0; ii< params; ii++){
      arr[ii] = [];
      for(jj = 0; jj < params; jj++){
        arr[ii][jj] = count;
        count++;
      }
    }

    let x = 0, y = 0;
    let batasAtas = params;
    let batasBawah = 0;
    let ress = [];

    // ke kanan
    for(; x<= batasAtas; x++){
      ress.push(arr[y][x]);
    }
    

    // ke bawah
    for(y = 0; y< batasAtas; y++){
      ress.push(arr[y][x]);
    }
    console.log(x);
    
}

spiral(3);