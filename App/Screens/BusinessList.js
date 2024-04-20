import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import Heading from "../Components/Heading";
import GlobalApi from "./LoginScreen/Utils/GlobalApi";
import BussinessListItemSmall from "./LoginScreen/BussinessListItemSmall";

const BusinessList = () => {
  const [businessList, setBusinessList] = useState([]);
  useEffect(() => {
    getBusinessList();
  }, []);
  const getBusinessList = () => {
    GlobalApi.getBusinessList().then((resp) => {
      setBusinessList(resp?.bussinessLists);
    });
  };
  console.log(businessList);
  return (
    <View style={{ marginTop: 10 }}>
      <Heading text={"Recent Businesses"} isViewAll={true} />

      <FlatList
        data={businessList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <View style={{ marginRight: 10 }}>
            <BussinessListItemSmall business={item} />
          
          </View>  
        )}
      />
    </View>
  );
};

export default BusinessList;
