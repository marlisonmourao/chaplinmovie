import { useEffect } from "react";
import { FlatList } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import SearchIcon from "@expo/vector-icons/EvilIcons";
import UserDefault from "@expo/vector-icons/EvilIcons";

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

import Card from "@components/cardItem/CardItem";

import { useAuth } from "@hooks/useAuth";

export default function Home() {

  const { fecthDataUser, user } = useAuth()

  const data = [
    { id: "1", title: "Batman", nota: "10", studio: "DC Comics" },
    { id: "2", title: "Godzilla", nota: "8.3", studio: "DC Comics" },
    { id: "3", title: "John Wick", nota: "10", studio: "DC Comics" },
    { id: "4", title: "Quadrinho", nota: "10", studio: "DC Comics" },
    { id: "5", title: "Batman", nota: "10", studio: "DC Comics" },
  ];

  // useEffect(() => {
  //   AsyncStorage.clear()
  // }, [])

  useEffect(() => {
    fecthDataUser()
  }, [])

  return (
    <ContainerMain>
      <ContainerHeader>
        <HeaderUser>
          <HelloUserName>
            <HelloText>
              Olá, <UserName>{user.name}</UserName>
            </HelloText>
          </HelloUserName>

          <PhotoUser onPress={() => alert("teste")}>
            <UserDefault name="user" size={50} color="#fff" />
          </PhotoUser>
        </HeaderUser>

        <Search>
          <TextSearch
            placeholder="Buscar filme ou série"
            placeholderTextColor="#5A6A83"
          />
          <SearchIcon name="search" size={30} color="#5A6A83" />
        </Search>
      </ContainerHeader>

      <ContainerCard>
        <CardList>
          <CardTitle>Populares</CardTitle>

          <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            horizontal
            renderItem={({ item }) => <Card data={item} />}
          />
        </CardList>

        <CardList>
          <CardTitle>Grátis para assistir</CardTitle>

          <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            horizontal
            renderItem={({ item }) => <Card data={item} />}
          />
        </CardList>

        <CardList>
          <CardTitle>Grátis para assistir</CardTitle>

          <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            horizontal
            renderItem={({ item }) => <Card data={item} />}
          />
        </CardList>
      </ContainerCard>
    </ContainerMain>
  );
}
