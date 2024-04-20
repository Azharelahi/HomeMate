import { View, Text } from "react-native";
import React from "react";

const Heading = ({ text, isViewAll }) => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Text
        style={{ fontSize: 18, fontFamily: "outfit-medium", marginBottom: 10 }}
      >
        {text}
      </Text>
      {isViewAll && (
        <Text style={{ fontFamily: "outfit" }}>View All</Text>
      ) }
    </View>
  );
};

export default Heading;
