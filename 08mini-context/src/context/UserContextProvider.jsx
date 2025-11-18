import React from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children}) => {
    const [user, setUser] = React.useState(null)
    return(
        <UserContext.Provider value={{user, setUser}}>
        {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider

/*data is what data im passing in the component in value props.
 children is like outlet which allow component to render and 
 give the access of data. userContext.Provider provides a global 
 variable*/
