import _axios from "axios";

const convertCurrency = async (
	value,
	currency = "EDG",
	subCurrency = "USD"
) => {
	let networkName = "edgeware";
	//TODO: Make dynamic to fetch prices for other networks
	if (currency === "DOT") {
		networkName = "polkadot";
	}
	const res = await _axios(
		`https://api.coingecko.com/api/v3/simple/price?ids=${networkName}&vs_currencies=usd`
	);
	const data = res.data;
	if (currency === "DOT") {
		return value * data.polkadot.usd;
	} else {
		return value * data.edgeware.usd;
	}
};

export default convertCurrency;
