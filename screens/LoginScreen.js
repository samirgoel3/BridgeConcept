import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
  TextInput
} from "react-native";

class LoginScreen extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require("../assets/settings-work-tool.png")}
        style={{ width: 20, height: 20, tintColor: tintColor }}
      />
    )
  };

  _oncountrySelector() {
    alert(
      "Select Country",
      "Neew to create a model that encapsulate country list"
    );
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
          <Text style={styles.actionbar_text}>Login</Text>
        </View>
        <View style={styles.beneath} />
        <View style={styles.minicontainer}>
          <View style={styles.login_container}>
            <View style={styles.input_container_one}>
              <View style={styles.line_one} />
              <View style={styles.line_two} />
              <TouchableHighlight
                style={styles.country_code_container}
                onPress={this._oncountrySelector}
              >
                <View style={styles.country_inner_core}>
                  <Image
                    style={styles.down_sort}
                    source={require("../assets/down_sort.png")}
                  />
                  <Text style={styles.country_code_text}>+91</Text>
                </View>
              </TouchableHighlight>
              <TextInput
                style={styles.input_one}
                keyboardType={"phone-pad"}
                placeholder={"Enter Phone"}
              />
            </View>

            <View style={styles.input_container_two}>
              <TextInput
                style={styles.input_two}
                placeholder={"Enter Password"}
              />
            </View>

            <TouchableHighlight style={styles.login_btn_container}>
              <Text style={styles.login_text}>Login</Text>
            </TouchableHighlight>

            <TouchableHighlight style={styles.forget_contaiber}>
              <Text style={styles.forget_text}>Forgott Pasword ?</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }
}
export default LoginScreen;

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
    height: "30%",
    backgroundColor: "#333333"
  },
  minicontainer: {
    width: "100%",
    height: 300,
    position: "absolute",
    top: 130,
    padding: 20
  },
  login_container: {
    width: "100%",
    height: "100%",
    borderRadius: 5,
    backgroundColor: "#ffffff",
    elevation: 20
  },
  input_container_one: {
    width: "100%",
    height: 50,
    flexDirection: "row",
    alignItems: "flex-start",
    top: 50
  },
  input_container_two: {
    width: "100%",
    height: 50,
    flexDirection: "row",
    alignItems: "flex-start",
    top: 55
  },
  forget_contaiber: {
    width: 150,
    height: 50,
    right: 10,
    bottom: 10,
    position: "absolute",
    alignItems: "center",
    paddingTop: 15
  },
  forget_text: {
    fontFamily: "GoogleSans-Regular",
    color: "#333333",
    fontSize: 16
  },
  login_btn_container: {
    width: 150,
    height: 50,
    backgroundColor: "#333333",
    position: "absolute",
    bottom: 10,
    left: 10,
    borderRadius: 5,
    alignItems: "center",
    paddingTop: 12
  },
  login_text: {
    fontSize: 18,
    color: "#ffffff",
    fontFamily: "GoogleSans-Bold"
  },
  country_code_container: {
    width: 100,
    height: 50,
    paddingTop: 12,
    paddingLeft: 30
  },
  country_inner_core: {
    width: "100%",
    height: "100%",
    flexDirection: "row"
  },
  down_sort: { width: 30, height: 30 },
  country_code_text: {
    top: 5,
    color: "#333333",
    fontFamily: "GoogleSans-Bold"
  },
  input_one: {
    width: 250,
    fontFamily: "GoogleSans-Bold",
    color: "#333333"
  },
  input_two: {
    width: 250,
    fontFamily: "GoogleSans-Bold",
    color: "#333333",
    marginLeft: 100
  },
  line_one: {
    width: 220,
    height: 1,
    backgroundColor: "#bbbbbb",
    marginLeft: 100,
    marginRight: 20,
    position: "absolute",
    top: 40
  },
  line_two: {
    width: 220,
    height: 1,
    backgroundColor: "#bbbbbb",
    marginLeft: 100,
    marginRight: 20,
    position: "absolute",
    top: 95
  },
  back_image: { width: 20, height: 20, left: 10, top: 6 },
  actionbar_text: {
    fontSize: 20,
    fontFamily: "GoogleSans-Bold",
    color: "#333333",
    top: 5
  }
});
