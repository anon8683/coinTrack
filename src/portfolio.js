function showPortfolio() {
	const main = document.querySelector("main");
	const news = document.getElementById("news");
	const portfolio = document.querySelector(".portfolioSide");
	const market = document.getElementById("market");
	if (news) {
		// news element exists
		news.style.display = "none";
		portfolio.style.display = "flex";
		main.style.display = "grid";
		main.style.gridTemplateColumns = "minmax(250px, 20vw) minmax(600px, 1fr)";
	}

	if (market) {
		//market exists
		market.style.display = "none";
		portfolio.style.display = "flex";
		main.style.display = "grid";
		main.style.gridTemplateColumns = "minmax(250px, 20vw) minmax(600px, 1fr)";
	}
}

export default showPortfolio;
