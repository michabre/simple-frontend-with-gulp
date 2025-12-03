const compute = document.getElementById("compute");

const update = (value) => {
  const answer = document.getElementById("answer");
  answer.innerHTML = value;
};

compute.addEventListener("click", (event) => {
  event.preventDefault();
  const x = document.getElementById("var_x").value;
  const op = document.getElementById("selectedOperation").value;
  const y = document.getElementById("var_y").value;
  update(Calculator(op, x, y));
});
