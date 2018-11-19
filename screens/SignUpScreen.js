import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
  TextInput
} from "react-native";

import FloatLabelTextInput from "react-native-floating-label-text-input";

class SignUpScreen extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require("../assets/settings-work-tool.png")}
        style={{ width: 20, height: 20, tintColor: tintColor }}
      />
    )
  };

  openimagePicker() {
    alert("Image Picker ", "Need to open a new image picker");
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top_bar}>
          <TouchableHighlight style={{ width: 50, height: 50 }}>
            <Image
              style={styles.back_image}
              source={require("../assets/left_back_sort.png")}
            />
          </TouchableHighlight>
          <Text style={styles.actionbar_text}>Create New Driver</Text>
        </View>
        <View style={styles.beneath}>
          <Image
            style={{ width: "100%", height: "100%" }}
            resizeMode="cover"
            source={require("../assets/driver_bg.jpg")}
          />
          <View style={styles.transparent_layer} />
        </View>
        <View style={styles.minicontainer}>
          <View style={styles.signup_container}>
            <TouchableHighlight
              style={styles.circular_touch}
              onPress={this.openimagePicker}
            >
              <Image
                style={styles.circular_image}
                source={require("../assets/driver_bg.jpg")}
              />
            </TouchableHighlight>

            <View style={styles.encapsulator}>
              <Text style={styles.labels}>First Name</Text>
              <TextInput
                style={styles.input_style}
                placeholder={"Enter Name"}
              />

              <View style={styles.line} />
            </View>

            <View style={styles.encapsulator}>
              <Text style={styles.labels}>Email</Text>
              <TextInput
                style={styles.input_style}
                placeholder={"Enter your mail."}
              />

              <View style={styles.line} />
            </View>

            <View style={styles.encapsulator}>
              <Text style={styles.labels}>Mobile</Text>
              <TextInput
                style={styles.input_style}
                placeholder={"Enter your phone"}
              />

              <View style={styles.line} />

              <View style={styles.encapsulator}>
                <Text style={styles.labels}>Password</Text>
                <TextInput
                  style={styles.input_style}
                  placeholder={"Enter password"}
                />

                <View style={styles.line} />

                <Text style={styles.area_container}>Select Area</Text>

                <TouchableHighlight style={styles.continue_touchable}>
                  <Text style={styles.continue_text}>Continue</Text>
                </TouchableHighlight>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#ffffff"
  },
  top_bar: {
    width: "100%",
    height: 50,
    backgroundColor: "#ffffff",
    elevation: 10,
    flexDirection: "row",
    paddingTop: 10
  },
  beneath: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.65)"
  },
  minicontainer: {
    width: "100%",
    height: "90%",
    position: "absolute",
    top: 60,
    padding: 20
  },
  signup_container: {
    width: "100%",
    height: "100%",
    borderRadius: 5,
    backgroundColor: "#ffffff",
    elevation: 20,
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 10
  },
  back_image: { width: 20, height: 20, left: 10, top: 6 },
  actionbar_text: {
    fontSize: 20,
    fontFamily: "GoogleSans-Bold",
    color: "#333333",
    top: 5
  },
  circular_image: {
    width: 90,
    height: 90,
    borderRadius: 200,
    borderWidth: 2,
    borderColor: "#bbbbbb"
  },
  circular_touch: { width: 90, height: 90, elevation: 100 },
  encapsulator: {
    width: "100%",
    height: 70,
    marginTop: 5,
    marginBottom: 5,
    padding: 5
  },
  line: {
    width: "100%",
    height: 1,
    backgroundColor: "#bbbbbb",
    marginTop: 2
  },
  input_style: {
    width: "100%",
    height: 35,
    fontFamily: "GoogleSans-Regular"
  },
  labels: {
    marginLeft: 5,
    fontFamily: "GoogleSans-Bold",
    color: "#333333"
  },
  transparent_layer: {
    backgroundColor: "#AE34495E",
    position: "absolute",
    width: "100%",
    height: "100%"
  },
  area_container: {
    width: "100%",
    height: 50,
    backgroundColor: "#FFEFEFEF",
    color: "#333333",
    borderRadius: 5,
    fontFamily: "GoogleSans-Regular",
    fontSize: 17,
    alignItems: "center",
    paddingTop: 10,
    paddingLeft: 10,
    top: 10
  },
  continue_touchable: {
    width: "100%",
    height: 50,
    borderRadius: 5,
    backgroundColor: "#34495e",
    alignItems: "center",
    justifyContent: "center",
    top: 20
  },
  continue_text: {
    fontFamily: "GoogleSans-Bold",
    color: "#ffffff",
    fontSize: 17
  }
});
