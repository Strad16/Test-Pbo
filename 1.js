let namaMenu = "Nasi Goreng";
let harga = 15000;
harga = -5000;
function cetakStruk() {
console.log("Menu: " + namaMenu + " | Harga: " + harga);
}
cetakStruk();

class Menu {
    #harga;

    constructor(nama, harga) {
        this.nama = nama;
        this.#harga = harga;
    }

    setHarga(hargaBaru) {
        if (hargaBaru < 0) {
            console.log("Error: Harga tidak valid!");
        } else {
            this.#harga = hargaBaru;
        }
    }

    tampilkan() {
        console.log(this.nama + " - Rp" + this.#harga);
    }
}


const mkn1 = new Menu("Sate", 20000);
mkn1.setHarga(-100); 
mkn1.tampilkan();   
