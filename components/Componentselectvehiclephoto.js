import React, { Component } from "react";
import { View, Text, Image } from "react-native";
class ComponentSelectvehicleImage extends Component {
  state = {};
  render() {
    return (
      <View style={{ width: "100%" }}>
        <View style={styles.container}>
          <Text style={styles.text}>Select Vehicle Photo</Text>
          <Image
            style={styles.image}
            source={require("../assets/driver_bg.jpg")}
          />
        </View>
        <View style={styles.line} />
      </View>
    );
  }
}

const styles = {
  container: {
    width: "100%",
    height: 40,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15
  },
  text: { fontFamily: "GoogleSans-Regular", fontSize: 15, top: 5 },
  image: {
    width: 100,
    height: 40,
    borderRadius: 5,
    position: "absolute",
    right: 5,
    top: 5
  },
  line: { width: "100%", height: 1, backgroundColor: "#bbbbbb" }
};

export default ComponentSelectvehicleImage;
