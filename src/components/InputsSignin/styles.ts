import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
`
export const Inputs = styled.TextInput`
  width: 100%;
  height: 56px;

  background-color: ${({ theme }) => theme.colors.gray_300};
  color: ${({ theme }) => theme.colors.gray_500};
  font-size: 16px;

  border-radius: 6px;
  margin-top: 16px;
  padding: 16px;
`;

export const Error = styled.Text`
  color: ${({ theme }) => theme.colors.attention_light};
  font-size: 14px;
`