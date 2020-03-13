import _ from "lodash";
import "./style.css";
import Icon from "./icon.jpg";
import Data from "./data.xml";

function component() {
  const element = document.createElement("div");

  // lodash，现在由此脚本导入
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.classList.add("hello");

  // 将图像添加到我们已经存在的 div 中。
  const myIcon = new Image();
  myIcon.src = Icon;

  // 使用了两次 icon ，一次作为节点插入，一次作为元素背景（style.css里面）
  element.appendChild(myIcon);

  console.log(Data);

  return element;
}

document.body.appendChild(component());
