import header from "./header";
import main from "./main";
import createLayout from "./layout";
import addHoldingPopup from "./addHoldingPopup";
import "./style.css";
import { card } from "./addCard";
import showNews from "./news";
import showPortfolio from "./portfolio";

createLayout(); //creates grid that containers header,main,footer
header(); // adds header
main();

window.holdings = [];
window.total = 0;
window.yesterdayTotal = 0;

//rewrite buttons

const buttons = Array.from(document.getElementsByTagName("button")); //all our buttons

buttons.forEach((btn) => {
	btn.addEventListener("click", (e) => {
		switch (btn.id) {
			case "portfolioButton":
				showPortfolio();
				break;

			case "marketButton":
				break;

			case "newsButton":
				showNews();
				break;

			case "addHoldingButton":
				addHoldingPopup();
				break;
		}
	});
});

function getStorage() {
	let saved_coins = JSON.parse(localStorage.getItem("coins")).filter((n) => n);
	return saved_coins;
}

window.addEventListener("load", (e) => {
	const marqueeHeader = document.getElementsByClassName(
		"coin-marquee-header"
	)[0];
	marqueeHeader.remove();
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
