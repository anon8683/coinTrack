function createCoin() {
	const symbol = document.getElementById("symbol").value.toUpperCase();
	const price = document.getElementById("price").value;
	const amount = document.getElementById("amount").value;
	const coin = new Coin(symbol, price, amount);

	class Coin {
		constructor(symbol, price, amount) {
			this.symbol = symbol;
			this.price = price;
			this.amount = amount;
		}
	}

	function addCoinToStorage() {}

	return coin;
}

export default createCoin;
