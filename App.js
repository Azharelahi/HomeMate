// App.js
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { ClerkProvider } from '@clerk/clerk-react';
import { SignedIn, SignedOut } from '@clerk/clerk-react';
import * as SecureStore from 'expo-secure-store';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigations from './App/Navigations/TabNavigations';
import LoginScreen from './App/Screens/LoginScreen/Login';
import { useFonts } from 'expo-font';
export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'outfit': require('../React-native-home-services-app/assets/fonts/Outfit-Regular.ttf'),
    'outfit-medium': require('../React-native-home-services-app/assets/fonts/Outfit-Medium.ttf'),
    'outfit-bold': require('../React-native-home-services-app/assets/fonts/Outfit-Bold.ttf'),
  });
  const tokenCache = {
    async getToken(key) {
      try {
        return SecureStore.getItemAsync(key);
      } catch (err) {
        return null;
      }
    },
    async saveToken(key, value) {
      try {
        return SecureStore.setItemAsync(key, value);
      } catch (err) {
        return;
      }
    },
  };

  return (
    <ClerkProvider
      tokenCache={tokenCache}
      publishableKey="pk_test_cHJlbWl1bS1kb2dmaXNoLTUyLmNsZXJrLmFjY291bnRzLmRldiQ"
    >
      <View style={{ flex: 1 }}>
        <NavigationContainer>
          <SignedIn>
            <TabNavigations />
          </SignedIn>
          <SignedOut>
            <LoginScreen />
          </SignedOut>
        </NavigationContainer>
        <StatusBar style="auto" />
      </View>
    </ClerkProvider>
  );
}
