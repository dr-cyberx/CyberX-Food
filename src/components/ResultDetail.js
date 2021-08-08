import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";

const ResultDetail = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: result.image_url }} />
      <Text style={styles.name}>{result.name}</Text>
      <Text>
        {result.rating} Stars, {result.review_count} reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    marginLeft: 15
  },
  image: {
    width: 250,
    borderRadius: 4,
    height: 260,
    marginBottom: 5
  },
  name: {
    fontSize: 17,
    fontWeight: "bold",
  },
});

export default ResultDetail;
