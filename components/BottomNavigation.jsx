import { Box, Grid, Link } from "@chakra-ui/react";

const BottomNavigationItem = ({ name, href }) => {
	return (
		<>
			<Box textAlign="center" p="20px 10px">
				<Link to={href}>{name}</Link>
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
				<BottomNavigationItem name="Home" href="/app/auth" />
				<BottomNavigationItem name="Home" href="/app/auth" />
				<BottomNavigationItem name="Home" href="/app/auth" />
				<BottomNavigationItem name="Home" href="/app/auth" />
			</Grid>
		</>
	);
};

export default BottomNavigation;
