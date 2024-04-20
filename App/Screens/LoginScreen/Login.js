import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import Colors from "./Utils/Colors";
import * as WebBrowser from "expo-web-browser";
import { useWarmUpBrowser } from "../../hooks/warmUpBrowser";
import { useOAuth } from "@clerk/clerk-expo";

WebBrowser.maybeCompleteAuthSession();

const Login = () => {
  useWarmUpBrowser();
  
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);

  return (
    <View>
      <Image
        style={{
          height: 450,
          alignItems: "center",
          marginTop: 30,
          borderColor: "black",
          justifyContent: "center",
          alignSelf: "center",
          borderWidth: 2,
          borderRadius: 10,
        }}
        source={require("./../../../assets/images/l2.jpg")}
        resizeMode="cover"
      />
      <View style={styles.subcontainer}>
        <Text
          style={{
            fontSize: 27,
            color: Colors.WHITE,
            alignSelf: "center",
            marginTop: 20,
            fontWeight: 800,
            textAlign: "center",
          }}
        >
          Let's find{" "}
          <Text style={{ fontWeight: "bold" }}>
            professional worker's here!
          </Text>
        </Text>
        <Text
          style={{
            marginTop: 20,
            textAlign: "center",
            fontSize: 17,
            color: Colors.WHITE,
          }}
        >
          {" "}
          Best app to find services near you which deliver you a professional
          service!
        </Text>
        <TouchableOpacity
          style={{
            padding: 15,
            backgroundColor: Colors.WHITE,
            borderRadius: 99,
            marginTop: 40,
            width: "80%",
            alignSelf: "center",
          }}
          onPress={onPress}
        >
          <Text style={{ textAlign: 'center', fontSize: 15, color: Colors.PRIMARY }}>Let's Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  subcontainer: {
    width: "100%",
    backgroundColor: Colors.PRIMARY,
    height: "70%",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    marginLeft: 0,
    marginTop: -120,
  },
});

export default Login;
