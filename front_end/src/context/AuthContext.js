import {createContext, useState, useEffect} from "react";
import jwt_decode from "jwt-decode";


const AuthContext = createContext();

export default AuthContext

export const AuthProvider = ({ children }) => {
    const [authTokens, setAuthTokens] = useState(() =>
        localStorage.getItem("authTokens")
            ? JSON.parse(localStorage.getItem("authTokens"))
            : null
    );
    

    const [user, setUser] = useState(() => 
        localStorage.getItem("authTokens")
            ? jwt_decode(localStorage.getItem("authTokens"))
            : null
    );


    const [loading, setLoading] = useState(true);

    const loginUser = async (username, password) => {
        const response = await fetch("http://127.0.0.1:8000/api/tasks/", {
            method: "POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                username, password
            })
        })
        const data = await response.json()
        console.log(data);

        if(response.status === 200){
            console.log("Logged In");
            setAuthTokens(data)
            setUser(jwt_decode(data.access))
            localStorage.setItem("authTokens", JSON.stringify(data))

        } else {    
            console.log(response.status);
            console.log("there was a server issue");
        }
    }

    // const registerUser = async (email, username, password, password2) => {
    //     const response = await fetch("http://127.0.0.1:8000/api/register/", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type":"application/json"
    //         },
    //         body: JSON.stringify({
    //             email, username, password, password2
    //         })
    //     })
    //     if(response.status === 201){
    //         history.push("/login")
    //         swal.fire({
    //             title: "Registration Successful, Login Now",
    //             icon: "success",
    //             toast: true,
    //             timer: 6000,
    //             position: 'top-right',
    //             timerProgressBar: true,
    //             showConfirmButton: false,
    //         })
    //     } else {
    //         console.log(response.status);
    //         console.log("there was a server issue");
    //         swal.fire({
    //             title: "An Error Occured " + response.status,
    //             icon: "error",
    //             toast: true,
    //             timer: 6000,
    //             position: 'top-right',
    //             timerProgressBar: true,
    //             showConfirmButton: false,
    //         })
    //     }
    //}

    const logoutUser = () => {
        setAuthTokens(null)
        setUser(null)
        localStorage.removeItem("authTokens")
        history.push("/login")
    }

    const contextData = {
        user, 
        setUser,
        authTokens,
        setAuthTokens,
        loginUser,
        logoutUser,
    }

    useEffect(() => {
        if (authTokens) {
            setUser(jwt_decode(authTokens.access))
        }
        setLoading(false)
    }, [authTokens, loading])

    return (
        <AuthContext.Provider value={contextData}>
            {loading ? null : children}
        </AuthContext.Provider>
    )

}
