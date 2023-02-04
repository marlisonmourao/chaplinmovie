import AsyncStorage from "@react-native-async-storage/async-storage";

import { USER_STORAGE } from './storageConfig'

export async function storageTokenSave(token: string){
  await AsyncStorage.setItem(USER_STORAGE, JSON.stringify(token));
}

export async function storageTokenGet() {
  const storage = await AsyncStorage.getItem(USER_STORAGE)

  const token = storage ? JSON.parse(storage) : {}

  return token
}

