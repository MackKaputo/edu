import React, { createContext, useEffect, useState } from "react"

const UserContext = createContext({})

const UserProvider = ({ children }) => {
    const [user, setUser ] = useState({name: "mack", email: "mack@email.com"})

    useEffect(() => {
        setTimeout(() => {
            setUser({
                name: "elie",
                email: "elie@mailing.kap"
            })
        }, 5000)
    },[])

    return <UserContext.Provider value={[user, setUser]} >
        {children}
    </UserContext.Provider>
}

export { UserContext, UserProvider}