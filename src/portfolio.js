function showPortfolio() {
	const main = document.querySelector("main");
	const news = document.getElementById("news");
	const portfolio = document.querySelector(".portfolioSide");
	if (news) {
		// news element exists
		news.style.display = "none";
		portfolio.style.display = "flex";
		main.style.display = "grid";
	}
}

export default showPortfolio;
