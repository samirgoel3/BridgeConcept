import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableHighlight
} from "react-native";
import EventBus from "eventing-bus";

class Pastitem extends Component {
  state = {};

  _onItemClick = () => {
    EventBus.publish("even_on_past_item_click", "data with id");
  };

  render() {
    return (
      <TouchableHighlight onPress={this._onItemClick}>
        <View style={styles.s0180da6b}>
          <Text style={styles.s942d5a7f}>Headline Goes here</Text>
          <Text>2018-11-01 11:47:20</Text>
          <View style={styles.s1b890f12}>
            <View style={styles.s83187fcf}>
              <View style={styles.s63cada4d} />
              <Text style={styles.s0443cc05}>
                Spaze Itech park, Sohna Road , Tower B3
              </Text>
            </View>
            <View style={styles.s070e5764}>
              <View style={styles.s7169a8cb} />
              <Text style={styles.s17850d89}>
                Drop location will goes here with some extra information of this
                address.
              </Text>
            </View>
          </View>

          <View style={styles.s3522ae48}>
            <Image
              style={styles.s2fc38065}
              source={{
                uri:
                  "https://relayfm.s3.amazonaws.com/uploads/user/avatar/68/user_avatar_Davidsmith_artwork.png"
              }}
            />
            <Text style={styles.s771762be}>Samir Goel</Text>
            <Text style={styles.s92618221}>+919989874365</Text>
            <Text style={styles.s569e22ca}>Completed</Text>
          </View>

          <Text style={styles.paymenttype}> Net Banking</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  s942d5a7f: {
    fontSize: 12,
    color: "#333333",
    marginLeft: 0,
    fontFamily: "GoogleSans-Bold"
  },
  s63cada4d: {
    backgroundColor: `rgba(46, 204, 113, 1)`,
    borderRadius: 5,
    flex: 1,
    maxHeight: 10,
    maxWidth: 10,
    top: 10
  },
  s0443cc05: {
    backgroundColor: `rgba(255, 255, 255, 0)`,
    fontSize: 13,
    height: 30,
    left: 15,
    position: `absolute`,
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "GoogleSans-Regular"
  },
  s83187fcf: { flex: 1 },
  s7169a8cb: {
    backgroundColor: `rgba(231, 76, 60, 1)`,
    borderRadius: 5,
    flex: 1,
    maxHeight: 10,
    maxWidth: 10,
    top: 10
  },
  s17850d89: {
    backgroundColor: `rgba(255, 255, 255, 0)`,
    fontSize: 13,
    height: 30,
    left: 15,
    position: `absolute`,
    fontFamily: "GoogleSans-Regular"
  },
  s070e5764: { flex: 1 },
  s1b890f12: {
    backgroundColor: `rgba(249, 249, 249, 1)`,
    borderRadius: 5,
    flex: 1,
    maxHeight: 80,
    padding: 7,
    top: 5
  },
  s2fc38065: {
    backgroundColor: "#bbbbbb",
    borderRadius: 45,
    height: 45,
    width: 45
  },
  s771762be: {
    left: 50,
    position: `absolute`,
    top: 5,
    fontFamily: "GoogleSans-Regular"
  },
  s92618221: {
    left: 50,
    position: `absolute`,
    top: 20,
    fontFamily: "GoogleSans-Regular"
  },
  s569e22ca: {
    color: "#333333",
    position: `absolute`,
    right: 8,
    top: 15,
    fontFamily: "GoogleSans-Bold"
  },
  s3522ae48: {
    backgroundColor: `rgba(242, 223, 247, 0)`,
    flex: 1,
    maxHeight: 50,
    top: 10
  },
  s0180da6b: {
    backgroundColor: "#ffffff",
    padding: 10,
    width: "100%",
    height: 200,
    elevation: 5,
    marginBottom: 4
  },
  s4bafc98f: {
    color: `rgba(46, 204, 113, 1)`,
    fontWeight: `bold`,
    position: `absolute`,
    right: 10,
    top: 10
  },
  paymenttype: {
    position: "absolute",
    fontFamily: "GoogleSans-Bold",
    color: "#8e44ad",
    right: 8,
    top: 10
  }
});

export default Pastitem;
