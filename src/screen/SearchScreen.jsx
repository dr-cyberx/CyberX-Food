import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, result, errorMessage] = useResults();

  return (
    <View style={style.SearchScreen}>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        handleEndEditing={() => {
          searchApi(term);
        }}
      />
      <Text>We found {result.length} results</Text>
      {errorMessage ? <Text>{errorMessage}</Text> : null}
    </View>
  );
};

const style = StyleSheet.create({
  SearchScreen: {
    backgroundColor: "white",
  },
});

export default SearchScreen;
