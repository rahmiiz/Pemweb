function jumlah(){
    let bil1 = document.getElementById("bil1").value;
    let bil2 = document.getElementById("bil2").value;
    let hasil = parseInt(bil1) + parseInt(bil2);
    console.log(hasil)

    let hasil_jumlah = document.getElementById("hsl");
    hasil_jumlah.innerHTML = hasil
}