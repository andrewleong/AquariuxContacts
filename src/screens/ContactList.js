import React, {useEffect, useState} from 'react';
import {Text, View, FlatList} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import AppBar from '../components/AppBar';
import ListItem from '../components/ListItem';
import globalStyles from '../styles';
import {listContacts} from '../api';

const ContactList = () => {
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

  const renderItem = ({item}) => (
    <ListItem firstName={item.firstName} lastName={item.lastName} />
  );

  return (
    <SafeAreaView style={globalStyles.mainContainer}>
      <AppBar />
      <FlatList
        data={contacts}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default ContactList;
