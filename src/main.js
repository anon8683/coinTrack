function main() {
	const main = document.getElementsByTagName("main")[0];
	main.innerHTML = `					<div>left hand stuff</div>
    <div class="portfolioSide">
        <div class="mainTop">
            <div class="topLeftSide">
                <h1 id="totalValue">$0</h1>
                <div id="trendingTriangle"></div>
                <h4 id="trendAmount"></h4>
            </div>
            <button id="addHoldingButton">+</button>
        </div>
  </div>
</div>

    </div>`;
}

export default main;
