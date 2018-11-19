import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ToastAndroid,
  Image,
  Modal,
  TouchableHighlight
} from "react-native";

class Activatedvehiclecomponent extends Component {
  state = {};
  render() {
    return (
      <View style={styles.main}>
        <View style={styles.inner} />
        <View style={styles.circular_layout} />
        <View style={styles.left}>
          <Text style={{ fontFamily: "GoogleSans-Bold", fontSize: 15 }}>
            Today's Rides
          </Text>
          <Text style={{ fontFamily: "GoogleSans-Regular", fontSize: 13 }}>
            11 Rides
          </Text>
        </View>
        <View style={styles.right}>
          <Text style={{ fontFamily: "GoogleSans-Bold", fontSize: 15 }}>
            Today's Earnings
          </Text>
          <Text style={styles.earning_text}>$453.91</Text>
        </View>
        <View style={styles.center}>
          <Text style={styles.center_bold}>Mini</Text>
          <Text style={styles.vehicleno}>SDl-8878</Text>
          <Image
            style={styles.vehiceimage}
            source={require("../assets/car.png")}
          />
        </View>
      </View>
    );
  }
}

const styles = {
  inner: {
    width: "100%",
    height: 50,
    backgroundColor: "#ffffff"
  },
  main: {
    width: "100%",
    height: 70,
    position: "absolute",
    top: 0
  },
  circular_layout: {
    width: 70,
    height: 70,
    backgroundColor: "#dcbc1c",
    borderRadius: 5,
    position: "absolute",
    alignSelf: "center"
  },
  left: {
    width: "40%",
    height: 50,
    position: "absolute",
    left: 5,
    top: 0,
    alignItems: "center",
    justifyContent: "center"
  },
  right: {
    width: "40%",
    height: 50,
    position: "absolute",
    right: 5,
    top: 0,
    alignItems: "center",
    justifyContent: "center"
  },
  center: {
    width: 60,
    height: 70,
    position: "absolute",
    alignSelf: "center",
    top: 0,
    borderColor: "#bbbbbb",
    borderRadius: 5,
    paddingTop: 4
  },
  center_bold: {
    fontFamily: "GoogleSans-Bold",
    fontSize: 15,
    alignSelf: "center"
  },
  vehicleno: {
    fontFamily: "GoogleSans-Regular",
    fontSize: 12,
    alignSelf: "center"
  },
  vehiceimage: {
    width: 27,
    height: 27,
    top: 1,
    alignSelf: "center"
  },
  earning_text: {
    fontFamily: "GoogleSans-Bold",
    fontSize: 13,
    color: "#2ecc71"
  }
};

export default Activatedvehiclecomponent;
