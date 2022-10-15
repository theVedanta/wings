import React from "react";

const Auth = ({ setAuthed, setUser, authed }) => {
    return (
        <>
            {authed === "check" ? (
                "Loading"
            ) : authed ? (
                <Google setAuthed={setAuthed} setUser={setUser} />
            ) : (
                <>{(window.location.href = "/app")}</>
            )}
        </>
    );
};

export default Auth;
