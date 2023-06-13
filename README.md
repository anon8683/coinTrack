# CoinTrack <img src="https://raw.githubusercontent.com/anon8683/coinTrack/f1b9102ac664ef94aa8f3839530aeaf1f1bb6b40/src/img/logo.svg" alt="Logo" width="50" height="50">

CoinTrack is a website designed to track your cryptocurrency portfolio holdings, provide real-time market data, and deliver crypto-related news.

The application utilizes the CoinGecko API to fetch data on the user's specified ticker (e.g., BTC) and adds it to their portfolio. It calculates the price and value of the entered holding, allowing users to efficiently manage their crypto assets.

The portfolio feature allows users to edit or delete holdings, triggering automatic updates to associated values.

## Features

- **Portfolio Tracking**: Users can add their crypto holdings to the portfolio and view the current market value of each holding. The application calculates and displays the price and total value of each holding.

- **Market Data**: The market page fetches data for the top 100 coins from CoinGecko. The data is parsed and presented in a table format, providing users with insights into the performance of various cryptocurrencies.

- **Scrolling Marquee**: CoinTrack includes a scrolling marquee, courtesy of CoinMarketCap, which displays information about the top coins. This feature ensures users stay up-to-date with the latest market trends.

- **Crypto News**: The news tab incorporates an RSS feed using rss.app, enabling users to access the latest crypto-related news articles. The feed keeps users informed about industry updates and trends.

## Technology Stack

- **Webpack**: The project is built using Webpack, a powerful bundling tool that efficiently manages dependencies and generates optimized bundles for deployment.

- **Dynamic Rendering**: CoinTrack employs JavaScript to dynamically render pages, allowing for a seamless user experience and efficient data updates.

- **[CoinGecko API](https://www.coingecko.com/en/api/documentation)**: CoinTrack utilizes the CoinGecko API to fetch real-time data on cryptocurrencies, including market prices, market caps, and other relevant information.

- **[CoinMarketCap Widget](https://coinmarketcap.com/widget/price-marquee/)**: CoinTrack integrates CoinMarketCap widgets to display live market data and price graphs of various cryptocurrencies.

- **[rss.app](https://rss.app/) RSS Feed**: CoinTrack leverages the rss.app service to incorporate an RSS feed, providing users with up-to-date crypto-related news articles.

## Installation

To run CoinTrack locally, follow these steps:

1. Clone the repository:

   ```shell
   git clone https://github.com/your-username/cointrack.git
   ```

2. Install the dependencies:

   ```shell
   cd cointrack
   npm install
   ```

3. Build the project:

   ```shell
   npm run build
   ```

4. Launch the application:

   ```shell
   npm start
   ```

5. Open your web browser and visit `http://localhost:3000` to access CoinTrack locally.

## Limitations

This project is made using CoinGecko's free API which has a rate call limit (10-30 calls /min depending on traffic conditions, see API docs). This means if you add multiple holdings in quick succession or refresh the page many times you will receive a net::ERR_FAILED 429 error, as CoinGecko have blocked access until the next 1 minute window. In a real production enviroment a API plan would be used.
