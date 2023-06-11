import closeform from "./closeform";
import { card } from "./addCard";
import createCoin from "./table";
import adjustStorage from "./adjustStorage";

function addHoldingPopup() {
	// const content = document.getElementsByClassName("portfolioSide")[0];
	const content = document.getElementsByTagName("main")[0];
	const popup = document.createElement("div");
	popup.setAttribute("id", "popUpForm");
	popup.innerHTML = ` 
  <div class="form-popup" id="form">
  
  <form action="#" method="post" class="form-container" id="form1">
<button type="button" id="closed">x</button>
    <div class="input">
					<label for="ticker">Coin:</label>
					<input
						placeholder="$ticker"
						class="input-style"
						id="symbol"
						type="text"
						name="ticker"
					/>
				</div>

    <div class="input">
    <label for="ticker">Amount:</label>
      <input
        placeholder="quantity"
        class="input-style"
        id="amount"
        type="text"
      />
    </div>

    <div class="input">
    <label for="ticker">Price:</label>
      <input
        placeholder="price"
        class="input-style"
        id="price"
        type="number"
      />
    </div>
    
    <div class="input">
    <label for="ticker">Date</label>
      <input
        placeholder="Date&Time"
        class="input-style"
        id="date"
        type="datetime-local"
      />
    </div>

    <button type="button" class="btn" id="submit">Add coin</button>
  </form>
</div>`;
	content.appendChild(popup);

	document.getElementById("closed").addEventListener("click", (e) => {
		closeform();
	});

	document.getElementById("submit").addEventListener("click", (e) => {
		holdings.push(createCoin());
		adjustStorage();
		card();
		closeform();
	});
}

export default addHoldingPopup;
