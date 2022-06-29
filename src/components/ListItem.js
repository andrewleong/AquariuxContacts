import React from 'react';
import {Text, View, StyleSheet, Pressable} from 'react-native';
import globalStyles from '../styles';

const ListItem = ({id, firstName, lastName, email, phone, navigation}) => {
  const handleItemClick = () =>
    navigation?.navigate('ContactDetail', {
      id,
      firstName,
      lastName,
      email,
      phone,
    });

  return (
    <Pressable onPress={handleItemClick}>
      <View style={styles.container}>
        <View style={styles.circle}></View>
        <View style={styles.contactName}>
          <Text>{`${firstName} ${lastName}`}</Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
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
    backgroundColor: globalStyles.primaryColor.color,
  },
  contactName: {
    paddingHorizontal: 5,
  },
});

export default ListItem;
