import React from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Restaurant } from "../types/APIResponseTypes";
interface IProps {
  searchHandler: (query: string) => void;
}

const SearchBar: React.FunctionComponent<IProps> = (props) => {
  const { searchHandler } = props;
  const [value, setValue] = React.useState("");
  return (
    <View
      style={{ flexDirection: "row", backgroundColor: "orange", height: 60 }}
    >
      <AntDesign
        name="search1"
        size={30}
        color="black"
        style={{ flex: 1, paddingRight: 5, margin: "auto" }}
      />
      <TextInput
        placeholder="Wpisz adres restauracji"
        onChangeText={(text) => setValue(text)}
        onSubmitEditing={() => searchHandler(value)}
        style={{ flex: 6, fontSize: 25, color: "white" }}
      />
    </View>
  );
};

export default SearchBar;
