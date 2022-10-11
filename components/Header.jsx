import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import BackBtn from "./BackBtn";

const Header = ({ title, hideBackBtn, titleSize = "19px" }) => {
	return (
		<Box display="flex" alignItems="center" padding="10px 10px">
			{!hideBackBtn && <BackBtn />}
			<Heading
				fontSize={titleSize}
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
