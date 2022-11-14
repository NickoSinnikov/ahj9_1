export default function animationExtension() {
  const button = document.querySelector(".button-collapse");
  const textEl = document.querySelector(".text");

  button.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("click");
    textEl.classList.toggle("text-hidden");
    textEl.style.height === "0px"
      ? ((textEl.style.height = "150px"), (textEl.style.padding = "7px"))
      : ((textEl.style.height = "0px"), (textEl.style.padding = "0px"));
  });
}
animationExtension();
