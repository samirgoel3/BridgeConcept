import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

class Account extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require("../assets/man-user.png")}
        style={{ width: 20, height: 20, tintColor: tintColor }}
      />
    )
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top_bar}>
          <Text style={styles.top_text}>Manage Profile</Text>
        </View>
        <View style={styles.bottom_back} />
        <View style={styles.center_block}>
          <Text style={{ fontSize: 20, fontFamily: "GoogleSans-Bold" }}>
            Samir Goel
          </Text>

          <Text style={{ fontSize: 15, fontFamily: "GoogleSans-Regular" }}>
            samir@apporio.com
          </Text>

          <Text style={{ fontSize: 13, fontFamily: "GoogleSans-Regular" }}>
            +91 9545665234
          </Text>

          <View style={styles.capsule}>
            <View style={styles.capsule_left} />
            <View style={styles.capsule_middle} />
            <View style={styles.capsule_right} />
          </View>
        </View>
        <View style={styles.imagestyle} />
      </View>
    );
  }
}
export default Account;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  center_block: {
    width: "80%",
    height: "40%",
    position: "absolute",
    top: 100,
    backgroundColor: "#ffffff",
    elevation: 5,
    borderRadius: 5,
    alignItems: "center",
    paddingTop: 55,
    paddingLeft: 10,
    paddingRight: 10
  },
  top_bar: {
    width: "100%",
    height: "25%",
    alignItems: "center",
    backgroundColor: "#7acfdf",
    elevation: 5
  },
  top_text: {
    fontSize: 20,
    fontFamily: "GoogleSans-Bold",
    marginTop: 10,
    color: "#ffffff"
  },
  bottom_back: {
    width: "100%",
    height: "75%",
    backgroundColor: "#ffffff"
  },
  imagestyle: {
    position: "absolute",
    height: 100,
    width: 100,
    backgroundColor: "#ffffff",
    elevation: 6,
    top: 50,
    borderRadius: 200,
    borderColor: "#bbbbbb",
    borderWidth: 1
  },
  capsule: {
    width: "100%",
    height: 50,
    flexDirection: "row",
    marginTop: 10
  },
  capsule_left: {
    flex: 1,
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
    backgroundColor: "#8e44ad"
  },
  capsule_right: {
    flex: 1,
    backgroundColor: "#1abc9c",
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25
  },
  capsule_middle: {
    flex: 1,
    backgroundColor: "#f39c12"
  }
});
