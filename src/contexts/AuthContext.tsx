import { createContext, ReactNode, useEffect, useState } from 'react';

import { api, apiKey } from '../service/api';

import { UserDTO } from '@dtos/UserDTO';
import { storageTokenSave, storageTokenGet, storageUserRemove } from '@storage/storageAuthToken';


export type AuthContextDataProps = {
  user: UserDTO;
  session_id: string;
  isLoadingTokenStorageData: boolean
  signIn: (email: string, password: string) => Promise<void>;
  getToken: () => Promise<void>;
  fetchDataUser: () => Promise<void>;
  signOut: () => Promise<void>;
}

type AuthContextProviderProps = {
  children: ReactNode
}

export const AuthContext = createContext<AuthContextDataProps>({} as AuthContextDataProps);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [ user, setUser ] = useState<UserDTO>({} as UserDTO);
  const [requestToken, setRequestToken] = useState('');
  const [session_id, setSession_id] = useState('')
  const [isLoadingTokenStorageData, setIsLoadingTokenStorageData] = useState(true)

  async function getToken() {
   try {
    const { data } = await api.get(`authentication/token/new?api_key=${apiKey}`)
     setRequestToken(data.request_token);
   } catch (error) {
    throw error;
   }
  }

  async function signIn(email: string, password: string) {
    try {
     const response = await api.post(`/authentication/token/validate_with_login?api_key=${apiKey}&language=pt-BR`, {
        username: email,
        password: password,
        request_token: requestToken
      })

      validateToken(response.data.request_token)

    } catch (error) {
      throw error;
    }
  }

  async function storageSessionIdUpdate(token: string) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`

      setSession_id(token) 
  }

  async function validateToken(requestToken: string) {
    try {
      const { data } = await api.post(`/authentication/session/new?api_key=${apiKey}`, {
        request_token: requestToken
      })
      
      if(data.session_id) {
          setIsLoadingTokenStorageData(true)

          await storageTokenSave(data.session_id)

          storageSessionIdUpdate(data.session_id)
        }
    } catch (error) {
      throw error
    } finally {
      setIsLoadingTokenStorageData(false)
    }
  }

  async function fetchDataUser() {
      try {
        const { data } = await api.get(`account?api_key=${apiKey}&session_id=${session_id}`)
        setUser(data)
        
      } catch (error) { 
        console.log(error)
        throw error
      }  
  }

  async function signOut() {
    try {
      setIsLoadingTokenStorageData(true)

      setSession_id('')
      await storageUserRemove()
    } catch (error) {
      throw error
    } finally {
      setIsLoadingTokenStorageData(false)
    }
  }

  async function loadTokenData() { 
    try {
      setIsLoadingTokenStorageData(true)
      const userLogged = await storageTokenGet()

      if(userLogged) {
        storageSessionIdUpdate(userLogged)
      }
      
    } catch (error) {
      throw error;
    } finally {
      setIsLoadingTokenStorageData(false)
    }
  }

  useEffect(() => {
    loadTokenData()
  }, [])

  return(
    <AuthContext.Provider value={{ 
      user, 
      signIn, 
      getToken, 
      session_id, 
      isLoadingTokenStorageData,
      fetchDataUser,
      signOut
    }}>
      {children}
    </AuthContext.Provider>
  )
}