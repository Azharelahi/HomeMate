import { View, Text, Touchable, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import BusinessListItem from "./BusinessListItem";
import GlobalApi from "../LoginScreen/Utils/GlobalApi";
import Colors from "../LoginScreen/Utils/Colors";
const BusinessListByCategoryScreen = () => {
  const navigation = useNavigation();
  const param = useRoute().params;
  const [businessList, setBusinessList] = useState([]);
  useEffect(() => {
    param && getBusinessByCategorry();
  }, [param]);
  const getBusinessByCategorry = () => {
    GlobalApi.getBusinessListbyCategory(param.category).then((resp) => {
      setBusinessList(resp?.bussinessLists);
    });
  };
  return (
    <View style={{ paddingTop: 35, padding: 15 }}>
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
          {param.category}
        </Text>
      </TouchableOpacity>
      {businessList?.length > 0 ? (
        <FlatList
          data={businessList}
          renderItem={({ item, index }) => <BusinessListItem business={item} />}
        />
      ) : (
        <Text
          style={{
            fontFamily: "outfit",
            fontSize: 20,
            textAlign: "center",
            marginTop: "50%",
          }}
        >
          No business found!
        </Text>
      )}
    </View>
  );
};

export default BusinessListByCategoryScreen;
