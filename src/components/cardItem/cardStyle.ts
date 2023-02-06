import styled from "styled-components/native";
export const Cards = styled.View`
align-items: center;
height: 150px;
width:100px;
border-radius: 15px;
margin-bottom: 20px;
margin-right: 10px;

`;

export const CardPoster = styled.TouchableOpacity`
height: 120px;
width:100%;
border-radius: 15px;
background-color: ${({ theme }) => theme.colors.white};
`;

export const CardDescription= styled.View`

height: 60px;
width:100%;
padding: 5px;
`;

export const TitleMidia = styled.Text`
color: ${({ theme }) => theme.colors.white};
font-size: 16px;
`;

export const TextStudio = styled.Text`
color: ${({ theme }) => theme.colors.gray_500};
font-size: 12px;
`;

export const TextNote= styled.Text`
color: ${({ theme }) => theme.colors.white};
font-size: 14px;
`;