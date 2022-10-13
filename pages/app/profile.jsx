import CustomContainer from "@/components/CustomContainer";
import ProfileLinkItem from "@/components/ProfileLinkItem";
import { Box, Button, Image, Text } from "@chakra-ui/react";
import {
	LogOut,
	ShoppingCart,
	Bell,
	CreditCard,
	HelpCircle,
	User,
} from "react-feather";
import { IoTicketOutline } from "react-icons/io5";

const Profile = () => {
	return (
		<>
			<CustomContainer>
				<Box
					dispaly="flex"
					flexDirection="column"
					height="90%"
					overflow="hidden"
				>
					<Box flex="1" overflow="auto">
						<Box display="flex" alignItems="center" m="1.5rem">
							<Image
								src="/user_profile.jpg"
								width="75px"
								height="75px"
								borderRadius="50%"
							/>
							<Box pl="12px">
								<Text
									fontFamily="poppins"
									fontWeight="500"
									color="blackAlpha"
									fontSize="18px"
								>
									UserName
								</Text>
								<Text
									fontFamily="poppins"
									fontWeight="500"
									color="blackAlpha.600"
									fontSize="14px"
								>
									user@mail.com
								</Text>
							</Box>
						</Box>

						<Box padding="10px 1.5rem">
							<ProfileLinkItem
								icon={<User size="19px" color="#333" />}
								name="Edit Profile"
								link="/app/profile"
							/>
							<ProfileLinkItem
								icon={<ShoppingCart size="19px" color="#333" />}
								name="Cart"
								link="/app/shop/cart"
							/>
							<ProfileLinkItem
								icon={
									<IoTicketOutline size="21px" color="#333" />
								}
								name="Tickets"
								link="/app/flights/my-flights"
							/>
							<ProfileLinkItem
								icon={<CreditCard size="19px" color="#333" />}
								name="Credits"
								link="/app/credit"
							/>
							<ProfileLinkItem
								icon={<Bell size="19px" color="#333" />}
								name="Notifications"
								link="/app/profile"
							/>
							<ProfileLinkItem
								icon={<HelpCircle size="19px" color="#333" />}
								name="Help"
								link="/app/profile"
							/>
						</Box>
					</Box>
				</Box>

				<Button
					width="90%"
					height="auto"
					display="flex"
					justifyContent="space-between"
					alignItems="center"
					fontFamily="poppins"
					fontWeight="500"
					borderRadius="12px"
					padding="18px 1.5rem"
					left="50%"
					transform="translateX(-50%)"
				>
					<Text>Log Out</Text>
					<LogOut />
				</Button>
			</CustomContainer>
		</>
	);
};

export default Profile;
