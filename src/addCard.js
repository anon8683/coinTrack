function card() {
	const portfolio = document.getElementsByClassName("portfolioSide")[0];
	const holdingCard = document.createElement("div");
	const totalValue = document.getElementById("totalValue");
	const yesterdayValue = document.getElementById("trendAmount");
	const yesterdayTriangle = document.getElementById("trendingTriangle");
	const x = holdings.length - 1;

	//chatGPT to get the small logo

	//

	holdingCard.setAttribute("id", `${x}`);
	holdingCard.setAttribute("class", "holdingCard");
	holdingCard.innerHTML = `
    <div class="join">
		<div class="symbol">${holdings[x].symbol}</div>
		<div class="value" id="value${x}"></div>
	</div>
    <div class="amount">${numberWithCommas(holdings[x].amount)}</div>
    <div class="pnl" id="pnl${x}"></div>
	<div class="price" id="price${x}"></div>

	
    `;

	portfolio.appendChild(holdingCard);

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

		valueBox.textContent = `$${numberWithCommas(value.toFixed(1))}`;
		pnlBox.textContent = `$${numberWithCommas(pnl.toFixed(2))}`;
		priceBox.textContent = `$${numberWithCommas(price)}`;
		totalValue.textContent = `$${numberWithCommas(total.toFixed(0))}`;

		if (pnl < 0) {
			//you are negative, add loss class
			pnlBox.setAttribute("class", "loss");
			return;
		}

		pnlBox.setAttribute("class", "profit");

		console.log(logoUrl, price, price_change);

		const log = console.log;

		// adjust our 24h value

		yesterdayTotal += price_change * holdings[x].amount;
		let yesterdayA = total + yesterdayTotal;
		log(total);
		log(yesterdayTotal);
		log(yesterdayA);

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

		// if (yesterdayTotal < 0) {
		// 	// you're at a loss
		// 	let percentage = yesterdayTotal - total / yesterdayTotal;
		// 	console.log(percentage);
		// }

		//

		// yesterdayTotal += price_change * holdings[x].amount;
		// console.log(yesterdayTotal);
		// let yesterdayWorth = 0;
		// let percentage = 0;

		// if (yesterdayTotal < 0) {
		// 	yesterdayValue.setAttribute("class", "loss");
		// 	yesterdayTriangle.setAttribute("class", "loss");
		// 	yesterdayWorth = total + yesterdayTotal * -1;
		// 	percentage = (yesterdayWorth - total) / yesterdayWorth;
		// 	yesterdayTriangle.textContent = "▼";
		// 	yesterdayValue.textContent = `-$${numberWithCommas(
		// 		yesterdayTotal.toFixed(0) * -1
		// 	)} (${percentage.toFixed(2)}%)`;

		// 	return;
		// }
		// yesterdayValue.setAttribute("class", "profit");
		// yesterdayTriangle.setAttribute("class", "profit");

		// yesterdayWorth = total - yesterdayTotal;
		// percentage = total - (yesterdayWorth / total) * 100;
		// console.log(percentage);

		// yesterdayTriangle.textContent = "▲";
		// yesterdayValue.textContent = `$${numberWithCommas(
		// 	yesterdayTotal.toFixed(0) * -1
		// )} (${percentage.toFixed(2)}%)`;

		return logoUrl; // Returns the URL of the small logo
	}
}
export default card;
