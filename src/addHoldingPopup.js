import closeform from "./closeform";
import table from "./table";

function addHoldingPopup() {
	const content = document.getElementsByClassName("portfolioSide")[0];
	const popup = document.createElement("div");
	popup.setAttribute("id", "popUpForm");
	popup.innerHTML = ` <div class="form-popup" id="form">
    <form action="#" method="post" class="form-container" id="form1">
      <button type="button" id="closed" ">X</button>
      <div class="input">
        <input
          type="text"
          name="symbol"
          id="symbol"
          placeholder="symbol"
        />
      </div>
      <div class="input">
        <input
          type="text"
          name="amount"
          id="amount"
          placeholder="Quantity"
        />
      </div>
      <div class="input">
        <input
          type="number"
          name="price"
          id="price"
          placeholder="price"
        />
      </div>
      <button type="button" class="btn" id="submit">
        Add book
      </button>
    </form>
  </div>`;
	content.appendChild(popup);
	document.getElementById("closed").addEventListener("click", (e) => {
		closeform();
	});

	document.getElementById("submit").addEventListener("click", (e) => {
		table();
		holdings.push(table());
		closeform();
	});
}

export default addHoldingPopup;
