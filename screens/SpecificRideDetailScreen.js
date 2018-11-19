import React, { Component } from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import MapItem from "../listitems/map_Item";
import Bookingdescription from "../listitems/booking_description";
import Pickdropdescriptionitem from "../listitems/pick_drop_description_item";
import Driverdescriptionitem from "../listitems/driver_description";
import Calculatedbillitem from "../listitems/calculated_bill_item";

class SpecificRideDetailScreen extends Component {
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
      <ScrollView>
        <MapItem />
        <Bookingdescription />
        <Pickdropdescriptionitem />
        <Driverdescriptionitem />
        <Calculatedbillitem />
      </ScrollView>
    );
  }
}
export default SpecificRideDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
