import React, { Component } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from "react-native";

class UserTrackingInfo extends Component {
  render() {
    return (
      <View style={styles.root_container}>
        <View style={styles.customer_container}>
          <TouchableHighlight style={styles.back_container}>
            <Image
              style={styles.back}
              source={require("../assets/left_back_sort.png")}
            />
          </TouchableHighlight>
          <Image
            style={styles.driver_image}
            source={require("../assets/driver_bg.jpg")}
          />

          <View style={styles.customer_info}>
            <Text style={styles.customer_name}>Customer Name</Text>
            <Text style={{ fontFamily: "GoogleSans-Regular" }}>
              +91 9978653456
            </Text>
          </View>

          <View style={styles.rating_container}>
            <Text style={styles.rating}>4.5</Text>
            <Image style={styles.star} source={require("../assets/star.png")} />
          </View>
        </View>
        <View style={styles.button_container}>
          <View style={styles.payment_layout}>
            <Text style={styles.mode_heading}>Payment Mode</Text>
            <Text style={styles.payment_mode}>CASH</Text>
          </View>
          <View style={styles.button_layout}>
            <TouchableHighlight style={{ marginRight: 8 }}>
              <View style={styles.vertical}>
                <View style={styles.bl_one}>
                  <Image
                    style={styles.bl_image_one}
                    source={require("../assets/phone.png")}
                  />
                </View>

                <Text style={styles.regular_font}>Call</Text>
              </View>
            </TouchableHighlight>

            <TouchableHighlight style={{ marginRight: 8 }}>
              <View style={styles.vertical}>
                <View style={styles.bl_two}>
                  <Image
                    style={styles.bl_image_one}
                    source={require("../assets/chat.png")}
                  />
                </View>

                <Text style={styles.regular_font}>Chat</Text>
              </View>
            </TouchableHighlight>

            <TouchableHighlight style={{ marginRight: 8 }}>
              <View style={styles.vertical}>
                <View style={styles.bl_three}>
                  <Image
                    style={styles.bl_image_one}
                    source={require("../assets/navigation.png")}
                  />
                </View>

                <Text style={styles.regular_font}>Navigate</Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>
        <View style={styles.pickdrop_container}>
          <View style={styles.dot} />
          <Text style={styles.pickdrop_text_style} numberOfLines={2}>
            Some pick or drop location goes here with max line one , that is
            this line should not show in another line.
          </Text>
        </View>
      </View>
    );
  }
}

export default UserTrackingInfo;
const styles = StyleSheet.create({
  contianer: {
    width: "100%",
    height: ""
  },
  customer_container: {
    width: "100%",
    height: 50,
    flexDirection: "row"
  },
  back_container: {
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center"
  },
  root_container: {
    width: "98%",
    height: 200,
    backgroundColor: "#ffffff",
    borderRadius: 5,
    elevation: 10,
    position: "absolute",
    top: 5,
    alignSelf: "center",
    padding: 5
  },
  customer_info: {
    height: "100%",
    width: "58%",
    flexDirection: "column",
    paddingTop: 5,
    paddingLeft: 8
  },
  rating_container: {
    width: 60,
    height: 20,
    borderRadius: 5,
    backgroundColor: "rgba(230, 230, 230, 1)",
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  star: { width: 10, height: 10, marginLeft: 5 },
  back: { width: 17, height: 17 },
  driver_image: { width: 50, height: 50, borderRadius: 200 },
  customer_name: { fontFamily: "GoogleSans-Bold", fontSize: 18 },
  rating: { fontSize: 13, fontFamily: "GoogleSans-Regular" },
  button_container: {
    width: "100%",
    height: 70,
    top: 10,
    flexDirection: "row"
  },
  mode_heading: { fontFamily: "GoogleSans-Regular" },
  payment_mode: {
    fontFamily: "GoogleSans-Bold",
    fontSize: 18,
    color: "#2ecc71"
  },
  payment_layout: {
    width: "30%",
    height: "100%",
    flexDirection: "column",
    padding: 5
  },
  button_layout: {
    width: "70%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end"
  },
  call_touch: {
    width: 50,
    height: 50
  },
  vertical: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  bl_one: {
    width: 50,
    height: 50,
    backgroundColor: "#2980b9",
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center"
  },
  bl_two: {
    width: 50,
    height: 50,
    backgroundColor: "#34495e",
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center"
  },
  bl_three: {
    width: 50,
    height: 50,
    backgroundColor: "#e67e22",
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center"
  },
  bl_image_one: { width: 20, height: 20 },

  regular_font: { fontFamily: "GoogleSans-Regular", top: 5 },
  pickdrop_container: {
    width: "100%",
    height: 40,
    backgroundColor: "rgba(240, 240, 240, 1)",
    top: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  dot: {
    width: 10,
    height: 10,
    backgroundColor: "#2ecc71",
    borderRadius: 100,
    marginRight: 10
  },
  pickdrop_text_style: { width: "90%", fontFamily: "GoogleSans-Regular" }
});
