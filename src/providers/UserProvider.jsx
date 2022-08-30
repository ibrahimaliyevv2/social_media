import React, { useEffect, useState } from "react";
import UserContext from '../context/UserContext';
import { getUser } from "../utils/api";

export default function UserContextProvider({ children }) {
    const [user, setUser] = useState({});
    useEffect(()=>{
        (async ()=>{
            let _user = await getUser().catch(console.log);
            setUser(_user);
        })();
    },[])
    return (
        <UserContext.Provider value={user}>
            { children }
        </UserContext.Provider>
    )
}