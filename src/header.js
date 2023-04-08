function header() {
	const header = document.getElementsByTagName("header")[0];
	header.innerHTML = `<div id="header-flex">
	<div class="joined">
		<img id="logo" src="#" alt="#" />
		<h1>CoinTracker</h1>
	</div>
	<h4>flex right</h4>
</div>
	`;
}

export default header;
