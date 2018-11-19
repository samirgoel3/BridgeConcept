import React, { Component } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import * as styler from "../Utils/Textstyler";

class Receiptitem extends Component {
  state = {};

  render() {
    const incoming_data = this.props.data;

    return (
      <View style={styles.s3c8a82ff}>
        <Text style={styles.sd3b6d9fc}>{incoming_data.highlighted_text}</Text>
        <Text style={{ color: "#333333", fontFamily: "GoogleSans-Regular" }}>
          {incoming_data.short_info_text}
        </Text>
        <Text
          style={[
            styles.s70fee48d,
            styler._settextVisual(incoming_data.visualr_formulla)
          ]}
        >
          {incoming_data.value}
        </Text>
      </View>
    );
  }
}

export default Receiptitem;
const styles = StyleSheet.create({
  sd3b6d9fc: {
    fontWeight: `bold`,
    color: "#333333",
    fontFamily: "GoogleSans-Bold"
  },
  s70fee48d: {
    position: `absolute`,
    right: 10,
    top: 18,
    color: "#333333",
    fontFamily: "GoogleSans-Regular"
  },
  s3c8a82ff: {
    backgroundColor: `rgba(255, 255, 255, 1)`,
    flex: 1,
    maxHeight: 40,
    padding: 5
  }
});
