import { Button } from "@chakra-ui/react";
import React from "react";
import { ArrowDown, ArrowUp } from "react-feather";

const ExchangeBtn = ({
	firstInput,
	secoundInput,
	setFirstInput,
	setSecondInput,
}) => {
	return (
		<>
			<Button
				pos="absolute"
				right="10px"
				top="-1rem"
				width="55px"
				height="55px"
				borderRadius="50%"
				backgroundColor="white"
				zIndex="1"
				padding="0"
				border="1px solid #eee"
				onClick={() => {
					setFirstInput(secoundInput);
					setSecondInput(firstInput);
				}}
			>
				<ArrowUp size="17px" color="#347af6" />
				<ArrowDown size="17px" color="#347af6" />
			</Button>
		</>
	);
};

export default ExchangeBtn;
