import { Box, Heading, Image, Text } from "@chakra-ui/react";

/** Select the gradient for card!
 * linear(to right, #3F5EFB, #FC466B)
 * linear(to right, #fc5c7d, #6a82fb);
 * linear(to right, #36d1dc, #5b86e5);
 */

const CreditCard = ({ balance }) => {
	return (
		<>
			<Box
				margin="1rem 1.5rem"
				bgGradient="linear(to right, #3F5EFB, #FC466B)"
				borderRadius="15px"
				boxShadow="0 0 15px rgba(0,0,0,0.2)"
			>
				<Box
					display="flex"
					alignItems="center"
					justifyContent="space-between"
					padding="1.1rem 1.5rem"
				>
					<Heading
						fontFamily="poppins"
						fontWeight="500"
						fontSize="20px"
						color="white"
					>
						Wings
					</Heading>
					<Image
						src="/logo-transparent.png"
						alt="logo"
						width="60px"
					/>
				</Box>

				<Box padding="1rem 1.5rem">
					<Text fontFamily="poppins" color="whiteAlpha.800">
						Current Balance
					</Text>
					<Heading
						fontFamily="poppins"
						color="white"
						fontWeight="500"
						mt="6px"
					>
						{balance}
					</Heading>
				</Box>
			</Box>
		</>
	);
};

export default CreditCard;
