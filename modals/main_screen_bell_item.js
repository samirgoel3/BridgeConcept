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

class Mainscreenbellitem extends Component {
  state = {};
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.layout} />
      </View>
    );
  }
}

const styles = {
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0)",
    alignItems: "center",
    justifyContent: "center"
  },
  layout: {
    width: "95%",
    height: "50%",
    backgroundColor: "#ffffff",
    position: "absolute",
    bottom: 55,
    borderRadius: 5
  }
};
export default Mainscreenbellitem;
