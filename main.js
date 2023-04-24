const buttons = document.querySelectorAll(".oBut");

buttons.forEach(button => {
  button.addEventListener("click", function() {
    let val = this.classList.toggle("on");
  });
});
