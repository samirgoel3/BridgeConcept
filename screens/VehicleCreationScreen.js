import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  TouchableHighlight
} from "react-native";

import ComponentSelectVehicleType from "../components/ComponentSelectVehiclenType";
import Componentselectvehiclemake from "../components/Componentselectvehiclemake";
import Componentselectvehiclemodel from "../components/Componentselectvehiclemodel";
import Componentselecttypeofservice from "../components/ComponentSelecttypeofservice";
import ComponentSelectvehicleImage from "../components/ComponentSelectvehicleNoPlateImage";
import Componentselectvehiclephoto from "../components/Componentselectvehiclephoto";
class VehicleScreatinSCreen extends Component {
  state = {};
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top_bar}>
          <Text style={styles.top_bar_text}>Add Vehicles </Text>
        </View>
        <ScrollView style={{ paddingTop: 10 }}>
          <View style={styles.vehiclebar}>
            <Text style={styles.heading_text}>Create Vehicle</Text>
            <TouchableHighlight style={styles.infocontainer}>
              <Image
                style={styles.infoimage}
                source={require("../assets/info-sign.png")}
              />
            </TouchableHighlight>
          </View>

          <ComponentSelectVehicleType />
          <Componentselectvehiclemake />
          <Componentselectvehiclemodel />
          <Componentselecttypeofservice />

          <View style={styles.vehiclebar}>
            <Text style={styles.heading_text}>Add Vehicle Details</Text>
            <TouchableHighlight style={styles.infocontainer}>
              <Image
                style={styles.infoimage}
                source={require("../assets/info-sign.png")}
              />
            </TouchableHighlight>
          </View>

          <View style={styles.vehicle_no_layout}>
            <Text style={{ fontFamily: "GoogleSans-Regular", fontSize: 14 }}>
              Enter vehicle Number
            </Text>
            <TextInput
              style={styles.vehicle_no_input}
              placeholder={"input value"}
            />
            <View style={styles.bottom_line} />
          </View>

          <View style={styles.vehicle_no_layout}>
            <Text style={{ fontFamily: "GoogleSans-Regular", fontSize: 14 }}>
              Enter vehicle Color
            </Text>
            <TextInput style={styles.vehicle_no_input} />
            <View style={styles.bottom_line} />
          </View>

          <ComponentSelectvehicleImage />
          <Componentselectvehiclephoto />
          <View style={{ height: 60 }} />
        </ScrollView>
        <TouchableHighlight style={styles.bottom_btn_layout}>
          <Text style={styles.bottom_text}>Add vehicle</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = {
  top_bar: {
    width: "100%",
    height: 50,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    elevation: 10
  },
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#ffffff"
  },
  top_bar_text: {
    fontFamily: "GoogleSans-Bold",
    fontSize: 15,
    color: "#333333"
  },
  vehiclebar: {
    width: "100%",
    height: 35,
    backgroundColor: "#D9D9D9",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    padding: 5
  },
  heading_text: { color: "#333333", fontFamily: "GoogleSans-Bold" },
  infocontainer: {
    width: 15,
    height: 15,
    right: 15,
    backgroundColor: "#333333",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center"
  },
  infoimage: { width: 7, height: 7 },
  vehicle_no_layout: {
    width: "100%",
    height: 70,
    marginTop: 10,
    padding: 8
  },
  vehicle_no_input: {
    width: "100%",
    height: 40,
    top: 0,
    fontFamily: "GoogleSans-Regular"
  },
  bottom_line: { width: "100%", height: 1, backgroundColor: "#bbbbbb" },
  bottom_btn_layout: {
    width: "100%",
    height: 50,
    backgroundColor: "#333333",
    alignItems: "center",
    justifyContent: "center"
  },
  bottom_text: {
    fontFamily: "GoogleSans-Bold",
    fontSize: 15,
    color: "#ffffff"
  }
};

export default VehicleScreatinSCreen;
