import { Box, Button, Grid } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { CreditCard, Home, ShoppingBag, User } from "react-feather";
import { IoTicketOutline } from "react-icons/io5";

const BottomNavigationItem = ({ icon, href }) => {
	const router = useRouter();

	return (
		<>
			<Box textAlign="center" p="9px 0px">
				<Button
					borderRadius="50%"
					width="45"
					height="55"
					variant="ghost"
					backgroundColor={
						router.pathname === href ? "primary.light" : "white"
					}
					color={router.pathname === href && "white"}
				>
					<Link href={href}>{icon}</Link>
				</Button>
			</Box>
		</>
	);
};

const BottomNavigation = () => {
	return (
		<>
			<Grid
				templateColumns="repeat(5, 1fr)"
				w="100%"
				pos="absolute"
				bottom="0"
				left="0"
				boxShadow="0 1px 10px rgba(0,0,0,0.2)"
				borderRadius="20px 20px 0 0"
				bg="white"
				zIndex="1"
			>
				<BottomNavigationItem
					icon={<IoTicketOutline size="25px" />}
					href="/app/flights/my-flights"
				/>
				<BottomNavigationItem
					icon={<CreditCard size="23px" />}
					href="/app/credit"
				/>
				<BottomNavigationItem icon={<Home size="23px" />} href="/app" />
				<BottomNavigationItem
					icon={<ShoppingBag size="23px" />}
					href="/app/shop"
				/>
				<BottomNavigationItem
					icon={<User size="23px" />}
					href="/app/profile"
				/>
			</Grid>
		</>
	);
};

export default BottomNavigation;
