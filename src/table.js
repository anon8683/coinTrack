function table() {
	const symbol = document.getElementById("symbol").value.toUpperCase();
	const price = document.getElementById("price").value;
	const amount = document.getElementById("amount").value;

	//check if symbol entered is already in holdings
	// if it is, do not create a new holding, instead update the existing holding with the same symbol,
	// update the price and amount
	// refresh the card

	class Coin {
		constructor(symbol, price, amount) {
			this.symbol = symbol;
			this.price = price;
			this.amount = amount;
		}
	}

	function addCoin() {
		const coin = new Coin(symbol, price, amount);
		return coin;
	}

	return addCoin();
}
export default table;
