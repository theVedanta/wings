import { Badge, Box, Heading, Image, Text } from "@chakra-ui/react";
import Link from "next/link";

const TicketItem = ({ paid, expired }) => {
	return (
		<>
			<Link href={!paid ? `/app/flights/flightId` : `/app/home`} passHref>
				<Box mb="10px" opacity={expired && "0.6"}>
					<Box
						display="flex"
						alignItems="center"
						justifyContent="space-between"
						backgroundColor="white"
						boxShadow="0 -5px 20px rgba(0, 0, 0, 0.1)"
						borderBottomWidth="2px"
						borderColor="#ddd"
						borderStyle="dashed"
						padding="15px"
						borderRadius="10px"
					>
						<Box>
							<Heading
								fontFamily="poppins"
								fontSize="20px"
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
						<Box>
							<Badge
								fontFamily="poppins"
								padding="5px 10px"
								backgroundColor="#edf4ff"
								color="primary.light"
								borderRadius="10px"
							>
								16h 45min
							</Badge>
						</Box>
						<Box>
							<Heading
								fontFamily="poppins"
								fontSize="20px"
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
						backgroundColor="white"
						boxShadow="0 5px 10px rgba(0, 0, 0, 0.05)"
						padding="20px 15px"
						borderRadius="10px"
					>
						<Box
							display="flex"
							alignItems="center"
							justifyContent="space-between"
						>
							<Box>
								<Heading
									fontFamily="poppins"
									fontSize="21px"
									color="#333"
									fontWeight="500"
								>
									9:10 AM
								</Heading>
								<Text
									fontFamily="poppins"
									color="blackAlpha.500"
									fontSize="15px"
								>
									Depart
								</Text>
							</Box>
							<Box>
								<Image src="/airplaneIcon.png" width="120px" />
							</Box>
							<Box>
								<Heading
									fontFamily="poppins"
									fontSize="21px"
									color="#333"
									fontWeight="500"
								>
									QR8234
								</Heading>
								<Text
									fontFamily="poppins"
									color="blackAlpha.500"
									fontSize="15px"
								>
									Flight No.
								</Text>
							</Box>
						</Box>
						{!paid ? (
							<Heading
								fontFamily="poppins"
								fontSize="24px"
								color="primary.light"
								fontWeight="600"
								mt="15px"
							>
								$1292
							</Heading>
						) : (
							<Box
								display="flex"
								alignItems="center"
								justifyContent="space-between"
								mt="1.1rem"
							>
								<Heading
									fontFamily="poppins"
									fontSize="17px"
									color="#333"
									fontWeight="500"
								>
									11 Oct, 2022
								</Heading>
								<Heading
									fontFamily="poppins"
									fontSize="16"
									color="blackAlpha.700"
									fontWeight="500"
								>
									to
								</Heading>
								<Heading
									fontFamily="poppins"
									fontSize="17px"
									color="#333"
									fontWeight="500"
								>
									12 Oct, 2022
								</Heading>
							</Box>
						)}
					</Box>
				</Box>
			</Link>
		</>
	);
};

export default TicketItem;
