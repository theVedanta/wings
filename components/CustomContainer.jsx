import { Box } from "@chakra-ui/react";
import React from "react";
import BottomNavigation from "./BottomNavigation";

const CustomContainer = ({ children }) => {
	return (
		<>
			<Box pos="relative" h="100vh" overflow="hidden">
				<Box h="95vh" pb="2.5rem" overflow="auto">
					{children}
				</Box>
				<BottomNavigation />
			</Box>
		</>
	);
};

export default CustomContainer;
