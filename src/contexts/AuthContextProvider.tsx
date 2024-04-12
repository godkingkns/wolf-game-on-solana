import { createContext, useState, useEffect, useContext, FC, ReactNode } from 'react'

import { AuthContextType, AuthData } from '../types';
import { StorageJWT } from '../constants'
import { apiSignIn, apiGetWallet } from '../api'

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider : FC<{ children: ReactNode }> = ({ children }) => {
    const [authData, setAuthData] = useState<AuthData>({
        authToken: 'fetching',
        address: 'fetching'
    })

    useEffect(() => {
        const fetchAuthData = async (storageJWT: string) => {
            const data = await apiGetWallet({ authToken: storageJWT });
            if (data) {
                setAuthData({ authToken: storageJWT, address: data!.data.address.toLowerCase()});
            } else {
                setAuthData({ authToken: null, address: null});
            }
        }
        let storageJWT = window.localStorage.getItem(StorageJWT);
        if (storageJWT !== null) {
            fetchAuthData(storageJWT);
        } else {
            setAuthData({ authToken: null, address: null });
        }
    }, [])

    const signIn = async ({ message, signature, publicKey } : { message: string, signature: string, publicKey: string }) => {
        try {
            const data = await apiSignIn({ message, signature, publicKey });
            if (data) {
                console.log("============", data)
                setAuthData({ authToken: data!.accessToken, address: data!.data.address, stakingPool: data!.data.stakingPool})
                window.localStorage.setItem(StorageJWT, data!.accessToken);
            } else {
                setAuthData({ authToken: null, address: null });
            }
        }
        catch (err) {
            console.log(err)
        }
    }

    const signOut = async () => {
        setAuthData({ authToken: null, address: null });
        window.localStorage.removeItem(StorageJWT);
    }

    const authContextValue : AuthContextType = {
        ...authData,
        signIn,
        signOut
    }

    return (
        <AuthContext.Provider value={authContextValue}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(AuthContext);

    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }

    return context;
}