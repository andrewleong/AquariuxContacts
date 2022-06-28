import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import AppBar from '../components/AppBar';
import globalStyles from '../styles';

const ContactDetail = ({navigation}) => {
  const handleCancel = () => navigation.goBack();

  const handleSave = () => console.log('Saved');

  return (
    <SafeAreaView style={globalStyles.mainContainer}>
      <AppBar
        leftComponent={
          <TouchableOpacity onPress={handleCancel}>
            <Text style={globalStyles.primaryColor}>Cancel</Text>
          </TouchableOpacity>
        }
        rightComponent={
          <TouchableOpacity onPress={handleSave}>
            <Text style={globalStyles.primaryColor}>Save</Text>
          </TouchableOpacity>
        }
      />
    </SafeAreaView>
  );
};

export default ContactDetail;
