function showNews() {
	const news = document.getElementById("news");
	const main = document.querySelector("main");
	const portfolio = document.querySelector(".portfolioSide");
	const newsContent = document.createElement("div");
	const market = document.getElementById("market");

	if (news) {
		news.style.display = "block";
		market.style.display = "none";
		portfolio.style.display = "none";
		main.style.display = "block";
		console.log("ahhh");
		return;
	}

	newsContent.setAttribute("id", "news");
	newsContent.innerHTML = `<iframe width="100%" height="100%" src="https://rss.app/embed/v1/magazine/ttuHzBuubMKI6cb8" frameborder="0"></iframe>`;
	portfolio.style.display = "none";
	market.style.display = "none";
	main.style.display = "block";
	main.append(newsContent);
}

export default showNews;
