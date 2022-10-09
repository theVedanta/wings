import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import Loader from "@/components/Loader";
import { useEffect, useState } from "react";

const theme = extendTheme({
	fonts: {
		body: "system-ui, sans-serif",
		heading: "Georgia, serif",
		mono: "Menlo, monospace",
	},
});

const App = ({ Component, pageProps }) => {
	const [loading, setLoading] = useState(true); // Code for preloader, it will come in handy when page takes time to load!

	useEffect(() => {
		setLoading(false);
	}, []);

	return (
		<>
			{!loading ? (
				<ChakraProvider theme={theme}>
					<Component {...pageProps} />
				</ChakraProvider>
			) : (
				<Loader />
			)}
		</>
	);
};

export default App;
