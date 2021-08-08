import React, { useState } from "react";
import { Text, View, ScrollView, StyleSheet } from "react-native";
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
      <View>
        <SearchBar
          term={term}
          onTermChange={(newTerm) => setTerm(newTerm)}
          handleEndEditing={() => {
            searchApi(term);
          }}
        />
        <Text>We found {result.length} results</Text>
        {errorMessage ? <Text>{errorMessage}</Text> : null}
        <ScrollView>
          <ResultList
            result={filterResultByPrice("$")}
            title="Cost Effective" 
          />
          <ResultList result={filterResultByPrice("$$")} title="Bit Pricer" />
          <ResultList result={filterResultByPrice("$$$")} title="Bit Spender" />
        </ScrollView>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  SearchScreen: {
    backgroundColor: "white",
  },
});

export default SearchScreen;
