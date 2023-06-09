import githubLogo from "../src/img/github-mark.png";

function createLayout() {
	const body = document.getElementsByTagName("body")[0];
	body.innerHTML = `
    <div id="grid-container">
    <header></header>
    <content>
    <div id="coinmarketcap-widget-marquee" coins="1,1027,825,1839,1975,2010,5426,3890" currency="USD" theme="dark" transparent="true" show-symbol-logo="true"></div>
    </content>
    <main></main>
    <footer>
      <a href="https://github.com/anon8683/coinTrack">
        <img src="${githubLogo}" alt="github" class="github" />
      </a>
    </footer>
</div>`;
}

export default createLayout;
