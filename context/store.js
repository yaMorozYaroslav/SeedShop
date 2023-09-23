'use client'
import {createContext, useContext, useState} from 'react'

const UserContext = createContext()
export const UserState = ({ children }) => {
	const [userId, setUserId] = useState('penik')
	const [data, setData] = useState([])
	
	return(
	<UserContext.Provider value={{userId,setUserId,data,setData}}>
	 {children}
	</UserContext.Provider>
	)
	}
export const useUserContext = () => useContext(UserContext)
