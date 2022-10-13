import { Box, Button, Image, Text } from "@chakra-ui/react";

const ProductItemCard = ({ image, name, price, setShowCartBtn }) => {
	return (
		<>
			<Box border="1px solid #eee" padding="10px" borderRadius="10px">
				<Image
					src={image}
					width="100%"
					margin="0 auto"
					borderRadius="10px"
				/>
				<Text
					fontFamily="poppins"
					fontWeight="500"
					fontSize="15px"
					color="blackAlpha.700"
					mt="7px"
					mb="2px"
				>
					{name}
				</Text>
				<Text fontFamily="poppins" fontWeight="500" fontSize="19px">
					{price}
				</Text>
				<Button
					mt="8px"
					width="100%"
					backgroundColor="primary.light"
					color="#fff"
					fontWeight="500"
					fontFamily="poppins"
					fontSize="14px"
					borderRadius="10px"
					onClick={() => {
						window.localStorage.setItem("hasCartItem", true);
						setShowCartBtn && setShowCartBtn(true);
					}}
				>
					Add To Cart
				</Button>
			</Box>
		</>
	);
};

export default ProductItemCard;
