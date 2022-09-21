let url =
  "https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=koushik";

let input = document.getElementById("input");
let btn = document.getElementById("submit");
let img = document.getElementById("img");
let mainDiv = document.getElementById("main");
let generateQRcode = () => {
  //   btn.innerText = "Generate QR Code...";

  mainDiv.style.height = "520px";
  let inputValue = input.value;
  //   console.log(inputValue);
  let url = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${inputValue}`;
  img.src = url;
  img.style.display = "block";
};
btn.addEventListener("click", () => {
  generateQRcode();
});
