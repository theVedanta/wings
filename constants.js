const BASE_API_URL =
    process.env.NEXT_PUBLIC_NODE_ENV === "dev"
        ? "http://localhost:4000"
        : "https://wings-core.herokuapp.com";

export default BASE_API_URL;
