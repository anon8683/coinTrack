function showMarkets() {
	const news = document.getElementById("news");
	const main = document.querySelector("main");
	const portfolio = document.querySelector(".portfolioSide");
	const market = document.getElementById("market");

	if (news) {
		news.style.display = "none";
		main.style.display = "grid";
	}
	main.style.gridTemplateColumns = "minmax(250px, 20vw) minmax(600px, 1fr)";

	portfolio.style.display = "none";
	// main.style.display = "block";

	function createMarket() {
		const market = document.createElement("div");
		market.setAttribute("id", "market");
		market.innerHTML = `<script src="https://price-static.crypto.com/latest/public/static/widget/index.js"></script> <div id="crypto-widget-CoinList" data-design="classic" data-coin-ids="1"></div>
        `;
		main.appendChild(market);
	}

	if (!market) {
		createMarket();
	}

	return;
}

export default showMarkets;
