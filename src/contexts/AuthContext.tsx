import { createContext, ReactNode, useEffect, useState } from 'react';

import { api, apiKey } from '../service/api';

import { UserDTO } from '@dtos/UserDTO';
import { UserTokenDTO } from '@dtos/tokenDTO';
import { storageTokenSave, storageTokenGet } from '@storage/storageUser';


export type AuthContextDataProps = {
  user: UserDTO;
  signIn: (email: string, password: string) => void;
  getToken: () => void;
  token: UserTokenDTO;
}

type AuthContextProviderProps = {
  children: ReactNode
}

export const AuthContext = createContext<AuthContextDataProps>({} as AuthContextDataProps);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [ user, setUser ] = useState<UserDTO>({} as UserDTO);
  const [requestToken, setRequestToken] = useState();
  const [token, setToken] = useState<UserTokenDTO>({} as UserTokenDTO);

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
      await api.post(`/authentication/token/validate_with_login?api_key=${apiKey}&language=pt-BR`, {
        username: email,
        password: password,
        request_token: requestToken
      }).then(async response => {
         await api.post(`/authentication/session/new?api_key=${apiKey}`, {
          request_token: requestToken
        })
        setToken(response.data)
        // storageTokenSave(response.data)
      })
    } catch (error) {
      throw error;
    }
  }

  // async function loadTokenData() {
  //   const userLogged = await storageTokenGet()

  //   if(userLogged) {
  //     setToken(userLogged)
  //   }
  // }

  // useEffect(() => {
  //   loadTokenData()
  // }, [])

  return(
    <AuthContext.Provider value={{ user, signIn, getToken, token }}>
      {children}
    </AuthContext.Provider>
  )
}