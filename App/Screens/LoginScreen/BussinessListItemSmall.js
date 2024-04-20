import { View, Text, Image } from "react-native";
import React from "react";
import Colors from "./Utils/Colors";

const BussinessListItemSmall = ({ business }) => {
  console.log("business: ", business);
  return (
    <View style={{ padding: 10, backgroundColor: "white", borderRadius: 8 }}>
      <Image
        source={{ uri: business?.images[0]?.url }}
        style={{
          width: 155,
          height: 105,
          overflow: "visible",
          borderRadius: 10,
          resizeMode: "stretch",
        }}
      />
      <View style={{padding:7, display:'flex',gap:1}}>
        <Text style={{ fontSize: 15, fontFamily: "outfit-bold" }}>
          {business?.name}
        </Text>
        <Text style={{ fontFamily: "outfit-medium", fontSize: 13 }}>
          {business?.contactPerson}
        </Text>
        <Text
          style={{
            fontSize: 11,
            fontFamily: "outfit",
            padding: 2,
            color: Colors.PRIMARY,
            backgroundColor: Colors.Lite_Color,
            borderRadius: 5,
            alignSelf:'flex-start',

          }}
        >
          {business?.category.name}
        </Text>
      </View>
    </View>
  );
};

export default BussinessListItemSmall;
