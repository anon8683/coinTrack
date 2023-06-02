import header from "./header";
import main from "./main";
import createLayout from "./layout";
import table from "./table";
import addHoldingPopup from "./addHoldingPopup";
import closeform from "./closeform";
import "./style.css";

createLayout(); //creates grid that containers header,main,footer
header(); // adds header
main();

window.holdings = [];

document.getElementById("addHoldingButton").addEventListener("click", (e) => {
	addHoldingPopup();
});

// const inputs = document.getElementsByClassName("inputs");
// document.getElementById("addHolding").addEventListener("click", (e) => {
// 	holdings.push(table());
// });

// Array.from(inputs).forEach((input) => {
// 	input.addEventListener("change", (e) => {
// 		holdings.push(table());
// 	});
// });

// document.getElementById("a").addEventListener("input", table());

// when user clicks + button,
// get the amount of holdings and SYMOBL
// fetch data from api of that SYMBOL
// calculte holding value, calc total portfolio value

//get info from our user from popup when + is clicked
//store our symbol, amount, price purchased, as an object
//put those objects into table
