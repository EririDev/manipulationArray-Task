// soal no.7
let dataNilai1 = [5, 9, 6, 7, 9, 8, 10, 7, 8];
let nilaiRataRata = dataNilai1.reduce((a, b) => a + b, 0);
let rataRata = (nilaiRataRata / dataNilai1.length).toFixed(2);
hitung1 = dataNilai1.map((k) => {
    return((k - rataRata))** 2  
})
const jumlah = hitung1.reduce((a, b) => a + b, 0);
const bagi = (jumlah / dataNilai1.length);
const rapihin = bagi.toFixed();
const akhir = (rapihin) => {
  return Math.sqrt(rapihin);
}
const akhirBeneran = akhir(rapihin)

document.write(`Simpangan Baku = ${akhirBeneran.toFixed(2)}`);

// document.write(`${sortir}<br>`);
// let rataRata = nilaiRataRata / dataNilai1.length.toFixed(2);
// document.write("mean = " + rataRata.toFixed(2), "<br>");
// for (let i = 0; i < dataNilai1.length; i++) {
//   document.write("(" + Math.abs((sortir[i] - rataRata).toFixed(2)) + ")", ",");
// }
// document.write(" = Data setelah dikurangi oleh mean <br>");
// let carikuadrat = [2.67, 1.67, 0.67, 0.67, 0.33, 0.33, 1.33, 1.33, 2.33];
// for (let i = 0; i < carikuadrat.length; i++) {
//   document.write("(" + (carikuadrat[i] ** 2).toFixed(2) + ")" + ",");
// }
// document.write(`= Data Setelah Dikuadratkan <br>`);
// let dijumlah = [7.13, 2.79, 0.45, 0.45, 0.11, 0.11, 1.77, 1.77, 5.43];
// let setelahjumlah = dijumlah.reduce((a, b) => a + b, 0);
// document.write(
//     2
//   ) + " = Simpangan Baku <br>"
// );
