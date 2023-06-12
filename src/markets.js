import createMarketTable from "./createMarketTable";

function showMarkets() {
	const news = document.getElementById("news");
	const main = document.querySelector("main");
	const portfolio = document.querySelector(".portfolioSide");
	const market = document.getElementById("market");

	if (news) {
		news.style.display = "none";
		main.style.display = "grid  ";
	}
	main.style.gridTemplateColumns = "1fr";
	portfolio.style.display = "none";
	market.style.display = "flex";

	createMarketTable();
	return;
}

export default showMarkets;
