import React, {useEffect, useState, useMemo, useCallback} from 'react';
import {Text, View, FlatList, RefreshControl} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import AppBar from '../components/AppBar';
import ListItem from '../components/ListItem';
import globalStyles from '../styles';
import {listContacts} from '../api';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

const ContactList = ({navigation, route}) => {
  const [contacts, setContacts] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  const fetchListContacts = async () => {
    const result = await listContacts();
    if (result?.length) {
      setContacts(result);
    }
  };

  const onRefresh = async () => {
    setIsFetching(true);
    await fetchListContacts();
    setIsFetching(false);
  };

  useEffect(() => {
    fetchListContacts();
  }, []);

  const routeParams = useMemo(() => route.params || {}, [route.params]);

  const onUpdateContact = useCallback(
    data => {
      // update the contact after save submission
      const foundContactIndex = contacts.findIndex(
        contact => contact.id == data?.id,
      );
      if (foundContactIndex !== -1) {
        const newArray = Object.assign([...contacts], {
          [foundContactIndex]: data,
        });

        setContacts(newArray);
      }
    },
    [routeParams],
  );

  useEffect(() => {
    onUpdateContact(routeParams);
  }, [routeParams, onUpdateContact]);

  const renderItem = ({item}) => {
    return (
      <ListItem
        id={item.id}
        firstName={item.firstName}
        lastName={item.lastName}
        email={item.email}
        phone={item.phone}
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
        refreshControl={
          <RefreshControl refreshing={isFetching} onRefresh={onRefresh} />
        }
        keyExtractor={item => item.id}
        extraData={contacts}
      />
    </SafeAreaView>
  );
};

export default ContactList;
