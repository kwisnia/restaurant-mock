import { useState, useEffect, FunctionComponent } from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Restaurant } from "../APIResponseTypes";
interface IProps {
  searchHandler: (query: string) => void;
}

const SearchBar: FunctionComponent<IProps> = (props) => {
  const { searchHandler } = props;
  const [value, setValue] = useState("Wpisz adres restauracji");
  return (
    <View>
      <AntDesign name="search1" size={24} color="black" />
      <TextInput
        onChangeText={(text) => setValue(text)}
        onSubmitEditing={() => searchHandler(value)}
      />
    </View>
  );
};

export default SearchBar;
