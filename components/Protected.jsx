import Loader from "./Loader";

const Protected = ({ children, authed }) => {
	return (
		<>
			{authed === "check" ? (
				<Loader />
			) : authed ? (
				children
			) : (
				<>{(window.location.href = "/auth")}</>
			)}
		</>
	);
};

export default Protected;
