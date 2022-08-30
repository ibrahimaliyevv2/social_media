import { Navigate } from "react-router-dom";

export default function NoAuthProvider({ children }) {
	let auth = false;
    
	if (auth) {
		return < Navigate to="/" />
	}
    return (
        <>
            { children }
        </>
    )
}