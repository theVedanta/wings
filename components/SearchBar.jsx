import { FormControl, Input } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { Search } from "react-feather";

const SearchBar = () => {
	const [input, setInput] = useState("");
	const router = useRouter();

	return (
		<>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					router.push({
						pathname: "/app/shop/search",
						query: { q: input },
					});
				}}
			>
				<FormControl
					margin="1rem auto"
					width="92%"
					border="1px solid #eee"
					display="flex"
					alignItems="center"
					padding="12px 12px"
					borderRadius="10pc"
				>
					<Search size="20px" color="#555" />
					<Input
						type="text"
						value={input}
						onChange={(e) => setInput(e.target.value)}
						placeholder="Search any product..."
						variant="unstyled"
						padding="0 10px"
						fontFamily="poppins"
						fontSize="17px"
						fontWeight="500"
						color="blackAlpha.800"
					/>
				</FormControl>
			</form>
		</>
	);
};

export default SearchBar;
