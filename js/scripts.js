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

const operations = (var_x, var_y) => {
  return {
    add: () => {
      return var_x + var_y;
    },
    subtract: () => {
      return var_x - var_y;
    },
    multiply: () => {
      return var_x * var_y;
    },
    divide: () => {
      return var_x / var_y;
    },
  };
};

const Calculator = (operation, value_1, value_2) => {
  return operations(Number(value_1), Number(value_2))[operation]();
};
