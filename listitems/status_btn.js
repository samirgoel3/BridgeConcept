import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ToastAndroid,
  Image,
  TouchableHighlight
} from "react-native";

class Statusbtn extends Component {
  state = {};

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.cancel_layout}>
          <Text style={styles.mtext}>Cancel</Text>
        </View>

        <View style={styles.status_btn_layout}>
          <Text style={styles.mtext}>Start Ride</Text>
        </View>
      </View>
    );
  }
}
export default Statusbtn;

const styles = StyleSheet.create({
  container: {
    width: "96%",
    height: 50,
    backgroundColor: "#ffffff",
    position: "absolute",
    bottom: 10,
    flexDirection: "row",
    borderRadius: 5
  },
  cancel_layout: {
    width: "35%",
    height: "100%",
    backgroundColor: "#e74c3c",
    alignItems: "center",
    justifyContent: "center"
  },
  status_btn_layout: {
    width: "65%",
    height: "100%",
    backgroundColor: "#2ecc71",
    alignItems: "center",
    justifyContent: "center"
  },
  mtext: { fontFamily: "GoogleSans-Bold", color: "#ffffff", fontSize: 20 }
});
