import { Box, Text } from "@chakra-ui/react";
import Link from "next/link";

const ProfileLinkItem = ({ icon, name, link }) => {
	return (
		<>
			<Box
				borderBottom="1px solid #eee"
				display="flex"
				alignItems="center"
				padding="10px "
				mb="8px"
			>
				{icon}
				<Link href={link}>
					<Text
						fontFamily="poppins"
						fontSize="17px"
						fontWeight="500"
						ml="12px"
					>
						{name}
					</Text>
				</Link>
			</Box>
		</>
	);
};

export default ProfileLinkItem;
