import React, { Component } from "react";
import { View, Text, Image } from "react-native";
class ComponentSelectvehicleNoPlateImage extends Component {
  state = {};
  render() {
    return (
      <View style={{ width: "100%", height: 55 }}>
        <View
          style={{
            width: "100%",
            height: 50,
            padding: 10,
            flexDirection: "row",
            justifyContent: "space-between"
          }}
        >
          <Text
            style={{ fontFamily: "GoogleSans-Regular", fontSize: 15, top: 5 }}
          >
            Select Number plate image
          </Text>

          <Image
            style={{
              width: 100,
              height: 40,
              borderRadius: 5,
              position: "absolute",
              right: 5,
              top: 5
            }}
            source={require("../assets/driver_bg.jpg")}
          />
        </View>

        <View
          style={{ width: "100%", height: 1, backgroundColor: "#bbbbbb" }}
        />
      </View>
    );
  }
}

export default ComponentSelectvehicleNoPlateImage;
