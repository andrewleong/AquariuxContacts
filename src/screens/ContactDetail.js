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
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import AppBar from '../components/AppBar';
import globalStyles from '../styles';
import {debounce, validateEmail, validatePhone} from '../utils';

const ContactDetail = ({navigation, route}) => {
  const {params} = route;
  const [firstName, setFirstName] = useState(params?.firstName);
  const [lastName, setLastName] = useState(params?.lastName);
  const [email, setEmail] = useState(params?.email);
  const [phone, setPhone] = useState(params?.phone);
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);

  const lastNameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const phoneInputRef = useRef(null);

  const handleClearErrors = () => {
    setFirstNameError(false);
    setLastNameError(false);
    setEmailError(false);
    setPhoneError(false);
  };

  const handleCancel = () => {
    handleClearErrors();
    navigation.goBack();
  };

  const handleSave = () => {
    if (!firstName) {
      setFirstNameError(true);
    }
    if (!lastName) {
      setLastNameError(true);
    }
    if (email && !validateEmail(email)) {
      setEmailError(true);
    }
    if (phone && !validatePhone(phone)) {
      setPhoneError(true);
    }

    if (!(firstNameError && lastNameError && emailError && phoneError)) {
      // save
      navigation.navigate('ContactList', {
        id: params?.id,
        firstName,
        lastName,
        email,
        phone,
      });
    }
  };

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
            <View style={styles.textContainer}>
              <Text>First Name</Text>
            </View>

            <View style={styles.textInputContainer}>
              <TextInput
                autoCapitalize="none"
                style={[styles.input, firstNameError && styles.errorBorder]}
                onChangeText={text => {
                  debounce(setFirstName(text));
                  setFirstNameError(false);
                }}
                value={firstName}
                placeholder="first name"
                onSubmitEditing={() => {
                  lastNameInputRef.current.focus();
                }}
              />
              {firstNameError && (
                <Text style={styles.errorText}>First name is required</Text>
              )}
            </View>
          </View>

          <View style={styles.hairLine} />

          <View style={styles.inputRow}>
            <View style={styles.textContainer}>
              <Text>Last Name</Text>
            </View>
            <View style={styles.textInputContainer}>
              <TextInput
                autoCapitalize="none"
                style={[styles.input, lastNameError && styles.errorBorder]}
                onChangeText={text => {
                  debounce(setLastName(text));
                  setLastNameError(false);
                }}
                value={lastName}
                placeholder="last name"
                ref={lastNameInputRef}
                onSubmitEditing={() => {
                  emailInputRef.current.focus();
                }}
              />
              {lastNameError && (
                <Text style={styles.errorText}>Last name is required</Text>
              )}
            </View>
          </View>

          <View style={styles.titleHeader}>
            <Text style={styles.titleHeaderText}>Sub Information</Text>
          </View>

          <View style={styles.inputRow}>
            <View style={styles.textContainer}>
              <Text>Email</Text>
            </View>
            <View style={styles.textInputContainer}>
              <TextInput
                autoCapitalize="none"
                style={[styles.input, emailError && styles.errorBorder]}
                onChangeText={text => {
                  debounce(setEmail(text));
                  setEmailError(false);
                }}
                value={email}
                placeholder="test@furnafix.com"
                ref={emailInputRef}
                onSubmitEditing={() => {
                  phoneInputRef.current.focus();
                }}
              />
              {emailError && (
                <Text style={styles.errorText}>Provided email is invalid</Text>
              )}
            </View>
          </View>

          <View style={styles.hairLine} />

          <View style={styles.inputRow}>
            <View style={styles.textContainer}>
              <Text>Phone</Text>
            </View>
            <View style={styles.textInputContainer}>
              <TextInput
                autoCapitalize="none"
                style={[styles.input, phoneError && styles.errorBorder]}
                onChangeText={text => {
                  debounce(setPhone(text));
                  setPhoneError(false);
                }}
                value={phone}
                placeholder="(997) 123-4567"
                ref={phoneInputRef}
              />
              {phoneError && (
                <Text style={styles.errorText}>
                  Provided phone number is invalid
                </Text>
              )}
            </View>
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
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },
  textContainer: {
    flex: 0.3,
    alignItems: 'center',
  },
  textInputContainer: {
    flex: 0.7,
    marginHorizontal: 15,
    paddingVertical: 5,
    alignItems: 'flex-start',
  },
  input: {
    width: '100%',
    height: 40,
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
  errorBorder: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
  },
});

export default ContactDetail;
