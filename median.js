// Median
let sortir = data.sort(function median(a, b) {
  return a - b;
});
document.write(`Urutan data dari yang terkecil =  ${sortir}`);
// let median = sortir.splice(4,1)
let median = sortir;
if (median.length % 2 === 0) {
  document.write(
    "<br>",
    "Median dari data di atas adalah",
    (median[(1 / 2) * median.length - 1] + median[(1 / 2) * median.length]) / 2
  );
} else {
  document.write(
    `<br> Median dari data di atas adalah =  ${
      median[(1 / 2) * (median.length + 1)]
    }`
  );
}
