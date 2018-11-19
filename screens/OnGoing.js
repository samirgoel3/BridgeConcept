import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import Ongointitem from "../listitems/ongoing_item";

class OnGoing extends Component {
  render() {
    return (
      <ScrollView>
        <Ongointitem />
        <Ongointitem />
      </ScrollView>
    );
  }
}
export default OnGoing;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
