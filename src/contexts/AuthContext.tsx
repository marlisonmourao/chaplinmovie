import { createContext, ReactNode, useEffect, useState } from 'react';

import { api, apiKey } from '../service/api';

import { UserDTO } from '@dtos/UserDTO';
import { storageTokenSave, storageTokenGet } from '@storage/storageUser';


export type AuthContextDataProps = {
  user: UserDTO;
  signIn: (email: string, password: string) => void;
  getToken: () => void;
  session_id: string;
  isLoadingTokenStorageData: boolean
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

  async function validateToken(requestToken: string) {
    const { data } = await api.post(`/authentication/session/new?api_key=${apiKey}`, {
      request_token: requestToken
    })
    
    if(data.session_id) {
        setSession_id(data.session_id) 
        storageTokenSave(data.session_id)
      }
  }

  async function loadTokenData() { 
    try {
      setIsLoadingTokenStorageData(true)
      const userLogged = await storageTokenGet()

      if(userLogged) {
        setSession_id(userLogged)
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
      isLoadingTokenStorageData 
    }}>
      {children}
    </AuthContext.Provider>
  )
}