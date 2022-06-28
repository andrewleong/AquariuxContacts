import React from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import styles from '../styles';
const AppBar = props => {
  return (
    <View style={appBarStyles.appBarContainer}>
      {
        <MaterialIcon
          name="search"
          size={30}
          color={styles.primaryColor.color}
        />
      }
      <Text style={styles.textStyle}>Contacts</Text>
      {<MaterialIcon name="add" size={30} color={styles.primaryColor.color} />}
    </View>
  );
};

const appBarStyles = StyleSheet.create({
  appBarContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#f9f9f9',
    alignItems: 'center',
    height: 60,
    paddingTop: 10,
    shadowColor: '#171717',
    ...Platform.select({
      ios: {
        shadowOffset: {width: -2, height: 1},
        shadowOpacity: 0.2,
        shadowRadius: 1,
      },
      android: {
        elevation: 10,
      },
    }),
  },
});

export default AppBar;
