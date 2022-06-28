import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ContactList from '../screens/ContactList';
import ContactDetail from '../screens/ContactDetail';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ContactList">
        <Stack.Screen name="ContactList" component={ContactList} />
        <Stack.Screen name="ContactDetail" component={ContactDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
