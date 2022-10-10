import Header from "@/components/Header";
import TicketItem from "@/components/TicketItem";
import { Box } from "@chakra-ui/react";

const MyFlights = () => {
	return (
		<>
			<Header title="My Flights" />
			<Box padding="1rem 1.5rem">
				<TicketItem paid={true} />
				<TicketItem paid={true} />
				<TicketItem paid={true} expired={true} />
			</Box>
		</>
	);
};

export default MyFlights;
