import React, { Component } from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import Pastitem from "../listitems/past_item";

class Past extends Component {
  render() {
    return (
      <ScrollView>
        <Pastitem />
      </ScrollView>
    );
  }
}
export default Past;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
