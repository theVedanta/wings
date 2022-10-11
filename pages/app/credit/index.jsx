import CustomContainer from "@/components/CustomContainer";
import Header from "@/components/Header";
import TransactionItem from "@/components/TransactionItem";
import { Box, Heading, Image, Text } from "@chakra-ui/react";
import Link from "next/link";

/** Select the gradient for card!
 * linear(to right, #3F5EFB, #FC466B)
 * linear(to right, #fc5c7d, #6a82fb);
 * linear(to right, #36d1dc, #5b86e5);
 */

const Credit = () => {
	return (
		<>
			<CustomContainer>
				<Box pt="10px">
					<Header
						hideBackBtn={true}
						title="Credit"
						titleSize="21px"
					/>

					<Box
						margin="1rem 1.5rem"
						bgGradient="linear(to right, #3F5EFB, #FC466B)"
						borderRadius="15px"
						boxShadow="0 0 15px rgba(0,0,0,0.2)"
					>
						<Box
							display="flex"
							alignItems="center"
							justifyContent="space-between"
							padding="1.1rem 1.5rem"
						>
							<Heading
								fontFamily="poppins"
								fontWeight="500"
								fontSize="20px"
								color="white"
							>
								Wings
							</Heading>
							<Image
								src="/logo-transparent.png"
								alt="logo"
								width="60px"
							/>
						</Box>

						<Box padding="1rem 1.5rem">
							<Text fontFamily="poppins" color="whiteAlpha.800">
								Current Balance
							</Text>
							<Heading
								fontFamily="poppins"
								color="white"
								fontWeight="500"
								mt="6px"
							>
								$4500
							</Heading>
						</Box>
					</Box>

					<Box padding="1rem 1.5rem">
						<Box
							display="flex"
							alignItems="center"
							justifyContent="space-between"
						>
							<Text
								fontFamily="poppins"
								color="blackAlpha.600"
								fontSize="18px"
								fontWeight="500"
							>
								Transaction
							</Text>
							<Link href="/app/credit/transactions">
								<Text
									fontFamily="poppins"
									color="primary.light"
									fontSize="15px"
									fontWeight="500"
								>
									See All
								</Text>
							</Link>
						</Box>

						<TransactionItem
							isPaid={true}
							title="Book Flight: India to USA"
							price="$200"
						/>
						<TransactionItem
							isPaid={false}
							title="Credit from flight CWZ to XCA"
							price="$150"
						/>
					</Box>
				</Box>
			</CustomContainer>
		</>
	);
};

export default Credit;
