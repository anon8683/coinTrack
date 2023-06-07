import adjustStorage from "./adjustStorage";
import {
	displayTotalValue,
	displayValue,
	displayAmount,
	displayPnl,
} from "./addCard";
function editHolding(holdingToEdit, choice, amount, price, id) {
	const coin = holdingToEdit;
	console.log(total);
	let totalquantity = +amount + +coin.amount; // our total qty
	const market_price = coin.market_price; // price of coin
	const valueOfEdit = +market_price * +amount; // value of the edit

	if (choice === true) {
		total += valueOfEdit;
	}

	if (choice === false) {
		total -= valueOfEdit;
		totalquantity = +coin.amount - +amount;
	}

	// work out avg price
	const previousCost = coin.price * coin.amount;
	const editCost = amount * price;
	const totalCost = previousCost + editCost;
	const avgPrice = totalCost / totalquantity;
	const positionCost = avgPrice * totalquantity;
	let pnl = market_price * totalquantity - positionCost;

	// edit our coin objects values
	coin.price = avgPrice;
	coin.amount = totalquantity;
	if (choice === true) {
		coin.value = coin.value + valueOfEdit;
	}
	if (choice === false) {
		pnl = market_price * totalquantity - previousCost;
		coin.value = coin.value - valueOfEdit;
		coin.price = price;
	}

	adjustStorage();
	displayTotalValue();
	displayValue(id, coin.value);
	displayAmount(id, coin.amount);
	displayPnl(id, pnl);
}

export default editHolding;
