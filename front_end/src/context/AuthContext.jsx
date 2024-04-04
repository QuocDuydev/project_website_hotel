
import { createContext, useState, useEffect, useContext } from 'react';
import jwt_decode from "jwt-decode";
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();
export default AuthContext;


export const AuthProvider = ({ children }) => {
    let [authTokens, setAuthTokens] = useState(() => localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null);
    let [user, setUser] = useState(() => localStorage.getItem('authTokens') ? jwt_decode(localStorage.getItem('authTokens')) : null);
    let [loading, setLoading] = useState(true);
    let [loggedIn, setLoggedIn] = useState(false);
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    let loginUser = async (e) => {
        e.preventDefault();
        let response = await fetch('http://localhost:8000/api/token/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 'username': e.target.username.value, 'password': e.target.password.value })
        });

        if (response.status === 200) {
            let data = await response.json();
            try {
                // Lấy thông tin người dùng từ API
                const userDetailsResponse = await fetch('http://localhost:8000/api/users/', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        "Authorization": `Bearer ` + String(data.access),
                    }
                });

                const userDetails = await userDetailsResponse.json();

                if (userDetailsResponse.status === 200) {
                    const loggedInUser = jwt_decode(data.access);
                    setAuthTokens(data);
                    setUser(loggedInUser);
                    localStorage.setItem('authTokens', JSON.stringify(data));
                    setLoggedIn(true);
                    alert("Login Successfully!");

                    // Kiểm tra loại tài khoản
                    const isAllowedAccess = userDetails.find(user => user.id === loggedInUser.user_id && (user.account_type === 'admin' || user.account_type === 'superadmin'));

                    if (isAllowedAccess) {
                        navigate('/admin');
                        console.log(isAllowedAccess);
                    } else {
                        navigate('/');
                    }
                } else {
                    throw new Error("Failed to fetch user details");
                }
            } catch (error) {
                console.error('Error fetching user details:', error);
                alert("Error logging in");
            }
        } else {
            alert("The Username or Password is incorrect !!")
        }
    };


    let logoutUser = () => {
        setAuthTokens(null);
        setUser(null);
        localStorage.removeItem('authTokens');
        navigate('/');
        // window.location.reload();
        setLoggedIn(false);

    };


    let updateToken = async () => {
        // Kiểm tra nếu người dùng đã đăng nhập mới thực hiện cập nhật token
        if (authTokens?.refresh) {
            let response = await fetch('http://127.0.0.1:8000/api/token/refresh/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ 'refresh': authTokens.refresh })
            });

            let data = await response.json();

            if (response.status === 200) {
                setAuthTokens(data);
                setUser(jwt_decode(data.access));
                localStorage.setItem('authTokens', JSON.stringify(data));
            } else {
                logoutUser();
            }

            if (loading) {
                setLoading(false);
            }
        }
    };

    let contextData = {
        user: user,
        authTokens: authTokens,
        loginUser: loginUser,
        logoutUser: logoutUser,
    };


    useEffect(() => {

        if (loading) {
            updateToken();
        }

        let fourMinutes = 1000 * 60 * 4;

        let interval = setInterval(() => {
            if (authTokens) {
                updateToken();
            }
        }, fourMinutes);
        return () => clearInterval(interval);

    }, [authTokens, loading]);

    // Kiểm tra nếu đã đăng nhập và không phải trang đăng nhập, thì chuyển hướng đến trang chủ
    useEffect(() => {
        if (authTokens) {
            setLoggedIn(true);
        } else {
            setLoggedIn(false);
        }
    }, [authTokens]);

    return (
        <AuthContext.Provider value={contextData} >
            {children}
        </AuthContext.Provider>
    );
};


