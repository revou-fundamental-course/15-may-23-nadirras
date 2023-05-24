
// hitung luas
function hitungLuas(){
    //assign variabel
    let x = document.getElementById("nilai-sisi").value
    //tulis rumus dalam variabel
    let hasil = x*x;
    //memberikan nilai yang sudah di input agar bisa ditampilkan di html
    document.getElementById("isi-nilai-sisi").innerHTML = x;
    document.getElementById("isi-nilai-sisi2").innerHTML = x;
    document.getElementById("hasil-hitungan").innerHTML = hasil;
}

//hitung keliling
function hitungKeliling(){
    let y = document.getElementById("nilai-sisi-keliling").value
    let hasil2 = 4*y;
    document.getElementById("isi-nilai-sisi3").innerHTML = y;
    document.getElementById("hasil-hitungan2").innerHTML = hasil2;
}

// Reset semua dari isi form hingga hasil
function tombolReset(){
    document.getElementById("isi-form").reset();
    document.getElementById("isi-nilai-sisi").innerHTML = "";
    document.getElementById("isi-nilai-sisi2").innerHTML = "";
    document.getElementById("hasil-hitungan").innerHTML = "";
    
}

function tombolReset2(){
    document.getElementById("isi-form2").reset();
    document.getElementById("isi-nilai-sisi3").innerHTML = "";
    document.getElementById("hasil-hitungan2").innerHTML = "";
}
