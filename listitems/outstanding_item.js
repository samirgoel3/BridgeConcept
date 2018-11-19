import React, { Component } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import * as styler from "../Utils/Textstyler";

class Outstandingitem extends Component {
  state = {};

  render() {
    return (
      <View style={{ width: "100%", height: 100, padding: 10 }}>
        <View
          style={{
            width: "100%",
            height: 50,
            borderRadius: 5,
            backgroundColor: "#ffb"
          }}
        />
      </View>
    );
  }
}

export default Outstandingitem;
const styles = StyleSheet.create({
  contianer: {
    width: "100%",
    height: ""
  }
});
