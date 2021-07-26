import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  return (
    <View style={style.SearchScreen}>
      <Text>{term}</Text>
      <SearchBar term={term} onTermChange={(newTerm) => setTerm(newTerm)} />
    </View>
  );
};

const style = StyleSheet.create({
  SearchScreen: {
    backgroundColor: "white",
  },
});

export default SearchScreen;
