// Soal 5.
let data = [5, 9, 6, 7, 9, 8, 10, 7, 8];
document.write("Data Nilai = ");
document.write(data, "<br>");
// Mean
let mean = 0;
for (let i = 0; i < data.length; i++) {
  mean += data[i];
}
document.write("Mean = ");
document.write((mean / data.length).toFixed(2), "<br><hr>");
