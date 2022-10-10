import Header from "@/components/Header";
import TicketItem from "@/components/TicketItem";
import { Box } from "@chakra-ui/react";
import React from "react";

const Flights = () => {
	return (
		<>
			<Header title="Select Flights" />
			<Box padding="1rem 1.5rem">
				<TicketItem />
				<TicketItem />
				<TicketItem />
				<TicketItem />
				<TicketItem />
				<TicketItem />
				<TicketItem />
				<TicketItem />
				<TicketItem />
			</Box>
		</>
	);
};

export default Flights;
