import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { GRConfig, GREmpresa } from "@/components";

export default function App({ Component, pageProps, router }: AppProps) {
	const empresa = GREmpresa({});

	return (
		<div className="relative">
			<Component {...pageProps} empresa={empresa} />
			{router.asPath === "/" && <GRConfig empresa={empresa} />}
		</div>
	);
}
