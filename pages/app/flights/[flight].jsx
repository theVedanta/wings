import Header from "@/components/Header";
import TicketItem from "@/components/TicketItem";
import { Box, Button, Grid, Heading } from "@chakra-ui/react";
import { useState } from "react";

const Flight = () => {
	const [selectedSeatId, setSelectedSeatId] = useState(0);

	return (
		<>
			<Header title="Select Your Seat" />
			<Box
				padding="1rem 1.5rem"
				display="flex"
				flexDirection="column"
				pos="relative"
				height="92vh"
			>
				<Box flex="1" overflow="auto">
					<TicketItem />

					<Heading
						fontSize="21px"
						fontWeight="600"
						fontFamily="raleway"
						textAlign="center"
						mt="2rem"
					>
						First Class
					</Heading>

					<Grid
						templateColumns="repeat(auto-fit, minmax(60px, 1fr))"
						gridGap="10px"
						padding="2rem 10px"
					>
						{[...new Array(20).keys()].map((item, i) => {
							return (
								<Button
									background={
										selectedSeatId === item
											? "primary.light"
											: "white"
									}
									color={
										selectedSeatId === item
											? "white"
											: "black"
									}
									boxShadow="0 0 10px rgba(0,0,0,0.07)"
									key={i}
									onClick={() => setSelectedSeatId(item)}
									_focus={{
										backgroundColor: "primary.light",
										color: "white",
									}}
									autoFocus={selectedSeatId === item}
								>
									A{item + 1}
								</Button>
							);
						})}
					</Grid>
				</Box>

				<Button
					fontWeight="500"
					color="white"
					width="100%"
					height="auto"
					padding="16px"
					fontFamily="poppins"
					bg="primary.light"
					fontSize="17px"
					borderRadius="15px"
				>
					Checkout
				</Button>
			</Box>
		</>
	);
};

export default Flight;
