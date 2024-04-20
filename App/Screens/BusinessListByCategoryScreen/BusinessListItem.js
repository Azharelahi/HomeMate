import { View, Text, Image } from "react-native";
import React from "react";
import Colors from "../LoginScreen/Utils/Colors";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

//2nd window screen
const BusinessListItem = ({ business, booking }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={{
        marginTop: 8,
        padding: 10,
        backgroundColor: Colors.WHITE,
        borderRadius: 15,

        display: "flex",
        flexDirection: "row",
        gap: 10,
      }}
      onPress={() => navigation.push("business-details", { business })}
    >
      <Image
        source={{ uri: business?.images[0]?.url }}
        style={{ width: 110, height: 110, borderRadius: 10 }}
      />
      <View style={{ display: "flex", gap: 5, marginTop: 10 }}>
        <Text
          style={{ color: "grey", fontSize: 21, fontFamily: "outfit-medium" }}
        >
          {business.contactPerson}
        </Text>
        <Text
          style={{ fontFamily: "outfit-bold", fontWeight: 300, fontSize: 19 }}
        >
          {business.name}
        </Text>
        <View style={{ display: "flex", flexDirection: "row", gap: 8 }}>
          <Image
            source={require("./../../../assets/images/placeholder.png")}
            style={{ width: 20, height: 20, borderRadius: 20 }}
          />
          <View style={{display:'flex',flexDirection:'column'}}>

            <Text
              style={{
                fontFamily: "outfit",
                color: "grey",
                fontSize: 17,
                fontStyle: "italic",
              }}
            >
              {business.address}
            </Text>
            {booking?.id ? <Text>Show Booking</Text> : null}

          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default BusinessListItem;
