import React from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import globalStyles from '../styles';

const AppBar = props => {
  return (
    <View style={styles.container}>
      {
        <MaterialIcon
          name="search"
          size={30}
          color={globalStyles.primaryColor.color}
        />
      }
      <Text style={globalStyles.textStyle}>Contacts</Text>
      {
        <MaterialIcon
          name="add"
          size={30}
          color={globalStyles.primaryColor.color}
        />
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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
