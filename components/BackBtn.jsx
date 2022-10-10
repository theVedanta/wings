import { Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { ChevronLeft } from "react-feather";

const BackBtn = () => {
	const router = useRouter();
	return (
		<>
			<Button
				onClick={() => router.back()}
				bg="white"
				padding="0 10px"
				variant="ghost"
			>
				<ChevronLeft size="25px" color="#000" />
			</Button>
		</>
	);
};

export default BackBtn;
