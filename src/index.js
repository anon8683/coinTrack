import header from "./header";
import main from "./main";
import createLayout from "./layout";
import addHoldingPopup from "./addHoldingPopup";
import "./style.css";
import { card } from "./addCard";
import showNews from "./news";
import showPortfolio from "./portfolio";
import showMarkets from "./markets";

window.holdings = [];
window.total = 0;
window.yesterdayTotal = 0;

createLayout(); //creates grid that containers header,main,footer
header(); // adds header
main();

const buttons = Array.from(document.getElementsByTagName("button")); //all our buttons

buttons.forEach((btn) => {
	btn.addEventListener("click", (e) => {
		const marketButton = document.getElementById("marketButton");
		const newsButton = document.getElementById("newsButton");
		const portfolioButton = document.getElementById("portfolioButton");

		let buttonClicked = document.getElementById(`${btn.id}`);
		buttonClicked.setAttribute("class", "navButton active");

		switch (btn.id) {
			case "portfolioButton":
				showPortfolio();
				newsButton.setAttribute("class", "navButton");
				marketButton.setAttribute("class", "navButton");
				break;

			case "marketButton":
				showMarkets();
				newsButton.setAttribute("class", "navButton");
				portfolioButton.setAttribute("class", "navButton");
				break;

			case "newsButton":
				showNews();
				marketButton.setAttribute("class", "navButton");
				portfolioButton.setAttribute("class", "navButton");
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
