import Header from "@/components/Header";
import TransactionItem from "@/components/TransactionItem";
import { Box } from "@chakra-ui/react";

const transactions = () => {
	return (
		<>
			<Header title="Transaction" titleSize="20px" />

			<Box padding="0rem 1.5rem">
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
		</>
	);
};

export default transactions;
