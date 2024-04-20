import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const BackButton = ({ title }) => {
  const navigation = useNavigation(); // Moved inside the functional component
  return (
    <View>
      <TouchableOpacity
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 10,
          alignItems: "center",
        }}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back" size={27} color="black" />
        <Text style={{ fontSize: 24, fontFamily: "outfit-medium" }}>
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BackButton;
