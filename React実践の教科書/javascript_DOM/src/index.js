const onClickAdd = () => {
  const texrEl = document.getElementById("add-text");
  const text = texrEl.value;

  textEl.value = "";

  const li = document.createElement("li");
  const div = document.createElement("div");

  const p = document.createElement("p");
  p.textContent = text;

  const button = document.createElement("button");
  button.textContent = "削除";

  button.addEventListener("click", () => {
    const deleteTarget = button.closest("li");
    document.getElementById("memo-list").removeChild(deleteTarget);
  });

  div.appendChild(p);
  div.appendChild(button);

  li.appendChild(div);

  document.getElementById("memo-list").appendChild(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
