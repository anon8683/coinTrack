import adjustStorage from "./adjustStorage";
import editPopUp from "./editPopUp";
function card() {
	const x = holdings.length - 1;
	const portfolio = document.getElementsByClassName("portfolioSide")[0];
	const holdingCard = document.createElement("div");

	holdingCard.setAttribute("id", `${x}`);
	holdingCard.setAttribute("class", "holdingCard");
	holdingCard.innerHTML = `
		<div class="join">
			<div class="symbol">${holdings[x].symbol}</div>
			<div class="value" id="value${x}"></div>
		</div>
		<div class="join">
			<div class="heading" id="heading${x}">QTY</div>
			<div class="amount" id="amount${x}"></div>
		</div>
		<div class="join">
			<div class="heading" id="heading${x}">PnL</div>
			<div class="pnl" id="pnl${x}"></div>
		</div>
		<div class="join">
			<div class="heading" id="heading${x}">Price</div>
			<div class="price" id="price${x}"></div>
		</div>
		<div class="dropdown">
		<button class="modifyButton" >:</button>
		 <div class="dropdown-content">
		<button class="editButtons ${x}" id="buttonEdit${x}">Edit</a>
		<button class="editButtons ${x}" id="buttonDelete${x}"Yeah>Delete</a>
	  </div>`;

	portfolio.appendChild(holdingCard);

	//get the id of the first card then make headings visible

	checkFirstCardId();
	firstCardVisible();

	//get all our data for given ticker

	const ticker = `${holdings[x].symbol}`;
	getDataByTicker(ticker);

	async function getDataByTicker(ticker) {
		const coinsUrl = "https://api.coingecko.com/api/v3/coins/list";
		const coinsResponse = await fetch(coinsUrl);

		const coinsData = await coinsResponse.json();
		const coin = coinsData.find(
			(coin) => coin.symbol.toLowerCase() === ticker.toLowerCase()
		);

		const dataUrl = `https://api.coingecko.com/api/v3/coins/${coin.id}`;
		const dataResponse = await fetch(dataUrl);

		const data = await dataResponse.json();

		const logoUrl = data.image.small; //our logo
		let price = data.market_data.current_price.usd; // current price
		const price_change = data.market_data.price_change_24h; // prices 24 hours ago

		// Use the small logo URL as needed
		const card = document.getElementById(`${x}`);
		const logo = document.createElement("img");
		logo.setAttribute("src", `${logoUrl}`);
		logo.setAttribute("class", "holdingLogo");
		card.prepend(logo);

		const quantity = +holdings[x].amount; //the amount of coins you hold
		const value = price * quantity; // the value of coins you hold
		const pnl = value - holdings[x].price * quantity; // your pnl
		total += price * quantity; //adds value to portfolio value
		holdings[x].value = value; // adds value property to object
		holdings[x].market_price = price;
		holdings[x].price_change = price_change;
		yesterdayTotal += price_change * holdings[x].amount;

		displayTotalValue();
		displayValue(x, value);
		displayAmount(x, quantity);
		displayPnl(x, pnl);
		displayPrice(x, price);
		displayPriceChanges(x, price_change);

		return;
	}

	// add event listener to our buttons when the card is added

	const buttons = document.getElementsByClassName(`${x}`);
	const btns = Array.from(buttons);
	btns.forEach((btn) =>
		btn.addEventListener("click", (e) => {
			if (btn.id.includes("Delete")) {
				const cardToRemove = btn.id.slice(-1);
				removeCard(cardToRemove);
				removeHolding(cardToRemove);
				adjustStorage();
				const children = Array.from(portfolio.children);
				if (children.length < 2) {
					return;
				}
				firstCardVisible();
			}

			console.log(`${btn.id}`);
			const id = btn.id.slice(-1);
			editPopUp(id);
		})
	);

	// if the delete button is clicked, remove entire card from page
	// remove from holdings
	// remove from variables such as total and portfolio value etc

	function removeCard(cardToRemove) {
		const card = document.getElementById(`${cardToRemove}`);
		card.remove();
		return;
	}

	function removeHolding(cardToRemove) {
		total -= holdings[cardToRemove].value;
		yesterdayTotal -= holdings[cardToRemove].price_change;

		displayTotalValue();
		displayPriceChange();

		delete holdings[cardToRemove];
	}

	function checkFirstCardId() {
		//returns the id of the first card
		// that card should have the extra headings and CSS
		const children = Array.from(portfolio.children);
		const firstCardId = children[1].id;
		return firstCardId;
	}

	function checkLastCardId() {
		//returns the id of the first card
		// that card should have the extra headings and CSS

		const children = Array.from(portfolio.children);
		const length = children.length;
		const lastCardId = children[length - 1].id;

		return lastCardId;
	}

	function firstCardVisible() {
		//makes our headings visible on the first card and adjust border

		const allCards = Array.from(document.querySelectorAll(".holdingCard"));
		allCards.forEach((item) => (item.style.borderRadius = "0px"));

		const id = checkFirstCardId();
		const children = Array.from(portfolio.children);
		const holdingCard = document.getElementById(`${id}`);

		holdingCard.style.borderRadius = "0px";
		holdingCard.style.borderTopRightRadius = "10px";
		holdingCard.style.borderTopLeftRadius = "10px";

		const cards = document.querySelectorAll(`#heading${id}`);
		cards.forEach((card) => card.setAttribute("class", "visible"));

		const lastCard = document.getElementById(`${checkLastCardId()}`);
		lastCard.style.borderRadius = "0px";
		lastCard.style.borderBottomRightRadius = "10px";
		lastCard.style.borderBottomLeftRadius = "10px";

		if (children.length <= 2) {
			holdingCard.style.borderRadius = "10px";
		}

		if (window.innerWidth < 700) {
			allCards.forEach((item) => (item.style.borderRadius = "0px"));
		}
	}
}

function displayPriceChanges(amount, price_change) {
	const yesterdayValue = document.getElementById("trendAmount");
	const yesterdayTriangle = document.getElementById("trendingTriangle");
	let difference = price_change * amount;
	yesterdayTotal += difference;
	yesterdayValue.textContent = `${yesterdayTotal}`;

	let yesterdayA = total + yesterdayTotal;
	if (yesterdayTotal === 0) {
		yesterdayValue.textContent = "";
		yesterdayTriangle.textContent = "";
		return;
	}
	if (yesterdayTotal < 0) {
		//negative
		let percentage = ((total - yesterdayA) / total) * 100;
		yesterdayValue.textContent = `-$${numberWithCommas(
			yesterdayTotal.toFixed(0) * -1
		)} (${percentage.toFixed(2)}%)`;

		yesterdayValue.setAttribute("class", "loss");
		yesterdayTriangle.setAttribute("class", "loss");
		yesterdayTriangle.textContent = "▼";
		return;
	}

	if (yesterdayTotal > 0) {
		//positive
		let percentage = ((yesterdayA - total) / yesterdayA) * 100;
		yesterdayValue.textContent = `$${numberWithCommas(
			yesterdayTotal.toFixed(0)
		)} (${percentage.toFixed(2)}%)`;

		yesterdayValue.setAttribute("class", "profit");
		yesterdayTriangle.setAttribute("class", "profit");
		yesterdayTriangle.textContent = "▲";
		return;
	}
}

function displayPriceChange() {
	const yesterdayValue = document.getElementById("trendAmount");
	const yesterdayTriangle = document.getElementById("trendingTriangle");
	let yesterdayA = total + yesterdayTotal;
	if (yesterdayTotal === 0) {
		yesterdayValue.textContent = "";
		yesterdayTriangle.textContent = "";
		return;
	}

	if (yesterdayTotal < 0) {
		//negative
		let percentage = ((total - yesterdayA) / total) * 100;
		yesterdayValue.textContent = `-$${numberWithCommas(
			yesterdayTotal.toFixed(0) * -1
		)} (${percentage.toFixed(2)}%)`;

		yesterdayValue.setAttribute("class", "loss");
		yesterdayTriangle.setAttribute("class", "loss");
		yesterdayTriangle.textContent = "▼";
		return;
	}

	if (yesterdayTotal > 0) {
		//positive
		let percentage = ((yesterdayA - total) / yesterdayA) * 100;
		yesterdayValue.textContent = `$${numberWithCommas(
			yesterdayTotal.toFixed(0)
		)} (${percentage.toFixed(2)}%)`;

		yesterdayValue.setAttribute("class", "profit");
		yesterdayTriangle.setAttribute("class", "profit");
		yesterdayTriangle.textContent = "▲";
		return;
	}
}

function displayTotalValue() {
	const totalValue = document.getElementById("totalValue");
	totalValue.textContent = `$${total < 0 ? 0 : total.toFixed(0)}`;
	//if total is less than 0, display $0 instead of minus or NaN
}

function displayValue(x, value) {
	const valueBox = document.getElementById(`value${x}`);
	valueBox.textContent = `$${numberWithCommas(value.toFixed(1))}`;
}

function displayAmount(x, quantity) {
	const amountBox = document.getElementById(`amount${x}`);
	console.log(quantity);
	amountBox.textContent = `${numberWithCommas(quantity.toFixed(1))}`;
}

function displayPnl(x, pnl) {
	const pnlBox = document.getElementById(`pnl${x}`);
	pnlBox.textContent = `$${numberWithCommas(pnl.toFixed(0))}`;
	if (pnl < 0) {
		//you are negative, add loss class
		pnlBox.textContent = `-$${numberWithCommas(pnl.toFixed(0) * -1)}`;
		pnlBox.setAttribute("class", "loss");
		return;
	}

	pnlBox.setAttribute("class", "profit");
}

function displayPrice(x, price) {
	const priceBox = document.getElementById(`price${x}`);
	priceBox.textContent = `$${numberWithCommas(price)}`;
	priceBox.textContent = `$${+price.toFixed(
		price < 1 ? 4 : price < 5 ? 2 : 0
	)}`;
}

function numberWithCommas(x) {
	if (x < 1 && x > 0) {
		return x;
	}

	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
export {
	card,
	displayTotalValue,
	displayValue,
	displayAmount,
	displayPnl,
	displayPrice,
	displayPriceChanges,
	numberWithCommas,
};
