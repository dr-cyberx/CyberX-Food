import React, { useState } from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import yelp from "../api/yelp";

const ResultShowScreen = ({ route, navigation }) => {
  const [result, setResult] = useState(null);
  const { id } = route.params;
  console.log(result?.photos);

  const getResult = async (id) => {
    const { data } = await yelp.get(`/${id}`);
    setResult(data);
  };

  React.useEffect(() => {
    getResult(id);
  }, []);

  if (!result) return null;

  return (
    <View>
      <Text style={Styles.text}>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={Styles.image} source={{ uri: item }} />;
        }}
      />
    </View>
  );
};

const Styles = StyleSheet.create({
  image: {
    width: 250,
    borderRadius: 4,
    height: 180,
    marginBottom: 20,
    alignSelf: "center",
  },
  text: {
    fontSize: 22,
    fontWeight: "bold",
  },
});

export default ResultShowScreen;
