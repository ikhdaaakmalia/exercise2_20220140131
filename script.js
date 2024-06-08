
var waktuElemen = document.getElementById("waktu");

function tampilkanWaktu() {
    var waktuSekarang = new Date();
    
    var jam = waktuSekarang.getHours();
    var menit = waktuSekarang.getMinutes();
    var detik = waktuSekarang.getSeconds();
    
    var waktuFormatted = jam + ":" + menit + ":" + detik;
    
    var pesan = "Sekarang jam: " + waktuFormatted;
    
    waktuElemen.textContent = pesan;
}

setInterval(tampilkanWaktu, 1000);



document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const nim = document.getElementById('nim').value;

    // Retrieve selected angkatan
    const angkatanElements = document.querySelectorAll('input[name="angkatan"]:checked');
    let angkatan = '';
    if (angkatanElements.length > 0) {
        angkatan = angkatanElements[0].value;
    }

    const divisi = document.getElementById('dvs').value;

    alert(`Nama Lengkap: ${name}\nNIM: ${nim}\nAngkatan: ${angkatan}\nDivisi: ${divisi}`);
});
