import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ term, onTermChange, handleEndEditing }) => {
  return (
    <View style={style.background}>
      <Feather name="search" style={style.iconStyle} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        value={term}
        onChangeText={onTermChange}
        style={style.TextInputStyle}
        placeholder="Search"
        onEndEditing={handleEndEditing}
      />
    </View>
  );
};

const style = StyleSheet.create({
  background: {
    backgroundColor: "#F0EEEE",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: "row",
    marginTop: 15,
  },
  TextInputStyle: {
    flex: 1,
    fontSize: 18,
    // outlineStyle: "none",
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: "center",
    marginHorizontal: 10,
  },
});

export default SearchBar;
