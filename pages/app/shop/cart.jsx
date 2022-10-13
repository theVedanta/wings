import CartItem from "@/components/CartItem";
import Header from "@/components/Header";
import ProductItemCard from "@/components/ProductItemCard";
import { Box, Button, Text } from "@chakra-ui/react";

const Cart = () => {
	return (
		<>
			<Box
				display="flex"
				flexDirection="column"
				height="100vh"
				overflow="hidden"
			>
				<Box flex="1" overflow="auto" pb="5rem">
					<Header title="Cart" titleSize="20px" />
					<Box>
						<CartItem
							name="Subway Sandwich"
							price="$25.00"
							image="/product1.webp"
						/>
						<CartItem
							name="Subway Sandwich"
							price="$25.00"
							image="/product1.webp"
						/>
					</Box>
				</Box>
				<Box
					pos="absolute"
					left="0"
					bottom="0"
					width="100%"
					bg="white"
					border="none"
					boxShadow="0 0 10px rgba(0, 0, 0, 0.15)"
					display="flex"
					alignItems="center"
					padding="5px 10px"
					borderRadius="15px 15px 0 0"
				>
					<Text
						mr="1rem"
						fontSize="17.5px"
						fontWeight="500"
						fontFamily="poppins"
					>
						Total: $50.00
					</Text>
					<Button
						margin="10px 0"
						flex="1"
						height="auto"
						background="primary.light"
						color="#fff"
						padding="15px"
						borderRadius="12px"
						fontFamily="poppins"
						fontWeight="500"
						fontSize="16px"
					>
						Checkout
					</Button>
				</Box>
			</Box>
		</>
	);
};

export default Cart;
