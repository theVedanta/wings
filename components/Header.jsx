import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import BackBtn from "./BackBtn";

const Header = ({ title }) => {
	return (
		<Box display="flex" alignItems="center" padding="10px 10px">
			<BackBtn />
			<Heading
				fontSize="19px"
				fontWeight="600"
				textAlign="center"
				fontFamily="raleway"
				flex="1"
			>
				{title}
			</Heading>
		</Box>
	);
};

export default Header;
