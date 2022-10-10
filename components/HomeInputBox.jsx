import { FormControl, FormLabel, Input, Select } from "@chakra-ui/react";

const HomeInputBox = ({
	label,
	isSelectInput,
	selectInputData,
	value,
	setValue,
}) => {
	return (
		<>
			<FormControl
				border="1px solid #eee"
				borderRadius="10px"
				padding="10px "
			>
				<FormLabel
					fontWeight="600"
					fontFamily="raleway"
					color="blackAlpha.600"
					fontSize="14px"
				>
					{label}
				</FormLabel>
				{isSelectInput ? (
					<Select
						size="md"
						variant="unstyled"
						placeholder="Select Your Class"
					>
						{selectInputData.map((item, i) => {
							return (
								<option key={i} value={item.value}>
									{item.name}
								</option>
							);
						})}
					</Select>
				) : (
					<Input
						border="none"
						type="email"
						padding="0"
						height="auto"
						fontFamily="poppins"
						fontSize="17px"
						_focus={{
							border: "0px solid transparent",
							boxShadow: "none",
						}}
						value={value}
						onChange={(e) => setValue(e.target.value)}
					/>
				)}
			</FormControl>
		</>
	);
};

export default HomeInputBox;
