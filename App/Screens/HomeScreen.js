import { View, ScrollView } from 'react-native';
import React from 'react';
import Header from './Header';
import Slider from './Slider';
import Categories from './Categories';
import BusinessList from './BusinessList';

const HomeScreen = () => {
  return (
    <ScrollView>
      <View style={{ marginTop: 30 }}>
        <Header/>
        <View style={{ padding: 15 }}>
          <Slider />
          <Categories />
          <BusinessList />
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
