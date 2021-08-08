import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import ResultDetail from "./ResultDetail";

const ResultList = ({ title, result }) => {
  return (
    <View style={ResultListStyle.container}>
      <Text style={ResultListStyle.titleStyle}>{title}</Text>
      <FlatList
        horizontal
        data={result}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => <ResultDetail result={item} />}
      />
    </View>
  );
};

const ResultListStyle = StyleSheet.create({
  titleStyle: {
    marginLeft: 15,
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 5
  },
  container: {
    marginBottom: 15,
  },
});

export default ResultList;
