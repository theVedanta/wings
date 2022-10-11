import { Box, Heading, Text } from "@chakra-ui/react";

const TransactionItem = ({ isPaid, title, price }) => {
	return (
		<>
			<Box
				display="flex"
				alignItems="center"
				justifyContent="space-between"
				padding="0.5rem 1rem"
				borderBottom="1px solid #eee"
				mt="1.2rem"
			>
				<Box>
					<Heading
						fontFamily="poppins"
						fontSize="17px"
						fontWeight="500"
					>
						{title}
					</Heading>
					<Text
						fontFamily="poppins"
						fontSize="14px"
						color="blackAlpha.600"
						fontWeight="500"
						mt="5px"
					>
						Payment {isPaid ? "sent" : "received"}
					</Text>
				</Box>
				<Text
					fontFamily="poppins"
					fontSize="18px"
					fontWeight="600"
					color={isPaid ? "danger" : "success"}
				>
					{isPaid ? "-" : "+"}
					{price}
				</Text>
			</Box>
		</>
	);
};

export default TransactionItem;
