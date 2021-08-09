import React, { useState } from "react";
import { Text, View, ScrollView, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultList from "../components/ResultList";

const SearchScreen = ({ navigation }) => {
  const [term, setTerm] = useState("");
  const [searchApi, result, errorMessage] = useResults();

  const filterResultByPrice = (price) => {
    return result.filter((res) => res.price === price);
  };

  return (
    // we can also use react fragment to group all the component inside it for vertical scroll
    <View style={style.SearchScreen}>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        handleEndEditing={() => {
          searchApi(term);
        }}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <ResultList
          navigation={navigation}
          result={filterResultByPrice("$")}
          title="Cost Effective"
        />
        <ResultList
          navigation={navigation}
          result={filterResultByPrice("$$")}
          title="Bit Pricer"
        />
        <ResultList
          navigation={navigation}
          result={filterResultByPrice("$$$")}
          title="Bit Spender"
        />
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  SearchScreen: {
    backgroundColor: "white",
    flex: 1,
  },
});

export default SearchScreen;
