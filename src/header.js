function header() {
	const header = document.getElementsByTagName("header")[0];
	header.innerHTML = `<div id="header-flex">
	<div class="joined">
		<div class="flex-left">
			<img id="logo" src="/repos/coinTrack/src/img/logo.svg" alt="#" />
			<h3>CoinTracker</h3>
		</div>
		<div class="buttonsLeft">
			<button id="portfolioButton" class="navButton">Portfolio</button>
			<button id="marketButton" class="navButton">Markets</button>
			<button id="newsButton" class="navButton">News</button>
		</div>
	</div>
	<h4>flex right</h4>
</div>
	`;
}

export default header;
