import React from 'react';
import {Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import AppBar from '../components/AppBar';
import globalStyles from '../styles';

const ContactDetail = () => {
  return (
    <SafeAreaView style={globalStyles.mainContainer}>
      <AppBar />
    </SafeAreaView>
  );
};

export default ContactDetail;
