import React, { Component } from "react";
import { Text, StyleSheet, View, Image } from "react-native";

class Pickdropdescriptionitem extends Component {
  state = {};
  render() {
    return (
      <View style={styles.s0180da6b}>
        <View style={styles.s1b890f12}>
          <View style={styles.s83187fcf}>
            <View style={styles.s63cada4d} />
            <Text style={styles.s0443cc05}>
              Text string and some long information will goes here with some
              extra information .
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  s942d5a7f: {
    fontSize: 12,
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
    color: "#333333",
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
    color: "#333333",
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
    backgroundColor: `rgba(110, 92, 198, 1)`,
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
    color: `rgba(247, 180, 127, 1)`,
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
    height: 100,
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
    color: "#16a085",
    right: 8,
    top: 10
  }
});

export default Pickdropdescriptionitem;
