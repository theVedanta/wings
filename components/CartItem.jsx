import { Box, CloseButton, Image, Text } from "@chakra-ui/react";

const CartItem = ({ name, image, price }) => {
	return (
		<>
			<Box padding="10px 1.2rem" pos="relative">
				<CloseButton pos="absolute" top="5px" right="1.5rem" />
				<Box
					display="flex"
					alignItems="center"
					borderBottom="1px solid #ddd"
					width="100%"
					padding="10px"
				>
					<Image
						src={image}
						width="110px"
						height="70px"
						borderRadius="5px"
					/>
					<Box pl="8px">
						<Text
							fontFamily="poppins"
							fontWeight="500"
							fontSize="16px"
							color="blackAlpha.700"
						>
							{name}
						</Text>
						<Text
							fontFamily="poppins"
							fontWeight="500"
							fontSize="20px"
						>
							{price}
						</Text>
					</Box>
				</Box>
			</Box>
		</>
	);
};

export default CartItem;
