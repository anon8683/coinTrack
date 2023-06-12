function main() {
	const main = document.getElementsByTagName("main")[0];
	main.innerHTML = `					
    <div id="leftHand"><rssapp-wall id="bFRl5r97EmOYCovg"></rssapp-wall><script src="https://widget.rss.app/v1/wall.js" type="text/javascript" async></script></div>
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
  <div id=market><script src="https://price-static.crypto.com/latest/public/static/widget/index.js"></script> <div id="crypto-widget-CoinList" data-design="classic" data-coin-ids="1,166,136,382,1120"></div></div>
  
</div>


    </div>`;
}

export default main;
