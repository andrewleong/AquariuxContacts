import React from 'react';
import {Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import styles from '../styles';

const ContactList = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Text>This is top text.</Text>
      <Text>This is bottom text.</Text>
    </SafeAreaView>
  );
};

export default ContactList;
