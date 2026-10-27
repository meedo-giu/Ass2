
import { items } from "./items.js";

export function renderItems(list) {
  const listElement = document.querySelector("#list");

  listElement.replaceChildren();

  list.forEach((item) => {
    const li = document.createElement("li");
    li.className = "goods-item";
    li.textContent = `${item.name} - ${item.price} EGP`;
    listElement.append(li);
  });
}

export function matching() {
  return items.filter((item) => item.category === "bags");
}

export function start() {
  renderItems(items);

  const button = document.querySelector("#select");

  button.addEventListener("click", () => {
    renderItems(matching());
  });
}

