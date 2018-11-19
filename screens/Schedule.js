import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

class Schedule extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Schedue ride will display here </Text>
      </View>
    );
  }
}
export default Schedule;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
