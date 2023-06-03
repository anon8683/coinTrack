function card() {
	const portfolio = document.getElementsByClassName("portfolioSide")[0];
	const holdingCard = document.createElement("div");
	const totalValue = document.getElementById("totalValue");
	const x = holdings.length - 1;

	holdingCard.setAttribute("id", `${x}`);
	holdingCard.setAttribute("class", "holdingCard");
	holdingCard.innerHTML = `

    
    <div class="symbol">${holdings[x].symbol}</div>
    <div class="value" id="value${x}"></div>
    <div class="amount">${numberWithCommas(holdings[x].amount)}</div>
    <div class="pnl" id="pnl${x}"></div>
    `;

	portfolio.appendChild(holdingCard);
	const valueBox = document.getElementById(`value${x}`);
	const pnlBox = document.getElementById(`pnl${x}`);

	function fetchData() {
		fetch(
			`https://api.binance.com/api/v3/avgPrice?symbol=${holdings[x].symbol}USDT`
		)
			.then((response) => response.json())
			.then((data) => {
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

				valueBox.textContent = `$${numberWithCommas(value.toFixed(2))}`;
				pnlBox.textContent = `$${numberWithCommas(pnl.toFixed(2))}`;
				totalValue.textContent = `$${numberWithCommas(total.toFixed(1))}`;
			});
	}

	fetchData();

	function numberWithCommas(x) {
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}
}

export default card;
