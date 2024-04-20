import { View, Text, FlatList, Image } from "react-native";
import React, { useEffect, useState } from "react";
import GlobalApi from "./LoginScreen/Utils/GlobalApi";
import Heading from "../Components/Heading";

const Slider = () => {
  const [slider, setSlider] = useState([]);

  useEffect(() => {
    getSliders();
  }, []);

  const getSliders = () => {
    GlobalApi.getSlider().then((resp) => {
      setSlider(resp?.sliders);
    });
  };

  return (
    <View>
      <Heading text = {'Offers for you'}/>
      <FlatList
      horizontal={true}
      showsHorizontalScrollIndicator={false}
        data={slider}
        renderItem={({ item, index }) => (
          <View style={{marginRight:20}}>
            <Image
              source={{ uri: item.image?.url }}
              style={{
                width: 240,
                height: 150,
                borderRadius: 50,
                resizeMode:'stretch' 
              
                
              }}
            />
          </View>
        )}
      />
    </View>
  );
};

export default Slider;
