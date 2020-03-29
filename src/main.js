import x from "./x.js";
import png from "./images/1.png";
console.log(x);
const div = document.getElementById("fuck");
div.innerHTML = `<img src="${png}">`;

const button = document.createElement("button");
button.innerText = "我他妈的是懒加载哦";
button.onclick = () => {
  const promise = import("./lazy.js");
  promise.then(
    module => {
      const fn = module.default;
      fn();
    },
    () => {
      console.log("模块加载错误");
    }
  );
};
div.appendChild(button);
