import { numberWithCommas } from "./addCard";

function createMarketTable() {
	const market = document.getElementById("market");
	const marketTable = document.createElement("div");
	const table = document.getElementById("marketTable");
	const width = window.innerWidth;
	marketTable.setAttribute("id", "marketTable");

	if (table) {
		return; //if table is arleady there return
	}

	marketTable.innerHTML = `<table>
    <thead>
      <tr>
        <th class="thRank">#</th>
        <th class="thCoin">Coin</th>
        <th class="thPrice">Price</th>
        <th class="thChange">Change 24h</th> 
        <th class="thMcap">Market Cap</th>
        <th class="thVolume">Volume</th>
        <th class="thPriceGraph">Price Graph</th>
      </tr>
    </thead>
    <tbody>
      <!-- Table rows will be dynamically populated with data -->
    </tbody>
  </table>`;

	market.append(marketTable);

	//for each item in our fetchresult, create a table row etc etc
	fetchMarketData();
}

async function fetchMarketData() {
	const dataUrl =
		"https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d%2C30d&locale=en";

	const dataResponse = await fetch(dataUrl);
	const data = await dataResponse.json();

	for (let index = 0; index < data.length; index++) {
		const element = data[index];
		console.log(element);
		const table = document.querySelector("tbody");
		const item = document.createElement("tr");

		item.setAttribute("id", `coin${index}`);
		item.setAttribute("class", "coinItem");
		item.setAttribute(
			"onClick",
			`redirectTo('https://www.coingecko.com/en/coins/${element.name.toLowerCase()}')`
		);

		let currentPrice = element.current_price.toFixed(2);

		if (currentPrice > 1000) {
			currentPrice = element.current_price.toFixed(0);
		}

		item.innerHTML = `
        
                <td class="rank">${index + 1}</td>
                <td class="coin"><img src="${element.image}" class="cellLogo">${
			element.name
		}</td>
                <td class="tablePrice">$${numberWithCommas(currentPrice)}</td>
				<td class="tablePriceChange">${element.price_change_percentage_24h.toFixed(
					1
				)}%</td>
				<td class="tableMcap">$${millsOrBills(element.market_cap)}</td>
				<td class="tableVolume">$${numberWithCommas(element.total_volume)}</td>
				<td class="tableGraph">graph</td>
			
        
        `;
		item.addEventListener("click", function () {
			console.log(item.id);
		});
		table.append(item);
	}
}

function millsOrBills(number) {
	if (number > 999999 && number < 1000000000) {
		//mill
		const stringNumber = number.toString().slice(0, -6);
		return stringNumber + "M";
	}

	const billions = (number / 1e9).toFixed(1);
	return billions + "B";
}

export default createMarketTable;
