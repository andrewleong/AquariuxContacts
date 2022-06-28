import React from 'react';
import {Text} from 'react-native';

import styles from '../styles';

const ContactDetail = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Text>This is top text.</Text>
      <Text>This is bottom text.</Text>
    </SafeAreaView>
  );
};

export default ContactDetail;
