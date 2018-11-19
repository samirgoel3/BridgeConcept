import React, { Component } from "react";
import { Text, StyleSheet, View, Image } from "react-native";

class MapItem extends Component {
  state = {};
  render() {
    return (
      <View style={{ width: "100%", height: 180, backgroundColor: "#333333" }}>
        <Image
          style={{ width: "100%", height: "100%" }}
          source={{
            uri: "https://i.stack.imgur.com/2gi7h.png"
          }}
        />
      </View>
    );
  }
}

export default MapItem;
