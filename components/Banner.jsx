import { Box, Button, Heading, Image, Text } from "@chakra-ui/react";
import Link from "next/link";

const Banner = () => {
	return (
		<>
			<Box
				display="flex"
				alignItems="center"
				justifyContent="space-between"
			>
				<Image src="/logo.png" width="110px" />
				<Link href="/app/auth">
					<Button
						fontFamily="poppins"
						fontWeight="500"
						fontSize="14px"
						borderRadius="10pc"
						height="auto"
						padding="10px 25px"
						bg="primary.light"
						color="white"
						_hover={{
							bg: "primary.mid",
							textDecoration: "underline",
						}}
					>
						Login
					</Button>
				</Link>
			</Box>

			<Box display="flex" mt="2rem">
				<Box flex="1" height="100%">
					<Heading
						fontSize="3rem"
						fontFamily="poppins"
						fontWeight="600"
						mt="5rem"
						textTransform="uppercase"
					>
						Get Ready to <br /> take off!
					</Heading>
					<Text
						maxW="50%"
						m="10px"
						ml="5px"
						fontFamily="poppins"
						fontSize="15px"
					>
						You'll find the instructors who care, a first-class
						experience, and an exclusive community
					</Text>
					<Link href="/app/auth">
						<Button
							fontFamily="poppins"
							fontWeight="500"
							fontSize="14px"
							borderRadius="10pc"
							height="auto"
							padding="10px 25px"
							bg="primary.light"
							color="white"
							_hover={{
								bg: "primary.mid",
								textDecoration: "underline",
							}}
							mt="5px"
							ml="5px"
						>
							Try a flight
						</Button>
					</Link>
				</Box>
				<Image src="/bg.jpg" maxW="700px" h="550px" />
			</Box>
		</>
	);
};

export default Banner;
