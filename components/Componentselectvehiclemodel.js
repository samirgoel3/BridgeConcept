import React, { Component } from "react";
import { View, Text, TouchableHighlightm, Image } from "react-native";
import { Colors } from "react-native-paper";
class Componentselectvehiclemodel extends Component {
  state = {};
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={{ fontFamily: "GoogleSans-Regular", fontSize: 13 }}>
            select vehicle model
          </Text>
          <Text style={styles.selector_text}>Click To Select vehicle Type</Text>

          <Image
            style={{
              width: 25,
              height: 25,
              position: "absolute",
              right: 20,
              top: 30
            }}
            source={require("../assets/down_sort.png")}
          />
        </View>
      </View>
    );
  }
}

export default Componentselectvehiclemodel;

const styles = {
  container: {
    width: "100%",
    height: 70,
    alignItems: "center",
    justifyContent: "center"
  },
  box: {
    width: "95%",
    height: "80%",
    backgroundColor: "#ffffff",
    borderRadius: 5,
    padding: 12,
    borderColor: "#bbbbbb",
    borderWidth: 1,
    elevation: 1
  },
  selector_text: {
    fontFamily: "GoogleSans-Regular",
    fontSize: 15,
    top: 2,
    color: "#3498db"
  }
};
