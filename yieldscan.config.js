// Selected network
// const selectedNetwork = `Polkadot`;
// const selectedNetwork = `Kusama`;
const selectedNetwork = `Edgeware`;
// const selectedNetwork = `Westend`;

// Substrate networks
export const networks = [
	{
		id: "edgeware",
		name: "Edgeware",
		denom: "EDG",
		coinGeckoDenom: "edgeware",
		decimalPlaces: 18,
		addressPrefix: 7,
		nodeWs: "wss://mainnet1.edgewa.re",
		erasPerDay: 6,
		lockUpPeriod: 14,
	},
	{
		id: "polkadot-cc1",
		name: "Polkadot",
		denom: "DOT",
		coinGeckoDenom: "polkadot",
		decimalPlaces: 10,
		addressPrefix: 0,
		nodeWs: "wss://rpc.polkadot.io",
		erasPerDay: 1,
		lockUpPeriod: 28,
	},
	{
		id: "kusama-cc3",
		name: "Kusama",
		denom: "KSM",
		coinGeckoDenom: "kusama",
		decimalPlaces: 12,
		addressPrefix: 2,
		nodeWs: "wss://kusama-rpc.polkadot.io",
		erasPerDay: 4,
		lockUpPeriod: 7,
	},
	{
		id: "westend",
		name: "Westend",
		denom: "WND",
		coinGeckoDenom: undefined,
		decimalPlaces: 12,
		addressPrefix: 42,
		nodeWs: "wss://westend-rpc.polkadot.io",
		backendWs: "wss://westend.polkastats.io/api/v3",
		backendHttp: "http://westend.polkastats.io/api/v3",
		erasPerDay: 4,
		lockUpPeriod: 7,
		validator: undefined,
	},
];

export const getNetworkInfo = (networkName) => {
	return networks.find(({ name }) => name === networkName);
};

export const network = networks.find(({ name }) => name === selectedNetwork);
