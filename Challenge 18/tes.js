const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


let str;
let str2;
let str3;
let str4;
let count = 0;
function name() {
    console.log(count);
    
    
    rl.on('line', (param) => {
        console.log(count);
        rl.on('line', (param2) => {
            console.log(count);
            
            rl.on('line', (param3) => {
                console.log(count);
                
                rl.on('line', (param4) => {
                    count++;
                    str = param;
                    str2 = param2;
                    str3 = param3;
                    str4 = `hai ${param4}`
                    console.log(str, str2,str3 );
                    console.log(str4);
                    
                });
            });
        });
    });
}

name()

function name2(){
    rl.on('line', (th) => {
        console.log('haha')

    });
}
function name3(){
    rl.on('line', (th) => {
        console.log('haha')

        
    });
}
function name4(){
    rl.on('line', (th) => {
        console.log('haha')

        
    });
}