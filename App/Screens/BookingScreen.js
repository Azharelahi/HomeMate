import React, { useEffect, useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import GlobalApi from "./LoginScreen/Utils/GlobalApi";
import { useUser } from "@clerk/clerk-expo";
import BusinessListItem from "./BusinessListByCategoryScreen/BusinessListItem";
const BookingScreen = () => {
  const { user } = useUser();
  const [bookingList, setBookingList] = useState();
  useEffect(() => {
    user && getUserBookings();
  }, [user]);
  const getUserBookings = () => {
    GlobalApi.getUserBookings(user.primaryEmailAddress.emailAddress).then(
      (resp) => {
        console.log("resp", resp);
        //Get User Booking information
        setBookingList(resp.bookings);
      }
    );
  };
  return (
    <View style={{}}>
      <Text
        style={{
          marginTop: 25,
          marginLeft: 20,
          fontFamily: "outfit-bold",
          fontSize: 25,
        }}
      >
        My Bookings
      </Text>
      <View>
        <FlatList
          data={bookingList}
          renderItem={({ item, index }) => (
            <BusinessListItem business={item?.bussinessList} 
              booking = {item}
            />
            

          )}
        />
      </View>
    </View>
  );
};
export default BookingScreen;
