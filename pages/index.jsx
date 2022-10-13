import Banner from "@/components/Banner";
import { Box, Container, Heading, Image, Text } from "@chakra-ui/react";

const Home = () => {
	return (
		<>
			<Container maxW="container.xl">
				<Banner />

				<Box display="flex" mt="0rem">
					<Image src="/credit.svg" maxW="500px" h="600px" />

					<Box flex="1" height="100%" ml="6rem">
						<Heading
							fontSize="3rem"
							fontFamily="poppins"
							fontWeight="600"
							mt="5rem"
							textTransform="uppercase"
						>
							Book a flight and <br />
							get a credit
						</Heading>
						<Text
							maxW="50%"
							m="10px"
							ml="5px"
							fontFamily="poppins"
							fontSize="15px"
						>
							Book a flight and get a credit of 40%! You can use
							them to purchase anything in wings.
							<br />
							<Text fontSize="17px" mt="5px">
								Get a 100$ free credit on yout first booking!
							</Text>
						</Text>
					</Box>
				</Box>

				<Box display="flex" mb="1rem" mt="1rem">
					<Box flex="1" height="100%" ml="1rem">
						<Heading
							fontSize="3rem"
							fontFamily="poppins"
							fontWeight="600"
							mt="5rem"
							textTransform="uppercase"
						>
							Travel with comfort <br /> and luxury
						</Heading>
						<Text
							maxW="50%"
							m="10px"
							ml="5px"
							fontFamily="poppins"
							fontSize="15px"
						>
							Get a spacious and luxury seat with double hand rest
							to make yourself comfortable. Accompanied with
							modern interior and first-class facilities!
						</Text>
					</Box>
					<Image
						borderRadius="10px"
						src="/interior.png"
						maxW="500px"
					/>
				</Box>
				<Box
					display="flex"
					alignItems="center"
					justifyContent="space-between"
					borderTop="1px solid #eee"
					mt="2rem"
					padding="1rem"
				>
					<Image src="/logo.png" width="110px" height="50px" />
					<Text fontFamily="poppins" fontSize="15px">
						Copyright @ 2022 Wings Airline
					</Text>
				</Box>
			</Container>
		</>
	);
};
export default Home;
