import AsyncStorage from "@react-native-async-storage/async-storage";

import { USER_STORAGE } from './storageConfig'

export async function storageTokenSave(session_id: string){
  await AsyncStorage.setItem(USER_STORAGE, JSON.stringify(session_id));
}

export async function storageTokenGet() {
  const storage = await AsyncStorage.getItem(USER_STORAGE)

  const token = storage ? JSON.parse(storage) : null

  return token
}

