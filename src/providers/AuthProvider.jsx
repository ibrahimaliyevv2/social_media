import { Navigate } from "react-router-dom";
import Header from "../components/Header";

export default function AuthProvider({ children }) {
	let auth = true;
    
	if (!auth) {
		return < Navigate to="/login" />
	}
    return (
        <>
            <Header />
            { children }
        </>
    )
}