import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import GraphItem from "../listitems/graph_item";
import Outstandingitem from "../listitems/outstanding_item";

class EarningsScreen extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require("../assets/earning_icon.png")}
        style={{ width: 20, height: 20, tintColor: tintColor }}
      />
    )
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.sf8571ee7}>
          <Text style={styles.s7de86794}>Your Earnings</Text>
        </View>
        <GraphItem />
        <Outstandingitem />
      </View>
    );
  }
}
export default EarningsScreen;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#333333",
    flexDirection: "column"
  },
  s7de86794: {
    color: `rgba(255, 255, 255, 1)`,
    fontSize: 20,
    marginTop: 13,
    fontFamily: "GoogleSans-Bold"
  },
  sf8571ee7: {
    alignItems: `center`,
    elevation: 5,
    backgroundColor: `rgba(61, 61, 61, 1)`,
    flex: 1,
    maxHeight: 50
  }
});
