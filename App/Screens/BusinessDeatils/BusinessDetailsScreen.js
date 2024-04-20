import { View, Text, Image, ScrollView, Modal } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../LoginScreen/Utils/Colors";
import Heading from "../../Components/Heading";
import BusinessPhotos from "./BusinessPhotos";
import BookingModel from "./BookingModel";
// personal information page that include all the personal information of the service providers like their phone numbers, addresses and about section
const BusinessDetailsScreen = () => {
  const navigation = useNavigation();
  const param = useRoute().params;
  const [isreadMore, setIsReadMore] = useState(false);
  const [business, setBusiness] = useState(param.business);
  const [showModel, setShowModal] = useState(false);
  useEffect(() => {
    setBusiness(param?.business);
  }, []);

  return (
    business && (
      <View style={{marginTop:'2.5%'}}>
        <ScrollView style={{ height: "90%" }}>
          <View
            style={{
              position: "absolute",
              zIndex: 1,
              marginLeft: 20,
              marginVertical: 30,
            }}
          >
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="arrow-back" size={32} color="white" />
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: 20, backgroundColor: Colors.LIGHT_GREY }}>
            <Image
              source={{ uri: business?.images[0]?.url }}
              style={{
                width: "90%",
                borderRadius: 20,
                height: 300,
                resizeMode: "stretch",
                alignSelf: "center",
              }}
            />
            <View style={{ padding: 20, display: "flex", gap: 2 }}>
              <Text style={{ fontFamily: "outfit-bold", fontSize: 30 }}>
                {business?.name}
              </Text>
              <View style={{ display: "flex", flexDirection: "row", gap: 10 }}>
                <Text
                  style={{
                    fontFamily: "outfit-medium",
                    color: Colors.PRIMARY,
                    fontSize: 25,
                  }}
                >
                  {business?.contactPerson} ✯
                </Text>
                <Text
                  style={{
                    color: Colors.LIGHT_GREY,
                    backgroundColor: Colors.PRIMARY_LIGHT,
                    padding: 5,
                    borderRadius: 5,
                    fontSize: 15,
                  }}
                >
                  {business?.category.name}
                </Text>
              </View>
              <View
                style={{ display: "flex", flexDirection: "row", padding: 5 }}
              >
                <Image
                  source={require("./../../../assets/images/placeholder.png")}
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: 20,
                    marginRight: 5,
                    paddingTop: 5,
                  }}
                />
                <Text
                  style={{ fontStyle: "italic", fontSize: 20, color: "grey" }}
                >
                  {business?.address}
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              borderWidth: 1,
              width: "90%",
              alignSelf: "center",
              borderColor: "grey",
            }}
          ></View>
          <View style={{ marginTop: "2%" }}>
            <View style={{ marginLeft: 20 }}>
              <Heading text={"About Me"} />
            </View>
            <Text
              style={{
                marginLeft: 5,
                justifyContent: "center",
                alignSelf: "center",
                fontFamily: "outfit",
                color: "grey",
                fontSize: 18,
                lineHeight: 28,
                marginRight: 5,
              }}
              numberOfLines={isreadMore ? 15 : 3}
            >
              {business.about}
            </Text>
            <TouchableOpacity onPress={() => setIsReadMore(!isreadMore)}>
              <Text
                style={{
                  color: Colors.PRIMARY,
                  fontFamily: "outfit",
                  fontSize: 20,
                  margin: 20,
                  marginLeft: 15,
                }}
              >
                {isreadMore ? "Read less!" : "Read more!"}
              </Text>
            </TouchableOpacity>
            <View
              style={{
                borderWidth: 1,
                width: "90%",
                alignSelf: "center",
                borderColor: "grey",
              }}
            ></View>
          </View>
          <BusinessPhotos business={business} />
        </ScrollView>
        <View
          style={{ display: "flex", flexDirection: "row", margin: 5, gap: 8 }}
        >
          <TouchableOpacity
            style={{
              padding: 15,
              backgroundColor: Colors.WHITE,
              borderWidth: 1,
              borderColor: Colors.PRIMARY,
              borderRadius: 50,
              flex: 1,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontFamily: "outfit",
                textAlign: "center",
                color: Colors.PRIMARY,
              }}
            >
              Message
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setShowModal(true)}
            style={{
              padding: 15,
              backgroundColor: Colors.PRIMARY,
              borderWidth: 1,
              borderColor: Colors.PRIMARY,
              borderRadius: 50,
              flex: 1,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontFamily: "outfit",
                textAlign: "center",
                color: Colors.WHITE,
              }}
            >
              Book Now
            </Text>
          </TouchableOpacity>
        </View>
        {/* Booking screen modal */}
        <Modal animationType="slide" visible={showModel}>
          <BookingModel hideModal={() => setShowModal(false)} businessId={business.id}  />
        </Modal>
      </View>
    )
  );
};

export default BusinessDetailsScreen;
