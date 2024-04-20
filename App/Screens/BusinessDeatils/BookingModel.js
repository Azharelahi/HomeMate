import {
  View,
  Text,
  FlatList,
  TextInput,
  ScrollView,
  ToastAndroid,
} from "react-native";
import React, { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import CalendarPicker from "react-native-calendar-picker";
import Colors from "../LoginScreen/Utils/Colors";
import Heading from "../../Components/Heading";
import GlobalApi from "../LoginScreen/Utils/GlobalApi";
import { useUser } from "@clerk/clerk-expo";
import moment from "moment";
const BookingModel = ({ businessId, hideModal }) => {
  const [timeList, setTimeList] = useState();
  const [selectedTime, setSelectedTime] = useState();
  const [selectedDate, setSelectedDate] = useState();
  const [note, setNote] = useState();
  const { user } = useUser();
  useEffect(() => {
    getTime();
  }, []);
  // creating booking method
  const createNewBooking = () => {
    if (!selectedTime || !selectedDate) {
      ToastAndroid.show("please select Time and Date", ToastAndroid.LONG);
      return;
    }
    const data = {
      userName: user?.fullName,
      userEmail: user?.primaryEmailAddress.emailAddress,
      time: selectedTime,
      date: moment(selectedDate).format("DD-MM--YYYY"),
      // note: note, not in the hygraph , should be added later onGlo
      businessId: businessId,
    };
    GlobalApi.createBooking(data).then((resp) => {
      console.log("Resp : ", resp);
      ToastAndroid.show("Booking placed successfully", ToastAndroid.LONG);
      hideModal();
    });
  };
  const getTime = () => {
    const timeList = [];
    for (let i = 8; i <= 12; i++) {
      timeList.push({
        time: i + ":00 AM",
      });
      timeList.push({
        time: i + ":30 AM",
      });
    }
    for (let i = 1; i <= 7; i++) {
      timeList.push({
        time: i + ":00 PM",
      });
      timeList.push({
        time: i + ":30 PM",
      });
    }
    setTimeList(timeList);
  };
  return (
    <ScrollView>
      <View style={{ padding: 15 }}>
        <TouchableOpacity
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 10,
            alignItems: "center",
            marginBottom: 15,
            marginTop: "2%",
          }}
          onPress={() => hideModal()}
        >
          <Ionicons name="arrow-back" size={27} color="black" />
          <Text style={{ fontSize: 24, fontFamily: "outfit-medium" }}>
            Booking
          </Text>
        </TouchableOpacity>
        {/* Calender Secion */}
        <Heading text={"Select Date"} />
        <View
          style={{
            backgroundColor: Colors.LIGHT_GREY,
            padding: 15,
            borderRadius: 15,
          }}
        >
          <CalendarPicker
            onDateChange={setSelectedDate}
            width={340}
            minDate={Date.now()}
            todayBackgroundColor={Colors.PRIMARY_LIGHT}
            todayTextStyle={{ color: Colors.WHITE }}
            selectedDayStyle={{ backgroundColor: "black" }}
            selectedDayTextStyle={{ color: Colors.WHITE }}
          />
        </View>
        {/*Time Selection*/}
        <View style={{ marginTop: 20 }}>
          <Heading text={"Select Time"} />
          <FlatList
            data={timeList}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                style={{ marginRight: 10 }}
                onPress={() => setSelectedTime(item.time)}
              >
                <Text
                  style={
                    selectedTime == item.time
                      ? [
                          {
                            padding: 10,
                            backgroundColor: Colors.PRIMARY_LIGHT,
                            borderWidth: 1,
                            borderColor: "purple",
                            borderRadius: 20,
                            color: "white",
                          },
                        ]
                      : {
                          padding: 10,
                          backgroundColor: Colors.LIGHT_GREY,
                          borderWidth: 1,
                          borderColor: "purple",
                          borderRadius: 20,
                          color: "purple",
                        }
                  }
                >
                  {item.time}
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>
        {/* Note Section */}
        <View style={{ paddingTop: 20 }}>
          <Heading text={"Any Suggestions Note"} />
          <TextInput
            placeholder="Note"
            multiline={true}
            numberOfLines={5}
            onChange={(text) => setNote(text)}
            style={{
              padding: 20,
              borderWidth: 2,
              borderColor: Colors.PRIMARY_LIGHT,
              borderRadius: 15,
              paddingLeft: 10,
              textAlignVertical: "top",
              fontSize: 18,
              fontFamily: "outfit",
            }}
          />
        </View>
        {/* Conirmation button */}
        <View style={{ marginTop: 20 }}>
          <TouchableOpacity onPress={() => createNewBooking()}>
            <Text
              style={{
                textAlign: "center",
                fontFamily: "outfit-medium",
                fontSize: 20,
                backgroundColor: Colors.PRIMARY,
                color: Colors.WHITE,
                borderRadius: 99,
                padding: 10,
                elevation: 2,
              }}
            >
              Confirm & Book
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default BookingModel;
