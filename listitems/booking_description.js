import React, { Component } from "react";
import { Text, StyleSheet, View, Image } from "react-native";

class Bookingdescription extends Component {
  state = {};

  render() {
    return (
      <View style={styles.s3293b274}>
        <Text style={styles.sd5e8979a}>31 October Friday(13:04)</Text>
        <Text style={styles.s3d4b3f88}>Rs. 128.96</Text>
        <Text style={styles.s4492959d}>Rental | Micro</Text>
        <Text style={styles.s25c7c46d}>Payment Pending</Text>
      </View>
    );
  }
}

export default Bookingdescription;

const styles = StyleSheet.create({
  sd5e8979a: {
    fontWeight: `bold`,
    fontFamily: "GoogleSans-Bold",
    color: "#333333"
  },
  s3d4b3f88: {
    position: `absolute`,
    right: 10,
    top: 5,
    color: "#333333",
    fontFamily: "GoogleSans-Regular"
  },
  s4492959d: {
    color: "#333333",
    fontFamily: "GoogleSans-Regular"
  },
  s25c7c46d: {
    fontSize: 18,
    color: "#e74c3c",
    position: `absolute`,
    right: 10,
    top: 25,
    fontFamily: "GoogleSans-Regular"
  },
  s3293b274: {
    backgroundColor: `rgba(255, 255, 255, 1)`,
    height: 57,
    padding: 5,
    width: `100%`
  }
});
