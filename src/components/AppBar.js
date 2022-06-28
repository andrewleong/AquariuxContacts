import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

const AppBar = props => {
  return (
    <View style={styles.appBarContainer}>
      {<MaterialIcon name="search" size={30} color="#900" />}
      <Text style={styles.textStyle}>Contacts</Text>
      {<MaterialIcon name="add" size={30} color="#900" />}
    </View>
  );
};

const styles = StyleSheet.create({
  appBarContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#f9f9f9',
    alignItems: 'center',
    height: 50,
    paddingTop: 15,
  },
});

export default AppBar;
