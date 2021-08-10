import React from "react";
import { View, Text, StyleSheet } from "react-native";
import yelp from "../api/yelp";

const ResultShowScreen = ({ route, navigation }) => {
  const { id } = route.params;
  console.log(id);

  const getResult = async () => {
    await yelp.get(`/${id}`);
  };

  return (
    <View>
      <Text>Detail screen</Text>
    </View>
  );
};

export default ResultShowScreen;
