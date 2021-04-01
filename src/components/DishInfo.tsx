import React from "react";
import { StyleSheet, View, Text, ViewStyle } from "react-native";
interface IProps {
  name: string;
  type: string;
  cost: number;
  style?: ViewStyle;
}
const DishInfo = (props: IProps) => {
  const { name, type, cost } = props;
  return (
    <View style={props.style}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.subtitle}>{type}</Text>
      <Text style={styles.price}>{cost} zł</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 40,
    color: "orange",
  },
  subtitle: {
    fontSize: 12,
    color: "grey",
  },
  price: {
    fontSize: 25,
    color: "blue",
  },
});

export default DishInfo;
