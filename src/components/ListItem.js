import React from 'react';
import {Text, View, StyleSheet, Pressable} from 'react-native';
import styles from '../styles';

const ListItem = ({firstName, lastName}) => {
  return (
    <Pressable onPress={() => console.log('Go to screen 2')}>
      <View style={listItemStyles.container}>
        <View style={listItemStyles.circle}></View>
        <View style={listItemStyles.contactName}>
          <Text>{`${firstName} ${lastName}`}</Text>
        </View>
      </View>
    </Pressable>
  );
};

const listItemStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 10,
    borderColor: '#d9d8db',
    borderBottomWidth: 1,
  },
  circle: {
    width: 44,
    height: 44,
    borderRadius: 44 / 2,
    backgroundColor: styles.primaryColor.backgroundColor,
  },
  contactName: {
    paddingHorizontal: 5,
  },
});

export default ListItem;
