import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import GlobalApi from "./LoginScreen/Utils/GlobalApi";
import Heading from "../Components/Heading";
import { Image } from "react-native";
import Colors from "./LoginScreen/Utils/Colors";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
const Categories = () => {
  const [categories, setCategories] = useState([]);
  const navigation = useNavigation();
  useEffect(() => {
    getCategories();
  }, []);
  const getCategories = () => {
    GlobalApi.getCategories().then((resp) => {
            // console.log(resp);
      setCategories(resp?.categories);
    });
  };
  return (
    <View style={{ marginTop: 8 }}>
      <Heading text={"Categories"} isViewAll={true} />
      <FlatList
        data={categories}
        numColumns={4}
        renderItem={({ item, index }) =>
          index <= 3 && (
            <TouchableOpacity
              style={{ flex: 1, alignItems: "center" }}
              onPress={() => navigation.push("business-List",{category:item.name})}

            >
              <View
                style={{
                  backgroundColor: Colors.LIGHT_GREY,
                  padding: 7,
                  borderRadius: 99,
                }}
              >
                <Image
                  source={{ uri: item?.icon?.url }}
                  style={{ width: 30, height: 30 }}
                />
              </View>
              <Text style={{ fontFamily: "outfit-medium" }}>{item?.name}</Text>
            </TouchableOpacity>
          )
        }
      />
    </View>
  );
};

export default Categories;
