function createLayout() {
	const body = document.getElementsByTagName("body")[0];
	body.innerHTML = `<div id="grid-container">
    <header></header>
    <content>
    <script type="text/javascript" src="https://files.coinmarketcap.com/static/widget/coinMarquee.js"></script><div id="coinmarketcap-widget-marquee" coins="1,1027,825,1839,1975,52,2010,74,3890,11841,5426" currency="USD" theme="dark" transparent="true" show-symbol-logo="true"></div>
    </content>
    <main></main>
    <footer></footer>
</div>`;
}

export default createLayout;
