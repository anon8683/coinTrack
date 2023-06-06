function card() {
	const x = holdings.length - 1;
	const portfolio = document.getElementsByClassName("portfolioSide")[0];
	const holdingCard = document.createElement("div");
	const totalValue = document.getElementById("totalValue");
	const yesterdayValue = document.getElementById("trendAmount");
	const yesterdayTriangle = document.getElementById("trendingTriangle");
	const log = console.log;
	//chatGPT to get the small logo

	//

	holdingCard.setAttribute("id", `${x}`);
	holdingCard.setAttribute("class", "holdingCard");
	holdingCard.innerHTML = `
		<div class="join">
			<div class="symbol">${holdings[x].symbol}</div>
			<div class="value" id="value${x}"></div>
		</div>
		<div class="join">
			<div class="heading" id="heading${x}">QTY</div>
			<div class="amount">${numberWithCommas(holdings[x].amount)}</div>
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
	checkFirstCardId();

	function checkFirstCardId() {
		//returns the id of the first card
		// that card should have the extra headings and CSS

		const children = Array.from(portfolio.children);
		const firstCardId = children[1].id;

		log(children, firstCardId);
		return firstCardId;
	}

	function firstCardVisible() {
		const card = document.getElementById(`heading${checkFirstCardId()}`);
		const cards = document.querySelectorAll(`#heading${checkFirstCardId()}`);
		console.log(cards);
		cards.forEach((card) => card.setAttribute("class", "visible"));
		// cards.setAttribute("class", "visible");
	}

	firstCardVisible();
	const ticker = `${holdings[x].symbol}`;
	getDataByTicker(ticker);
	const valueBox = document.getElementById(`value${x}`);
	const pnlBox = document.getElementById(`pnl${x}`);
	const priceBox = document.getElementById(`price${x}`);

	async function yesterdayPrices() {
		const coinsUrl = "https://api.coingecko.com/api/v3/coins/list";

		const coinsResponse = await fetch(coinsUrl);

		const coinsData = await coinsResponse.json();
		const coin = coinsData.find(
			(coin) => coin.symbol.toLowerCase() === ticker.toLowerCase()
		);

		fetch(
			`https://api.coingecko.com/api/v3/coins/${
				coin.id
			}/history?date=${getYesterdayDate()}&localization=false`
		)
			.then((response) => response.json())
			.then((data) => {
				yesterdayTotal +=
					data.market_data.current_price.usd * holdings[x].amount;
				return data.market_data.current_price.usd;
			});
	}
	function getYesterdayDate() {
		// work out price 24 hours ago

		let yesterday24 = Math.floor(new Date().getTime() / 1000.0) - 86400; //current time - 24 hours
		const date = new Date(yesterday24 * 1000);

		let day = date.getDate();
		let month = date.getMonth();
		let year = date.getFullYear();

		//our formatted date for api
		const yesterdayDate = `${day}-${month + 1}-${year}`;

		return yesterdayDate;
	}

	function numberWithCommas(x) {
		if (x < 1 && x > 0) {
			return x;
		}

		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}

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
		card.prepend(logo);

		// display our price
		if (price > 5) {
			price = price.toFixed(1);
		} else {
			price = price.toFixed(4);
		}

		const quantity = holdings[x].amount; //the amount of coins you hold
		const value = price * quantity; // the value of coins you hold
		const pnl = value - holdings[x].price * quantity; // your pnl
		total += price * quantity; //adds value to portfolio value
		holdings[x].value = value; // adds value property to object
		holdings[x].price_change = price_change * quantity;

		displayTotalValue();

		valueBox.textContent = `$${numberWithCommas(value.toFixed(1))}`;
		pnlBox.textContent = `$${numberWithCommas(pnl.toFixed(2))}`;
		priceBox.textContent = `$${numberWithCommas(price)}`;

		if (pnl < 0) {
			//you are negative, add loss class
			pnlBox.setAttribute("class", "loss");
			return;
		}

		pnlBox.setAttribute("class", "profit");

		// console.log(logoUrl, price, price_change);

		const log = console.log;

		// adjust our 24h value

		yesterdayTotal += price_change * holdings[x].amount;

		displayPriceChange();

		return logoUrl; // Returns the URL of the small logo
	}

	// add event listener to our buttons when the card is added

	const buttons = document.getElementsByClassName(`${x}`);
	const btns = Array.from(buttons);
	btns.forEach((btn) =>
		btn.addEventListener("click", (e) => {
			console.log(`${btn.id} got clicked`);

			if (btn.id.includes("Delete")) {
				const cardToRemove = btn.id.slice(-1);
				removeCard(cardToRemove);
				removeHolding(cardToRemove);
				firstCardVisible();
			}
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

	function displayPriceChange() {
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
		totalValue.textContent = `$${numberWithCommas(total.toFixed(0))}`;
	}

	function addHeadingsToSecond() {}
}
export default card;
// const portfolio = document.getElementsByClassName("portfolioSide")[0];
// const children = Array.from(portfolio.children);
