import React, { useContext } from 'react'
import UserContext from '../context/UserContext';


export function useGetUser() {
    return useContext(UserContext);
}