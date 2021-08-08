import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ResultList = ({ title, result }) => {
  return (
    <View>
      <Text style={ResultListStyle.titleStyle}>{title}</Text>
      <FlatList
        horizontal
        data={result}
        keyExtractor={(result) => result.id}
        renderItem={({item}) => <Text>{item.name}</Text>}
      />
    </View>
  );
};

const ResultListStyle = StyleSheet.create({
  titleStyle: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default ResultList;
