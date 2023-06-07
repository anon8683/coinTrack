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
	<input checked="" value="male" name="gender" id="buy" type="radio" label="Buy">
	<input value="female" name="gender" id="female" type="radio" label="Sell">
	
</div>
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
    <label for="ticker">stfu:</label>
      <input
        placeholder="price"
        class="input-style"
        id="price"
        type="number"
      />
    </div>
    <button type="button" class="btn" id="editSubmit">Edit Holding</button>
  </form>
</div>`;

	content.appendChild(popup);
	document.getElementById("closed").addEventListener("click", (e) => {
		closeform();
	});

	document.getElementById("editSubmit").addEventListener("click", (e) => {
		let amount = document.getElementById("amount").value;
		let price = document.getElementById("price").value;
		let choice = document.getElementById("buy").checked;
		editHolding(holdingToEdit, choice, amount, price, id);
		closeform();
	});
}

export default editPopUp;
