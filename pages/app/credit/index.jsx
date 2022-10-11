import CreditCard from "@/components/CreditCard";
import CustomContainer from "@/components/CustomContainer";
import Header from "@/components/Header";
import TransactionItem from "@/components/TransactionItem";
import { Box, Text } from "@chakra-ui/react";
import Link from "next/link";

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

					<CreditCard balance="$4500" />

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
