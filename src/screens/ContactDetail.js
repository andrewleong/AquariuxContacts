import React, {useState, useRef} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  ScrollView,
  View,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Input,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import AppBar from '../components/AppBar';
import globalStyles from '../styles';
import {debounce} from '../utils';

const ContactDetail = ({navigation}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const lastNameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const phoneInputRef = useRef(null);

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
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        enabled>
        <ScrollView>
          <View style={styles.circleContainer}>
            <View style={styles.circle}></View>
          </View>

          <View style={styles.titleHeader}>
            <Text style={styles.titleHeaderText}>Main Information</Text>
          </View>

          <View style={styles.inputRow}>
            <Text>First Name</Text>
            <TextInput
              autoCapitalize="none"
              style={styles.input}
              onChangeText={text => debounce(setFirstName(text))}
              value={firstName}
              placeholder="first name"
              onSubmitEditing={() => {
                lastNameInputRef.current.focus();
              }}
            />
          </View>

          <View style={styles.hairLine} />

          <View style={styles.inputRow}>
            <Text>Last Name</Text>
            <TextInput
              autoCapitalize="none"
              style={styles.input}
              onChangeText={text => debounce(setLastName(text))}
              value={lastName}
              placeholder="last name"
              ref={lastNameInputRef}
              onSubmitEditing={() => {
                emailInputRef.current.focus();
              }}
            />
          </View>

          <View style={styles.titleHeader}>
            <Text style={styles.titleHeaderText}>Sub Information</Text>
          </View>

          <View style={styles.inputRow}>
            <Text>Email</Text>
            <TextInput
              autoCapitalize="none"
              style={styles.input}
              onChangeText={text => debounce(setEmail(text))}
              value={email}
              placeholder="test@furnafix.com"
              ref={emailInputRef}
              onSubmitEditing={() => {
                phoneInputRef.current.focus();
              }}
            />
          </View>

          <View style={styles.hairLine} />

          <View style={styles.inputRow}>
            <Text>Phone</Text>
            <TextInput
              autoCapitalize="none"
              style={styles.input}
              onChangeText={text => debounce(setPhone(text))}
              value={phone}
              placeholder="(997) 123-4567"
              ref={phoneInputRef}
            />
          </View>

          <View style={styles.hairLine} />
        </ScrollView>
      </KeyboardAvoidingView>
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
  titleHeader: {
    padding: 10,
    backgroundColor: '#f7f7f7',
    width: '100%',
  },
  titleHeaderText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  inputRow: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  input: {
    width: '70%',
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    borderColor: '#d1d0d1',
  },
  hairLine: {
    borderColor: '#d1d0d1',
    marginHorizontal: 20,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default ContactDetail;
