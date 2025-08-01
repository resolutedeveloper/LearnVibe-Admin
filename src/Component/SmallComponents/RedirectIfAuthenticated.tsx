import { useEffect, type JSX } from "react";
import { useNavigate } from "react-router-dom";

const isUserLoggedIn = () => {
    // Replace this with your actual login check (e.g. localStorage, context, token, Clerk, etc.)
    return localStorage.getItem("AdminToken"); // or Clerk.isSignedIn, etc.
};

const RedirectIfAuthenticated = ({ children }: { children: JSX.Element }) => {
    const navigate = useNavigate();
    useEffect(() => {
        if (isUserLoggedIn()) {
            navigate("/dashboard");
        }
    }, []);

    return children;
};

export default RedirectIfAuthenticated;
