import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Ongoing from "./OnGoing";
import Schedule from "./Schedule";
import Past from "./Past";
import { createMaterialTopTabNavigator } from "react-navigation";

class Triphistoryscreen extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require("../assets/route.png")}
        style={{ width: 20, height: 20, tintColor: tintColor }}
      />
    )
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top_bar}>
          <Text style={styles.top_heading_text}>Manage Your Trips</Text>
        </View>
        <View style={styles.container_height}>
          <CustomTopBarNavigator />
        </View>
      </View>
    );
  }
}
export default Triphistoryscreen;

const CustomTopBarNavigator = createMaterialTopTabNavigator(
  {
    "On Going": {
      screen: Ongoing
    },
    Schedule: {
      screen: Schedule
    },
    Past: {
      screen: Past
    }
  },
  {
    initialRouteName: "On Going",

    tabBarOptions: {
      activeTintColor: "#333333",
      inactiveTintColor: "#bbbbbb",
      indicatorStyle: {
        borderBottomColor: "#000000",
        borderBottomWidth: 3,
        scrollEnabled: true
      },
      labelStyle: {
        fontSize: 10,
        fontFamily: "GoogleSans-Bold"
      },

      style: {
        backgroundColor: "#ffffff"
      },
      upperCaseLabel: false
    }
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column"
  },
  top_bar: {
    width: "100%",
    height: "6%",
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center"
  },
  top_heading_text: {
    fontSize: 15,
    fontFamily: "GoogleSans-Bold",
    marginTop: 14,
    color: "#333333"
  },
  container_height: { width: "100%", height: "94%", backgroundColor: "#bbbbbb" }
});
