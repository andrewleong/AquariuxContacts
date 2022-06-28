import React, {useState} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  ScrollView,
  View,
  TextInput,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import AppBar from '../components/AppBar';
import globalStyles from '../styles';

const ContactDetail = ({navigation}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

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
      <ScrollView>
        <View style={styles.circleContainer}>
          <View style={styles.circle}></View>
        </View>

        <View
          style={{
            backgroundColor: 'grey',
            width: '100%',
          }}>
          <Text>Main Information</Text>
          <Text>First Name</Text>
          <TextInput
            style={styles.input}
            onChangeText={setFirstName}
            value={firstName}
          />
          <View style={styles.hairLine} />
          <Text>Last Name</Text>
          <TextInput
            style={styles.input}
            onChangeText={setLastName}
            value={lastName}
          />
          <Text>Sub Information</Text>
          <Text>Email</Text>
          <TextInput
            style={styles.input}
            onChangeText={setEmail}
            value={email}
          />
          <View style={styles.hairLine} />
          <Text>Phone</Text>
          <TextInput
            style={styles.input}
            onChangeText={setPhone}
            value={phone}
          />
          <View style={styles.hairLine} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  circleContainer: {
    marginVertical: 20,
    alignItems: 'center',
  },
  circle: {
    width: 120,
    height: 120,
    borderRadius: 120 / 2,
    backgroundColor: globalStyles.primaryColor.color,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  hairLine: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default ContactDetail;
