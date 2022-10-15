import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import Loader from "@/components/Loader";
import { useEffect, useState } from "react";
import "@fontsource/poppins";
import "@fontsource/raleway";
import { GoogleOAuthProvider } from "@react-oauth/google";

const theme = extendTheme({
    fonts: {
        body: "system-ui, sans-serif",
        heading: "Georgia, serif",
        mono: "Menlo, monospace",
    },
    colors: {
        primary: {
            dark: "#3860E4",
            mid: "#3876e4",
            light: "#347af6",
        },
        danger: "#f44336",
        success: "#52d957",
    },
    fonts: {
        poppins: `"Poppins", sans-serif;`,
        raleway: `"Raleway", sans-serif;`,
    },
});

const App = ({ Component, pageProps }) => {
    const [loading, setLoading] = useState(true); // Code for preloader, it will come in handy when page takes time to load!
    const [authed, setAuthed] = useState("check");
    const [user, setUser] = useState({});

    useEffect(() => {
        setLoading(false);

        const getUser = async () => {
            try {
                if (localStorage.getItem("authToken")) {
                    const userJson = await fetch(
                        `${BASE_API_URL}/auth?authToken=${localStorage.getItem(
                            "authToken"
                        )}`
                    );
                    const user = await userJson.json();

                    console.log(user);

                    if (user.user) {
                        setAuthed(true);
                        setUser(user.user);
                        setCart(user.user.cart);
                    } else if (user.expired) {
                        setAuthed(false);
                        localStorage.removeItem("authToken");
                    } else {
                        setAuthed(false);
                        localStorage.removeItem("authToken");
                    }
                } else {
                    setAuthed(false);
                    localStorage.removeItem("authToken");
                }
            } catch (err) {
                console.log(err);
                setAuthed(false);
                localStorage.removeItem("authToken");
            }
        };

        getUser();
    }, []);

    return (
        <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE}>
            {!loading ? (
                <ChakraProvider theme={theme}>
                    <Component
                        user={user}
                        authed={authed}
                        setUser={setUser}
                        setAuthed={setAuthed}
                        {...pageProps}
                    />
                </ChakraProvider>
            ) : (
                <Loader />
            )}
        </GoogleOAuthProvider>
    );
};

export default App;
