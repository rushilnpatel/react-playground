import { useContext, useState } from "react"
import { UserContext } from "../context/UserContext";

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
    
    const userContext = useContext(UserContext);

    const onContextSignIn = () => {
        if(userContext) {
            userContext.setUser({
                name: 'Rushil',
                email: 'rp@outlook.com'
            })
        }
    }
    const onContectSignOut = () => {
        if(userContext) {
            userContext.setUser(null);
        }
    }

    return(
        <>
            <button onClick={onLogin}>Log In</button>
            <button onClick={onLogOut}>Log Out</button>
            <div> User is {isLoggedIn ? 'Logged In' : 'Logged Out'}</div>

            <button onClick={onSignIn}>Sign In</button>
            <p>User {user.name} {user.email}</p>

            {userContext && userContext.user ?
                <>
                    <button style={{backgroundColor: 'khaki'}} onClick={onContectSignOut}>Sign Out with Context</button>
                <div>
                    Welcome, User Name - {userContext.user?.name} - {userContext.user?.email}
                </div>
                </>
                : <>
                <button style={{backgroundColor: 'navajowhite'}} onClick={onContextSignIn}>Sign In with Context</button>
                
                </>
            }
        </>
    )
}