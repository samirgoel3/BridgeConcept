import React, { Component } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import UserTrackingInfo from "../listitems/user_tracking_info";
import Statusbtn from "../listitems/status_btn";

class TrackingScreen extends Component {
  state = {
    location: {
      latitude: 28.419362,
      longitude: 77.039078
    },
    locationregion: {
      latitude: 28.419362,
      longitude: 77.039078,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421
    }
  };

  render() {
    return (
      <View
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "#ffb",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <MapView
          style={{ width: "100%", height: "100%" }}
          showsUserLocation={false}
          initialRegion={this.state.locationregion}
        />

        <UserTrackingInfo />

        <Statusbtn />
      </View>
    );
  }
}

export default TrackingScreen;
const styles = StyleSheet.create({
  contianer: {
    width: "100%",
    height: ""
  }
});
