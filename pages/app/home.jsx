import CustomContainer from "@/components/CustomContainer";
import CustomTabs from "@/components/CustomTabs";
import ExchangeBtn from "@/components/ExchangeBtn";
import HomeInputBox from "@/components/HomeInputBox";
import TicketItem from "@/components/TicketItem";
import {
	Avatar,
	Box,
	Button,
	Grid,
	Image,
	TabPanel,
	Text,
} from "@chakra-ui/react";
import { ClassData } from "data/Class";
import Link from "next/link";
import { useState } from "react";

const home = () => {
	const [location, setLocation] = useState("");
	const [destination, setDestination] = useState("");
	const [departure, setDeparture] = useState("");
	const [returnInput, setReturn] = useState("");
	const [passengers, setPassengers] = useState("1");

	return (
		<>
			<CustomContainer>
				<Grid templateColumns="repeat(2, 1fr)">
					<Box w="130px" h="70px" pos="relative">
						<Image w="100%" src="/logo.png" alt="logo" />
					</Box>
					<Box
						display="flex"
						alignItems="center"
						justifyContent="flex-end"
						pr="20px"
					>
						<Avatar
							name="Dan Abrahmov"
							src="https://bit.ly/dan-abramov"
						/>
					</Box>
				</Grid>

				<CustomTabs>
					<TabPanel padding="1.5rem 10px" pb="0">
						<HomeInputBox
							label="From (Location)"
							value={location}
							setValue={setLocation}
						/>
						<Box pos="relative" padding="0.7rem 0">
							<ExchangeBtn
								firstInput={location}
								setFirstInput={setLocation}
								secoundInput={destination}
								setSecondInput={setDestination}
							/>
						</Box>
						<HomeInputBox
							label="To (Destination)"
							value={destination}
							setValue={setDestination}
						/>
						<Grid
							templateColumns="repeat(2,1fr)"
							marginTop="8px"
							gridGap="8px"
						>
							<HomeInputBox
								label="Departure"
								value={departure}
								setValue={setDeparture}
							/>
							<HomeInputBox
								label="Return"
								value={returnInput}
								setValue={setReturn}
							/>
							<HomeInputBox
								label="Passengers"
								value={passengers}
								setValue={setPassengers}
							/>
							<HomeInputBox
								label="Class"
								isSelectInput={true}
								selectInputData={ClassData}
							/>
						</Grid>
						<Button
							fontFamily="poppins"
							bg="primary.light"
							color="white"
							fontWeight="500"
							width="100%"
							margin="12px 0"
							padding="15px 0"
							height="auto"
							borderRadius="15px"
						>
							Search Flights
						</Button>

						<Box>
							<Box
								display="flex"
								justifyContent="space-between"
								margin="15px 0"
							>
								<Text
									fontSize="18px"
									fontWeight="500"
									fontFamily="poppins"
								>
									Upcoming Flights
								</Text>
								<Link href="/app/flights" passHref>
									<Text
										size="sm"
										fontFamily="poppins"
										color="primary.light"
									>
										See all
									</Text>
								</Link>
							</Box>
							<TicketItem />
							<TicketItem />
							<TicketItem />
							<TicketItem />
						</Box>
					</TabPanel>
				</CustomTabs>
			</CustomContainer>
		</>
	);
};

export default home;
