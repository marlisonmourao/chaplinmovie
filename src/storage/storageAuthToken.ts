import AsyncStorage from "@react-native-async-storage/async-storage";

import { AUTH_TOKEN_STORAGE } from './storageConfig'

export async function storageTokenSave(session_id: string){
  await AsyncStorage.setItem(AUTH_TOKEN_STORAGE, JSON.stringify(session_id));
}

export async function storageTokenGet() {
  const storage = await AsyncStorage.getItem(AUTH_TOKEN_STORAGE)

  const token = storage ? JSON.parse(storage) : null

  return token
}

export async function storageUserRemove() {
  await AsyncStorage.removeItem(AUTH_TOKEN_STORAGE)
}

