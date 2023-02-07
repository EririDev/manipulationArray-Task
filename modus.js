// soal no.6
let nilaiModus = [5, 9, 6, 7, 9, 8, 10, 7, 8];
let susun = nilaiModus.sort(function modus(c, d) {
  return c - d;
});
document.write(`Data Nilai yang sudah urut = ${susun}`);
let modus = susun.splice(2, 6);
document.write(`<br> Modus dari data di atas adalah = ${modus} <hr>`);