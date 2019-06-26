// switch (process.argv) {
//     case 'android':
        
//         break;


//     case 'laptop':
//         break;
// }


switch(process.argv[2]){
    case 'add':
    console.log('ini add');
    break;
    
    case 'hapus':
    console.log('ini hapus');
    break;

    case undefined:
    console.log('list');
    
    break;
    
}

console.log(process.argv);