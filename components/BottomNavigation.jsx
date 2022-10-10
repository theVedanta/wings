import { Box, Button, Grid } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Home } from "react-feather";

const BottomNavigationItem = ({ name, href }) => {
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
					<Link href={href}>{name}</Link>
				</Button>
			</Box>
		</>
	);
};

const BottomNavigation = () => {
	return (
		<>
			<Grid
				templateColumns="repeat(4, 1fr)"
				w="100%"
				pos="absolute"
				bottom="0"
				left="0"
				boxShadow="0 1px 10px rgba(0,0,0,0.2)"
				borderRadius="20px 20px 0 0"
				bg="white"
				zIndex="1"
			>
				<BottomNavigationItem name={<Home />} href="/app/home" />
				<BottomNavigationItem name={<Home />} href="/app/auth" />
				<BottomNavigationItem name={<Home />} href="/app/auth" />
				<BottomNavigationItem name={<Home />} href="/app/auth" />
			</Grid>
		</>
	);
};

export default BottomNavigation;
