function adjustStorage() {
	localStorage.setItem("coins", JSON.stringify(holdings));
}

export default adjustStorage;
