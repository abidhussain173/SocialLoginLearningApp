import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, } from 'react-native';
import BookListContainer from './src/ReadBook/BookListContainer';
import NavigatorContainer from './src/Navogators/NavigatorContainer/NavigatorContainer';
const App: React.FC = () => {
  return (
    <NavigatorContainer />
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;