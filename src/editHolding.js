import adjustStorage from "./adjustStorage";
import { displayTotalValue, displayValue, numberWithCommas } from "./addCard";
function editHolding(holdingToEdit, amount, price, id) {
	const coin = holdingToEdit;
	console.log(total);
	const totalquantity = +amount + +coin.amount; // our total qty
	const market_price = coin.market_price; // price of coin
	const valueOfEdit = +market_price * +amount; // value of the edit

	total += valueOfEdit;

	// work out avg price
	const previousCost = coin.price * coin.amount;
	const editCost = amount * price;
	const totalCost = previousCost + editCost;
	const avgPrice = totalCost / totalquantity;

	// edit our coin objects values
	coin.price = avgPrice;
	coin.amount = totalquantity;
	coin.value = coin.value + valueOfEdit;
	adjustStorage();
	displayTotalValue();
	displayValue(id);
}
export default editHolding;
