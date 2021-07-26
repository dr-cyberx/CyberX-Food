import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar';

const SearchScreen = () => {
  return (
    <View style={style.SearchScreen}>
      <SearchBar />
    </View>
  )
}

const style = StyleSheet.create({
  SearchScreen: {
    backgroundColor: 'white',
  }
})

export default SearchScreen
