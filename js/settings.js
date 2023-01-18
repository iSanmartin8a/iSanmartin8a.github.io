function copyEmail() {
  navigator.clipboard.writeText("isanmartin8a@gmail.com");
  document.getElementById("mensajeCopy").style.animation = "copy 6s forwards";
  setTimeout(() => {
    document.getElementById("mensajeCopy").style.animation = "";
  }, 6000);
}
