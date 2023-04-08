function createLayout() {
	const body = document.getElementsByTagName("body")[0];
	body.innerHTML = `<div id="grid-container">
    <header></header>
    <main></main>
    <footer></footer>
</div>`;
}

export default createLayout;
