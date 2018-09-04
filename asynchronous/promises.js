function tra_tien_em_anh_oi() {
    return new Promise(function(resolve, reject) {
        var isHappy = Math.random() >= 0.5;
        if (isHappy) {
            var tien = 1000;
            return resolve(tien); //  Promise dc fulfilled  
        }

        var reason = 'lịt pẹ bố dek trả đấy làm gì nhau';
        reject(reason); //  Promise ở trạng thái reject
    });
}

function nhau_an_mung(tien) {
    console.log("Tien nhau duoc: " + tien);
    return new Promise(function(resolve, reject) {
        var tienMaxa = tien - 400;
        return resolve(tienMaxa)
    })
}

function mat_xa(tien) {
    console.log("Tien mat xa duoc: " + tien);
    return new Promise(function(resolve, reject) {
        var tienConLai = 0;
        return resolve(tienConLai)
    })
}

function hue_oi(tien) {
    console.log("Tien con lai " + tien);
}

tra_tien_em_anh_oi().then(function(tiennhau) {
    return nhau_an_mung(tiennhau);
}).then(function(tienmatxa) {
    return mat_xa(tienmatxa);
}).then(function(tienconlai) { // het tien 
    return hue_oi(tienconlai);
}).catch(function(reason) {
    console.log(reason);
});

tra_tien_em_anh_oi()
    .then(tiennhau => nhau_an_mung(tiennhau))
    .then(tienmatxa => mat_xa(tienmatxa))
    .then(tienconlai => hue_oi(tienconlai))
    .catch(reason => console.log(reason))


e_nhau_khong().then(uong_ruou).then(hut_thuoc).then(ve_nha).then(console.log)
e_nhau_khong().then(function() {
    return Promise.all([
        uong_ruou(),
        hut_thuoc()
    ])
}).then(ve_nha).catch(console.error.bind(console))