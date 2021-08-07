import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ResultList = ({ title }) => {
  return (
    <View>
      <Text style={ResultListStyle.titleStyle}>{title}</Text>
    </View>
  );
};

const ResultListStyle = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ResultList;
