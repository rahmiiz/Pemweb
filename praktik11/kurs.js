function hitungKurs() {
    let jumlahDollar = document.getElementById("Dollar")
    const kursDollar = 14650

    jumlahDollar = parseInt(jumlahDollar.value);

    let Dollar = jumlahDollar * kursDollar

    // hasil pada elemen output
    hasilKurs.innerHTML = Dollar
}