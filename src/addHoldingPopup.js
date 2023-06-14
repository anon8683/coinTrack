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
        required
        pattern="[A-Za-z]{3,5}"
      />
      <span class="symbolError"></span>
    </div>

    <div class="input">
      <label for="ticker">Amount:</label>
      <input
        placeholder="quantity"
        class="input-style"
        id="amount"
        type="text"
        required
        pattern="^\\d*\\.?\\d+$"
      />
      <span class="amountError"></span>
    </div>

    <div class="input">
      <label for="ticker">Price:</label>
      <input
        placeholder="price"
        class="input-style"
        id="price"
        type="text"
        required
        pattern="^\\d*\\.?\\d+$"
      />
      <span class="priceError"></span>
    </div>

    <div class="input">
      <label for="ticker">Date</label>
      <input
        placeholder="Date&Time"
        class="input-style"
        id="date"
        type="datetime-local"
      />
      <span class="dateError"></span>
    </div>

    <button type="submit" class="btn" id="submit">Add coin</button>
  </form>
</div>
  `;
	content.appendChild(popup);

	//add listeners to our inputs for validation

	const inputs = Array.from(document.querySelectorAll("input"));
	const submit = document.getElementById("submit");

	inputs.forEach((input) =>
		input.addEventListener("change", (e) => {
			console.log(input.id + "has changed");
			validateForm(input.id);
		})
	);

	const symbol_input = document.getElementById("symbol");
	const amount_input = document.getElementById("amount");
	const price_input = document.getElementById("price");
	const date_input = document.getElementById("date");

	document.getElementById("closed").addEventListener("click", (e) => {
		closeform();
	});

	submit.addEventListener("click", (e) => {
		if (
			!symbol_input.validity.valid ||
			!amount_input.validity.valid ||
			!price_input.validity.valid ||
			!date_input.validity.valid
		) {
			e.preventDefault();
			return;
		}

		holdings.push(createCoin());
		adjustStorage();
		card();
		closeform();
	});
}

function validateForm(input) {
	switch (input) {
		case "symbol":
			console.log("symbole has changed");
			validateSymbol();
			break;

		case "amount":
			console.log("amount has changed");
			validateAmount();
			break;

		case "price":
			console.log("price has changed");
			validatePrice();
			break;
		case "date":
			console.log("symqweqweqebole has changed");
			validateDate();
			break;
	}
}

function validateSymbol() {
	const symbol_input = document.getElementById("symbol");

	if (symbol_input.validity.valid) {
		document.querySelector(".symbolError").textContent = "✅";
		symbol_input.classList.remove("invalid");
		symbol_input.classList.add("valid");
		return;
	}
	document.querySelector(".symbolError").textContent = "❌";
	symbol_input.classList.remove("valid");
	symbol_input.classList.add("invalid");
}

function validateAmount() {
	const amount_input = document.getElementById("amount");
	if (amount_input.validity.valid) {
		document.querySelector(".amountError").textContent = "✅";
		amount_input.classList.remove("invalid");
		amount_input.classList.add("valid");
		return;
	}
	document.querySelector(".amountError").textContent = "❌";
	amount_input.classList.remove("valid");
	amount_input.classList.add("invalid");
}

function validatePrice() {
	const price_input = document.getElementById("price");
	if (price_input.validity.valid) {
		document.querySelector(".priceError").textContent = "✅";
		price_input.classList.remove("invalid");
		price_input.classList.add("valid");
		return;
	}
	document.querySelector(".priceError").textContent = "❌";
	price_input.classList.remove("valid");
	price_input.classList.add("invalid");
}

function validateDate() {
	const date_input = document.getElementById("date");
	if (date_input.validity.valid) {
		document.querySelector(".dateError").textContent = "✅";
		date_input.classList.remove("invalid");
		date_input.classList.add("valid");
		return;
	}
	document.querySelector(".dateError").textContent = "❌";
	date_input.classList.remove("valid");
	date_input.classList.add("invalid");
}

export default addHoldingPopup;
