import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

class Settings extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require("../assets/settings-work-tool.png")}
        style={{ width: 20, height: 20, tintColor: tintColor }}
      />
    )
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Setting and other related options goes here </Text>
      </View>
    );
  }
}
export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
