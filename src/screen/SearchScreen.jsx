import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [result, setResults] = useState([]);

  const searchApi = async () => {
    const response = await yelp.get("/search", {
      params: {
        limits: 50,
        term,
        location: "san jose",
      },
    });
    setResults(response.data.businesses);
  };

  return (
    <View style={style.SearchScreen}>
      <Text>{term}</Text>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        handleEndEditing={() => {
          searchApi();
        }}
      />
      <Text>We found {result.length} results</Text>
    </View>
  );
};

const style = StyleSheet.create({
  SearchScreen: {
    backgroundColor: "white",
  },
});

export default SearchScreen;
