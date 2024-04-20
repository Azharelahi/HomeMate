import { View, Text, Image, TextInput } from "react-native";
import React from "react";
import { useUser } from "@clerk/clerk-expo";
import Colors from "./LoginScreen/Utils/Colors";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
const Header = () => {
  const { user, isloading } = useUser();
  return (
    user && (
      <View
        style={{
          padding: 20,
          paddingTop: 15,
          backgroundColor: Colors.PRIMARY,
          borderRadius: 20,
          width: "95%",
          alignSelf: "center",
          marginTop: 15,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
            }}
          >
            <Image
              source={{ uri: user?.imageUrl }}
              style={{ width: 50, height: 45, marginLeft: 1, borderRadius: 99 }}
            />
            <View>
              <Text style={{ color: Colors.WHITE, fontFamily: "outfit" }}>
                Welcome
              </Text>
              <Text
                style={{
                  color: Colors.WHITE,
                  fontSize: 20,
                  fontFamily: "outfit",
                }}
              >
                {user?.fullName}
              </Text>
            </View>
          </View>
          <FontAwesome
            style={{ marginRight: "2%" }}
            name="bookmark"
            size={27}
            color="white"
          />
        </View>
        {/* search bar section */}
        <View
          style={{
            marginTop: 15,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 10,
          }}
        >
          <TextInput
            placeholder="search"
            style={{
              padding: 7,
              paddingHorizontal: 16,
              backgroundColor: Colors.WHITE,
              borderRadius: 10,
              width: "85%",
              fontSize: 17,
              fontFamily: "outfit",
            }}
          />
          <AntDesign
            style={{
              backgroundColor: Colors.WHITE,
              padding: 10,
              borderRadius: 10,
            }}
            name="search1"
            size={24}
            color={Colors.PRIMARY}
          />
        </View>
      </View>
    )
  );
};

export default Header;
