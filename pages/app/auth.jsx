import Google from "../../components/Google";

const Auth = ({ setAuthed, setUser, authed }) => {
    return (
        <>
            {authed === "check" ? (
                "Loading"
            ) : !authed ? (
                <Google setAuthed={setAuthed} setUser={setUser} />
            ) : (
                <>{(window.location.href = "/app")}</>
            )}
        </>
    );
};

export default Auth;
