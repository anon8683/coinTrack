function main() {
	const main = document.getElementsByTagName("main")[0];
	main.innerHTML = `					<div>left hand stuff</div>
    <div class="portfolioSide">
        <div class="mainTop">
            <div class="topLeftSide">
                <h1 id="totalValue">$5,234.23</h1>
                <div id="trendingTriangle">▲</div>
                <h4 id="trendAmount">$252.20 (0.25%)</h4>
            </div>
            <button id="addHoldingButton">+</button>
        </div>
        <div id="holdingsTable"></div>

    </div>`;
}

export default main;
