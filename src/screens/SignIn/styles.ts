import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.gray_900};
  justify-content: center;
  align-items: center;

  padding: 0 15px;
`;

export const Logo = styled.Image.attrs(() => ({
  resizeMode: "contain",
}))`
  width: 200px;
  height: 200px;
`;

export const Heading = styled.Text`
  margin-top: 40px;
  font-size: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
`;

export const ContainerForm = styled.View`
  width: 100%;
  margin-top: 16px;
`;

export const ButtonSignin = styled(TouchableOpacity)`
  width: 100%;
  height: 56px;
  background-color: ${({ theme }) => theme.colors.green_700};
  justify-content: center;

  margin-top: 32px;
  border-radius: 6px;
`;
export const TextButton = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 22px;
  text-align: center;
`;
