import { Box, Spinner } from "@chakra-ui/react";
import React from "react";

const Loader = () => {
	return (
		<>
			<Box
				width="100%"
				height="100vh"
				display="flex"
				alignItems="center"
				justifyContent="center"
				z-index="1000"
			>
				<Spinner size="xl" thickness="2.5px" speed="0.65s" />
			</Box>
		</>
	);
};

export default Loader;
