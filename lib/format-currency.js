import { formatBalance, isHex } from "@polkadot/util";

import BN from "bn.js";

export default {
	methods: {
		formatNumber(number) {
			if (isHex(number)) {
				return parseInt(number, 16)
					.toString()
					.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
			} else {
				return number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
			}
		},
		formatAmount(amount, network) {
			try {
				formatBalance.setDefaults({
					decimals: network.decimalPlaces,
					unit: network.denom,
				});
				let bn;
				if (isHex(amount)) {
					bn = new BN(amount.substring(2, amount.length), 16);
				} else {
					bn = new BN(amount.toString());
				}
				return formatBalance(bn.toString(10));
			} catch (error) {
				function toPlainString(num) { // BN.js THrows from 1e+21 and above so using this make shift function
					return (''+num).replace(/(-?)(\d*)\.?(\d+)e([+-]\d+)/,
					  function(a,b,c,d,e) {
						return e < 0
						  ? b + '0.' + Array(1-e-c.length).join(0) + c + d
						  : b + c + d + Array(e-d.length+1).join(0);
					  });
				  }
				  return formatBalance(toPlainString(amount))
				
			}
		},
	},
};
