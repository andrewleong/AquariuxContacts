import React, {useEffect, useState} from 'react';
import {Text, View, FlatList} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import AppBar from '../components/AppBar';
import ListItem from '../components/ListItem';
import globalStyles from '../styles';
import {listContacts} from '../api';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

const ContactList = ({navigation}) => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const initListContacts = async () => {
      const result = await listContacts();
      if (result?.length) {
        setContacts(result);
      }
    };
    initListContacts();
  }, []);

  const renderItem = ({item}) => {
    return (
      <ListItem
        firstName={item.firstName}
        lastName={item.lastName}
        navigation={navigation}
      />
    );
  };

  return (
    <SafeAreaView style={globalStyles.mainContainer}>
      <AppBar
        title={'Contacts'}
        leftComponent={
          <MaterialIcon
            name="search"
            size={30}
            color={globalStyles.primaryColor.color}
          />
        }
        rightComponent={
          <MaterialIcon
            name="add"
            size={30}
            color={globalStyles.primaryColor.color}
          />
        }
      />
      <FlatList
        data={contacts}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default ContactList;
