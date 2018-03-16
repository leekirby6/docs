// function con_tho_an_co(){
//     setTimeout(() => {
//         console.log('ăn cỏ');
//     }, 1000);
// }

// function chui_vao_hang(){
//     console.log('chui vào hang');
// }

// con_tho_an_co();
// chui_vao_hang();

function con_tho_an_co(callback007) {
    setTimeout(() => {
        console.log('ăn cỏ');
        callback007();
    }, 1000);
}

function chui_vao_hang() {
    console.log('chui vào hang');
}

function di_ngu() {
    console.log('đi ngủ');
}
// var callback = () => chui_vao_hang();

// con_tho_an_co(callback);

con_tho_an_co(() => {
    chui_vao_hang();
    di_ngu()
});