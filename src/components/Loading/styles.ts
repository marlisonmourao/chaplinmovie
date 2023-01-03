import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.green_700}
`;

export const LoadingIndicator = styled.ActivityIndicator.attrs(({theme}) => ({
  color: theme.colors.blue_800,
  size: 'large'
}))``