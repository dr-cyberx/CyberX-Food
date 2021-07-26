import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather } from '@expo/vector-icons'; 

const SearchBar = () => {
  return (
    <View style={style.background}>
      <Text>This is Search Screen</Text>
      <Feather name="search" size={24} color="black" />
    </View>
  );
};

const style = StyleSheet.create({
  background: {
    backgroundColor: "#F0EEEE",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15
  },
});

export default SearchBar;
