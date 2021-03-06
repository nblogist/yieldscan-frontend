import { ConsentGate, MetomicProvider } from "@metomic/react";
import * as Sentry from "@sentry/node";

import { ThemeProvider, theme } from "@chakra-ui/core";
import "../styles/index.scss";

const customTheme = {
	...theme,
	colors: {
		...theme.colors,
		teal: {
			...theme.colors.teal,
			"300": "#45E2E2",
			"500": "#2BCACA",
			"700": "#20B1B1",
		},
		pink: {
			...theme.colors.pink,
			"300": "#FF9DC0",
			"500": "#FF7CAB",
			"700": "#EF6093",
		},
		orange: {
			...theme.colors.orange,
			"500": "#F5B100",
		},
	},
	opacity: {
		...theme.opacity,
		"10": ".1",
		"20": ".2",
		"30": ".3",
		"40": ".4",
		"50": ".5",
		"60": ".6",
		"70": ".7",
		"80": ".8",
		"90": ".9",
	},
};

if (process.env.NEXT_PUBLIC_SENTRY_DSN) {
	Sentry.init({
		environment: process.env.NODE_ENV,
		enabled: process.env.NODE_ENV === "production",
		dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
	});
}

export default function YieldScanApp({ Component, pageProps, err }) {
	return (
		<ThemeProvider theme={customTheme}>
			<MetomicProvider projectId={process.env.NEXT_PUBLIC_METOMIC_PROJECT_ID}>
				<Component {...pageProps} err={err} />
			</MetomicProvider>
		</ThemeProvider>
	);
}
