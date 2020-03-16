import _ from "lodash";

console.log(_.join(["a", "b", "c!"], " "));

if (process.env.NODE_ENV !== "production") {
  console.log("Looks like we are in development mode!");
}
function component() {
  const element = document.createElement("pre");

  return element;
}

document.body.appendChild(component());
