let inputs = document.querySelectorAll(".controls input");

function handleUpdates() {
  const suffix = this.dataset.sizing || "";
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
  document.documentElement.style.setProperty(`${base}`, base.value);
}

inputs.forEach((input) => {
  input.addEventListener("mousemove", handleUpdates);
});
