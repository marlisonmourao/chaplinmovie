import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.gray_800};
`

export const ImageBackground = styled.Image` 
  position: absolute;
`