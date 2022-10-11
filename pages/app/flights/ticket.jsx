import Header from "@/components/Header";
import {
	Badge,
	Box,
	Button,
	Grid,
	Heading,
	Image,
	Text,
} from "@chakra-ui/react";

const TicketDetailGroup = ({ label, data, alignment }) => {
	return (
		<>
			<Box flex="1" textAlign={alignment}>
				<Text
					fontFamily="poppins"
					fontSize="15px"
					fontWeight="500"
					color="blackAlpha.500"
				>
					{label}
				</Text>
				<ul>
					{data.map((d, i) => (
						<li style={{ listStyle: "none" }} key={i}>
							<Heading
								fontFamily="raleway"
								color="blackAlpha"
								fontSize="18px"
								fontWeight="600"
								mt="3px"
							>
								{d}
							</Heading>
						</li>
					))}
				</ul>
			</Box>
		</>
	);
};

const Ticket = () => {
	return (
		<>
			<Header title="Boarding Pass" />

			<Box display="flex" flexDirection="column" height="90vh">
				<Box padding="1rem 1.5rem" flex="1">
					<Box
						mb="10px"
						borderRadius="10px"
						boxShadow="0 0 4px rgba(0, 0, 0, 0.1)"
					>
						<Box
							display="flex"
							alignItems="center"
							justifyContent="space-between"
							padding="1.5rem 1rem"
							borderBottom="1px solid #eee"
						>
							<Box>
								<Heading
									fontFamily="poppins"
									fontSize="21px"
									color="primary.light"
								>
									CGK
								</Heading>
								<Text
									fontFamily="poppins"
									color="blackAlpha.500"
									fontSize="15px"
								>
									Indonesia
								</Text>
							</Box>
							<Box textAlign="center">
								<Badge
									fontFamily="poppins"
									padding="5px 10px"
									backgroundColor="#edf4ff"
									color="primary.light"
									borderRadius="10px"
									mb="5px"
								>
									16h 45min
								</Badge>
								<Image src="/airplaneIcon.png" width="120px" />
							</Box>
							<Box>
								<Heading
									fontFamily="poppins"
									fontSize="21px"
									color="primary.light"
								>
									CGK
								</Heading>
								<Text
									fontFamily="poppins"
									color="blackAlpha.500"
									fontSize="15px"
								>
									Indonesia
								</Text>
							</Box>
						</Box>

						<Box
							display="flex"
							justifyContent="space-between"
							padding="1rem 1.3rem"
						>
							<TicketDetailGroup
								label="Passengers"
								data={["Alex Benjamin"]}
							/>
							<TicketDetailGroup
								label="Ticket Price"
								data={["$1056"]}
								alignment="end"
							/>
						</Box>
						<Box
							display="flex"
							justifyContent="space-between"
							padding="1rem 1.3rem"
						>
							<TicketDetailGroup
								label="Depart"
								data={["9:42 AM"]}
							/>
							<TicketDetailGroup
								label="Date"
								data={["Wed, 12 April"]}
								alignment="end"
							/>
						</Box>
						<Box
							display="flex"
							justifyContent="space-between"
							padding="1rem 1.3rem"
						>
							<TicketDetailGroup
								label="Seats"
								data={["A1", "A2", "A3"]}
							/>
							<TicketDetailGroup
								label="Class"
								alignment="center"
								data={["First"]}
							/>
							<TicketDetailGroup
								label="Gate"
								data={["F11"]}
								alignment="end"
							/>
						</Box>
					</Box>
				</Box>

				<Button
					bg="primary.light"
					margin="0 1.4rem"
					color="white"
					height="auto"
					padding="17px"
					fontFamily="poppins"
					fontWeight="500"
					borderRadius="15px"
				>
					Download Ticket
				</Button>
			</Box>
		</>
	);
};

export default Ticket;
