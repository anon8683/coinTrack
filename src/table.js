function table() {
	let coins = [];
	const symbol = document.getElementById("symbol").value;
	const price = document.getElementById("price").value;
	const amount = document.getElementById("amount").value;

	class Coin {
		constructor(symbol, price, amount) {
			this.symbol = symbol;
			this.price = price;
			this.amount = amount;
		}

		get info() {
			return `${this.symbol}, ${this.price}`;
		}
	}

	function addCoin() {
		const coin = new Coin(symbol, price, amount);
		return coin;
	}
	return addCoin();
}
export default table;
