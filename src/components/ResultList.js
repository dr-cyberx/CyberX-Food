import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import ResultDetail from "./ResultDetail";

const ResultList = ({ title, result, navigation }) => {
  return (
    <View style={ResultListStyle.container}>
      <Text style={ResultListStyle.titleStyle}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={result}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={()=>navigation.navigate('Detail')}
          >
            <ResultDetail result={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const ResultListStyle = StyleSheet.create({
  titleStyle: {
    marginLeft: 15,
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 5,
  },
  container: {
    marginBottom: 15,
  },
});

export default ResultList;
