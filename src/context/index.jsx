import React, { createContext, useEffect, useState } from "react"

const UserContext = createContext({})

const UserProvider = ({ children }) => {
    const [user, setUser ] = useState({name: "", email: "", loading: null})

    useEffect(() => {
        setTimeout(() => {
            setUser({
                name: "elie",
                email: "elie@mailing.kap",
                loading: false
            })
        }, 3000)
    },[])

    return <UserContext.Provider value={[user, setUser]} >
        {children}
    </UserContext.Provider>
}

export { UserContext, UserProvider}