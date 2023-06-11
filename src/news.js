function showNews() {
	const main = document.querySelector("main");
	const portfolio = document.querySelector(".portfolioSide");
	const newsContent = document.createElement("div");
	newsContent.setAttribute("id", "news");
	newsContent.innerHTML = `<iframe width="100%" height="100%" src="https://rss.app/embed/v1/magazine/ttuHzBuubMKI6cb8" frameborder="0"></iframe>`;

	// const header = document.querySelector("header");
	// const newMain = document.createElement("main");
	// main.remove();
	// header.insertAdjacentElement("afterend", newMain);

	portfolio.style.display = "none";
	main.style.display = "block";
	main.append(newsContent);

	// main.innerHTML = `<iframe width="100%" height="100%s" src="https://rss.app/embed/v1/wall/ttuHzBuubMKI6cb8" frameborder="0"></iframe>" type="text/javascript" async></script>`;
}

export default showNews;
