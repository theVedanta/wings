import { Tab, TabList, TabPanels, Tabs } from "@chakra-ui/react";

const CustomTab = ({ title }) => {
	return (
		<>
			<Tab
				fontSize="16px"
				fontWeight="600"
				mx="5px"
				fontFamily="raleway"
				padding="10px"
				borderRadius="12px"
				color="blackAlpha.500"
				width="max-content"
				_selected={{
					color: "white",
					background: "primary.light",
					fontSize: "15px",
					boxShadow: "0 0 10px rgba(0,0,0,0.1)",
				}}
			>
				{title}
			</Tab>
		</>
	);
};

const CustomTabs = ({ children }) => {
	return (
		<>
			<Tabs margin="1.5rem 1rem" isFitted variant="soft-rounded">
				<TabList>
					<CustomTab title="Round Trip" />
					<CustomTab title="One Way" />
				</TabList>

				<TabPanels>{children}</TabPanels>
			</Tabs>
		</>
	);
};

export default CustomTabs;
