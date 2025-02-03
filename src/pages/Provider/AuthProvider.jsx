import { createContext, useContext, useEffect, useState, } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(true);

    // const login = (userData) => {
    //     setUser(userData);
    //     localStorage.setItem("user", JSON.stringify(userData));
    // };

    useEffect(() => {
        setLoading(true)
        const token = localStorage.getItem('accessToken')
        if (token) {
            setUser(token)
            setLoading(false)
        } else {
            setUser(null)
            setLoading(false)
        }
    }, [])

    const logout = () => {
        setUser(null);
        localStorage.removeItem("user");
    };

    return (
        <AuthContext.Provider value={{
            user,
            // login,
            logout
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
