function card() {
	const portfolio = document.getElementsByClassName("portfolioSide")[0];
	const holdingCard = document.createElement("div");
	const totalValue = document.getElementById("totalValue");
	const x = holdings.length - 1;

	//chatGPT to get the small logo
	async function getSmallLogoByTicker(ticker) {
		const coinsUrl = "https://api.coingecko.com/api/v3/coins/list";

		try {
			const coinsResponse = await fetch(coinsUrl);

			if (!coinsResponse.ok) {
				throw new Error(
					`Error ${coinsResponse.status}: ${coinsResponse.statusText}`
				);
			}

			const coinsData = await coinsResponse.json();
			const coin = coinsData.find(
				(coin) => coin.symbol.toLowerCase() === ticker.toLowerCase()
			);

			if (!coin) {
				console.log("No coin found for the given ticker");
				return null;
			}

			const logoUrl = `https://api.coingecko.com/api/v3/coins/${coin.id}`;
			const logoResponse = await fetch(logoUrl);

			if (!logoResponse.ok) {
				throw new Error(
					`Error ${logoResponse.status}: ${logoResponse.statusText}`
				);
			}

			const logoData = await logoResponse.json();
			return logoData.image.small; // Returns the URL of the small logo
		} catch (error) {
			console.error("An error occurred:", error);
			return null;
		}
	}

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
	{
		/* <div class="price" id="price${x}></div> */
	}
	portfolio.appendChild(holdingCard);

	const ticker = `${holdings[x].symbol}`;

	getSmallLogoByTicker(ticker).then((logoUrl) => {
		if (logoUrl) {
			console.log(logoUrl);
			// Use the small logo URL as needed
			const card = document.getElementById(`${x}`);
			const logo = document.createElement("img");
			logo.setAttribute("src", `${logoUrl}`);
			card.prepend(logo);
		} else {
			console.log("No logo found for the given ticker");
		}
	});

	const valueBox = document.getElementById(`value${x}`);
	const pnlBox = document.getElementById(`pnl${x}`);
	const priceBox = document.getElementById(`price${x}`);

	function fetchData() {
		fetch(
			`https://api.binance.com/api/v3/avgPrice?symbol=${holdings[x].symbol}USDT`
		)
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				let price = +data.price;
				console.log(price);
				if (price > 5) {
					price = price.toFixed(1);
					console.log(price);
				} else {
					price = price.toFixed(4);
					console.log(price);
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
			});
	}

	fetchData();
	yesterdayPrices();
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
				console.log(data.market_data.current_price.usd);
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
}

export default card;
