import { useState } from "react"

type AuthUser = {
    name: string, 
    email: string
}

export const User = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const [user, setUser] = useState<AuthUser>({} as AuthUser);

    const onLogin = () => {
        setIsLoggedIn(true)
    };

    const onLogOut = () => {
        setIsLoggedIn(false);
    }

    const onSignIn = () => {
        setUser({
            name: 'Rushil',
            email: 'rp@gmail.com'
        })
    }
    
    return(
        <>
            <button onClick={onLogin}>Log In</button>
            <button onClick={onLogOut}>Log Out</button>
            <div> User is {isLoggedIn ? 'Logged In' : 'Logged Out'}</div>

            <button onClick={onSignIn}>Sign In</button>
            <p>User {user.name} {user.email}</p>
        </>
    )
}