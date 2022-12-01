import styled from "styled-components/native";

export const ContainerMain = styled.SafeAreaView`
flex:1;
background-color: ${({ theme }) => theme.colors.blue_900};
align-items: center;
padding: 20px;

`;
////////////// Header ///////////////

export const ContainerHeader = styled.View`
width: 100%;
height: 130px;
margin: 35px;
border-radius: 15px;
justify-content: space-between;
flex-direction: column;
align-items: center;
`;
export const HeaderUser = styled.View`
width: 100%;
height: 55px;
border-radius: 20px;
justify-content: space-between;
flex-direction: row;
align-items: center;
background-color: ${({ theme }) => theme.colors.blue_800};
`;

export const HelloUserName = styled.View`
width: 250px;
flex-direction: row;
align-items: center;
margin:10px
`;

export const UserName = styled.Text`
color: ${({ theme }) => theme.colors.green_700};
font-size: 22px;
`;
export const HelloText = styled.Text`
color: ${({ theme }) => theme.colors.white};
font-size: 22px;
`;

export const PhotoUser = styled.TouchableOpacity`
width: 70px;
height: 50px;
align-items: flex-end;
justify-content: center;
`;

////////////// Search ///////////////
export const Search = styled.View`
width: 100%;
height: 55px;
border-radius: 15px;
justify-content: space-between;
flex-direction: row;
align-items: center;
padding: 10px;
background-color: ${({ theme }) => theme.colors.gray_800};
`;

export const TextSearch = styled.TextInput`
font-size: 15px;
color: ${({ theme }) => theme.colors.white};
height: 50px;
width: 250px;
`;

////////////// Cards ///////////////
export const ContainerCard = styled.ScrollView`
width:100%;
flex: 1;

`;

export const CardList = styled.View`
height: 240px;
width:100%;
border-radius: 15px;
margin-bottom: 30px;
`;
export const CardTitle = styled.Text`
color: ${({ theme }) => theme.colors.white};
font-size: 22px;
letter-spacing: 1px;
margin-bottom: 15px;
`;
