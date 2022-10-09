import Protected from "@/components/Protected";
import React from "react";

const auth = () => {
	return (
		<>
			<Protected authed={true}>Auth</Protected>
		</>
	);
};

export default auth;
