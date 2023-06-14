import closeform from "./closeform";
import editHolding from "./editHolding";

function editPopUp(id) {
	const holdingToEdit = holdings[id];
	console.log(holdingToEdit);

	const content = document.getElementsByTagName("main")[0];
	const popup = document.createElement("div");
	popup.setAttribute("id", "popUpForm");
	popup.innerHTML = `
  <div class="form-popup" id="form">
  <form action="#" method="post" class="form-container" id="form1">
    <button type="button" id="closed">x</button>
    <div class="input">
      <label for="ticker">Editting ${holdingToEdit.symbol} holding</label>

      <div class="radio">
        <input
          checked=""
          value="male"
          name="gender"
          id="buy"
          type="radio"
          label="Buy"
        />
        <input
          value="female"
          name="gender"
          id="female"
          type="radio"
          label="Sell"
        />
      </div>
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
    <button type="button" class="btn" id="editSubmit">Edit Holding</button>
  </form>
</div>
  `;

	content.appendChild(popup);

	const amount_input = document.getElementById("amount");
	const price_input = document.getElementById("price");

	const inputs = Array.from(document.querySelectorAll("input"));
	const submit = document.getElementById("editSubmit");

	inputs.forEach((input) => {
		input.addEventListener("change", (e) => {
			validateForm(input.id);
		});
	});

	document.getElementById("closed").addEventListener("click", (e) => {
		closeform();
	});

	submit.addEventListener("click", (e) => {
		let amount = document.getElementById("amount").value;
		let price = document.getElementById("price").value;
		let choice = document.getElementById("buy").checked;
		if (!amount_input.validity.valid || !price_input.validity.valid) {
			e.preventDefault();
			return;
		}
		editHolding(holdingToEdit, choice, amount, price, id);
		closeform();
	});
}

function validateForm(input) {
	switch (input) {
		case "amount":
			validateAmount();
			break;

		case "price":
			validatePrice();
			break;
	}
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

export default editPopUp;
