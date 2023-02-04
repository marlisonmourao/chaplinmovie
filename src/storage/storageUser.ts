import AsyncStorage from "@react-native-async-storage/async-storage";

import { UserTokenDTO } from './../dtos/tokenDTO';
import { USER_STORAGE } from './storageConfig'

export async function storageTokenSave(token: UserTokenDTO){
  await AsyncStorage.setItem(USER_STORAGE, JSON.stringify(token));
}

export async function storageTokenGet() {
  const storage = await AsyncStorage.getItem(USER_STORAGE)

  const token: UserTokenDTO = storage ? JSON.parse(storage) : {}

  return token
}

