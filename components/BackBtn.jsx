import { Button } from "@chakra-ui/react";
import { ArrowLeft } from "react-feather";

const BackBtn = () => {
	return (
		<>
			<Button bg="white" padding="0 10px" variant="ghost">
				<ArrowLeft color="#000" />
			</Button>
		</>
	);
};

export default BackBtn;
