import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultList from "../components/ResultList";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, result, errorMessage] = useResults();

  const filterResultByPrice = (price) => {
    return result.filter((res) => res.price === price);
  };

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

      <ResultList result={filterResultByPrice("$")} title="Cost Effective" />
      <ResultList result={filterResultByPrice("$$")} title="Bit Pricer" />
      <ResultList result={filterResultByPrice("$$$")} title="Bit Spender" />
    </View>
  );
};

const style = StyleSheet.create({
  SearchScreen: {
    backgroundColor: "white",
  },
});

export default SearchScreen;
