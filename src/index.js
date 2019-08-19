import _ from "lodash";
import "./style.css";
import logo from "./lta-logo.png";

function component() {
  const element = document.createElement("div");

  element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.classList.add("hello");

  //   Add the image to our existing div
  const myLogo = new Image();
  myLogo.src = logo;

  //   element.appendChild(myLogo);
  return element;
}

document.body.appendChild(component());
