import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import globalStyles from '../styles';

const Loader = () => {
  return (
    <>
      <View style={styles.container}>
        <ActivityIndicator size="large" />
      </View>

      <View style={styles.background}></View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    flex: 1,
    zIndex: 2,
    top: '50%',
    left: '50%',
    bottom: '50%',
    right: '50%',
  },
  background: {
    backgroundColor: globalStyles.primaryColor.color,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },
});

export default Loader;
