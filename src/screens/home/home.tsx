import { FlatList} from "react-native";
import {  
    ContainerMain,
    ContainerHeader,
    HeaderUser, 
    HelloUserName,
    UserName,
    PhotoUser,
    HelloText,
    Search,
    TextSearch,
    ContainerCard,
    CardList,
    CardTitle,
} from "./styleHome";
import UserDefault from '@expo/vector-icons/EvilIcons';
import SearchIcon from '@expo/vector-icons/EvilIcons';
import Card from "@components/cardItem/CardItem";

export default function Home(){

  const data = [
    {id:'1', title:'Batman', nota:'10', studio:'DC Comics'},
    {id:'2', title:'Godzilla', nota:'8.3', studio:'DC Comics'},
    {id:'3', title:'John Wick', nota:'10', studio:'DC Comics'},
    {id:'4', title:'Quadrinho', nota:'10', studio:'DC Comics'},
    {id:'5', title:'Batman', nota:'10',studio:'DC Comics'}
  ];

    return(
        <ContainerMain>
            <ContainerHeader>
       
                <HeaderUser>
               
                    <HelloUserName>
                      <HelloText>
                        Olá, <UserName>  Estêvão Angeluz </UserName>       
                      </HelloText>               
                    </HelloUserName> 

                    <PhotoUser 
                        onPress={()=>alert('teste')}>
                    <UserDefault 
                        name="user" 
                        size={50} 
                        color='#fff'
                      />
                    </PhotoUser>   
                     
                </HeaderUser> 
          
                    <Search>
                      <TextSearch
                      placeholder="Buscar filme ou série"
                      placeholderTextColor='#5A6A83'   
                    />        
                      <SearchIcon
                      name="search" 
                      size={30} 
                      color='#5A6A83'
                    />   
                  </Search>

            </ContainerHeader>

            <ContainerCard>
                 
                  <CardList>

                    <CardTitle>
                      Populares       
                    </CardTitle>

                    <FlatList
                      data={data}
                      keyExtractor={(item) => item.id}
                      horizontal
                      renderItem={({item}) => <Card data={item}/>}
                    />
                    
                  </CardList> 

                  <CardList>

                    <CardTitle>
                      Grátis para assistir      
                    </CardTitle>

                      <FlatList
                        data={data}
                        keyExtractor={(item) => item.id}
                        horizontal
                        renderItem={({item}) => <Card data={item}/>}
                      />

                  </CardList>  
                  
            </ContainerCard>


        </ContainerMain>
    );
}