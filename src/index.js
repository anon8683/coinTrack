import header from "./header";
import createLayout from "./layout";
import "./style.css";

createLayout();
header();

const button = document.getElementById("portfolioButton");
button.addEventListener("click", function () {
	console.log("clicked");
});
