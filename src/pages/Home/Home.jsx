import React, { useContext } from 'react'
import { UserContext } from '../../context'
import styles from "./Home.module.css"

function Home() {

  const [myuser, setUser] = useContext(UserContext)

  const changeUser = () => {
    setUser({name: "Debobo", email: "Debobo@debs.kap"})
  }
  
  return (
    <div className={styles.home_container}>
      <h1> Welcome to my home page {myuser.name}, your email address is {myuser.email}</h1>
      <button onClick={changeUser}> Click to set user to Debobo</button>
    </div>
  )
}

export default Home
