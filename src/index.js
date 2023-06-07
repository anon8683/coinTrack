import header from "./header";
import main from "./main";
import createLayout from "./layout";
import table from "./table";
import addHoldingPopup from "./addHoldingPopup";
import closeform from "./closeform";
import "./style.css";
import card from "./addCard";

createLayout(); //creates grid that containers header,main,footer
header(); // adds header
main();

window.holdings = [];
window.total = 0;
window.yesterdayTotal = 0;
document.getElementById("addHoldingButton").addEventListener("click", (e) => {
	addHoldingPopup();
});

function getStorage() {
	let saved_coins = JSON.parse(localStorage.getItem("coins")).filter((n) => n);
	return saved_coins;
}

window.addEventListener("load", (e) => {
	if (localStorage.getItem("coins") != null) {
		window.coins = getStorage();
		for (let i = 0; i < coins.length; i++) {
			const element = coins[i];
			holdings.push(element);
			card();
		}
	}
});

// when user clicks + button,
// get the amount of holdings and SYMOBL
// fetch data from api of that SYMBOL
// calculte holding value, calc total portfolio value

//get info from our user from popup when + is clicked
//store our symbol, amount, price purchased, as an object
//put those objects into table
