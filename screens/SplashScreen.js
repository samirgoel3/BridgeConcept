import React, { Component } from "react";
import { View, Text, Image, TouchableHighlight } from "react-native";
// import OneSignal from "react-native-onesignal";
import PropTypes from "prop-types";
import { StackActions, NavigationActions } from "react-navigation";
import { connect } from "react-redux";
import { one } from "../actions";

class SplashScreen extends React.Component {
  constructor(props) {
    super(props);
    // OneSignal.init("6e45abb5-645b-4a78-973b-50b7fd4b9dca");
    // OneSignal.addEventListener("received", this._onPressButton);
    // OneSignal.sendTag("dataaaa", "some data ");
    // OneSignal.inFocusDisplaying(2);
  }

  // state = {};

  static contextTypes = {
    rootTag: PropTypes.number
  };

  componentWillUnmount() {
    console.log("****", "component Unmounted  ");
    this._eventSubscription && this._eventSubscription.remove();
  }

  _loadMainScreen = () => {
    setTimeout(() => {
      // this.props.navigation.navigate("MainScreen", {
      //   itemId: 86,
      //   otherParam: "anything you want here"
      // });

      const resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: "MainScreen" })]
      });

      this.props.navigation.dispatch(resetAction);
    }, 1000);
  };

  _onSignUpPress = () => {
    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: "SignUpScreen" })]
    });
    this.props.navigation.dispatch(resetAction);
  };

  _onLoginPress = () => {
    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: "LoginScreen" })]
    });
    this.props.navigation.dispatch(resetAction);
  };

  _onMainScreenPress = () => {
    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: "MainScreen" })]
    });
    this.props.navigation.dispatch(resetAction);
  };

  _onAcceptScreenPress = () => {
    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: "AcceptRejectScreen" })]
    });
    this.props.navigation.dispatch(resetAction);
  };

  _onTrackingScreenPress = () => {
    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: "TrackingScreen" })]
    });
    this.props.navigation.dispatch(resetAction);
  };

  _callSomeReducres = () => {
    setInterval(() => {
      this.props.one({
        key_one: "" + new Date().toLocaleString(),
        key_two: 56,
        key_three: false
      });

      console.log("****", "*******");
    }, 300);

    alert("**", " checking call ");
  };

  _onAddVehicleScreen = () => {
    const resetAction = StackActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: "VehicleCreationScreen" })
      ]
    });
    this.props.navigation.dispatch(resetAction);
  };

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{ width: "100%", height: "100%" }}
          resizeMode="cover"
          source={require("../assets/driver_bg.jpg")}
        />

        <TouchableHighlight
          style={styles.signup_btn}
          onPress={this._onSignUpPress}
        >
          <Text style={styles.signup_text}>Sign Up</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.login_btn}
          onPress={this._onLoginPress}
        >
          <Text style={styles.login_text}>Login</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.mainscreenbtn}
          onPress={this._onMainScreenPress}
        >
          <Text style={styles.texter}>Main Screen</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.receive_passengerscreen}
          onPress={this._onAcceptScreenPress}
        >
          <Text style={styles.texter}>Accept Screen</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.tracking_screen}
          onPress={this._onTrackingScreenPress}
        >
          <Text style={styles.texter}>Tracking Screen</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.add_vehicle_screen}
          onPress={this._onAddVehicleScreen}
        >
          <Text style={styles.texter}>Add Vehicle Screen</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={{
            width: 200,
            height: 50,
            position: "absolute",
            bottom: 300,
            alignSelf: "center",
            backgroundColor: "#333333"
          }}
          onPress={this._callSomeReducres}
        >
          <Text style={{ alignSelf: "center", color: "#ffffff" }}>
            {this.props.mIndentifying_key.key_one}
          </Text>
        </TouchableHighlight>

        {/* {this._loadMainScreen()} */}
      </View>
    );
  }
}

const styles = {
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#333333"
  },
  signup_btn: {
    width: "50%",
    height: 50,
    backgroundColor: "#333333",
    paddingTop: 14,
    position: "absolute",
    left: 0,
    alignItems: "center",
    bottom: 0
  },
  login_btn: {
    width: "50%",
    height: 50,
    backgroundColor: "#ffffff",
    paddingTop: 14,
    position: "absolute",
    right: 0,
    alignItems: "center",
    bottom: 0
  },
  signup_text: {
    fontSize: 20,
    fontFamily: "GoogleSans-Bold",
    color: "#ffffff"
  },
  login_text: {
    fontSize: 20,
    fontFamily: "GoogleSans-Bold",
    color: "#333333"
  },
  mainscreentext: {
    fontSize: 20,
    fontFamily: "GoogleSans-Bold",
    color: "#ffffff"
  },
  mainscreenbtn: {
    width: 150,
    height: 50,
    backgroundColor: "#333333",
    bottom: 60,
    right: 10,
    paddingTop: 10,
    paddingLeft: 10,
    position: "absolute"
  },
  receive_passengerscreen: {
    width: 150,
    height: 50,
    backgroundColor: "#333333",
    bottom: 60,
    left: 10,
    paddingTop: 10,
    paddingLeft: 10,
    position: "absolute",
    alignItems: "center"
  },
  tracking_screen: {
    width: 150,
    height: 50,
    backgroundColor: "#333333",
    bottom: 120,
    left: 10,
    paddingTop: 10,
    paddingLeft: 10,
    position: "absolute"
  },
  add_vehicle_screen: {
    width: 150,
    height: 50,
    backgroundColor: "#333333",
    bottom: 190,
    left: 10,
    paddingTop: 10,
    paddingLeft: 10,
    position: "absolute"
  },
  texter: {
    fontFamily: "GoogleSans-Bold",
    fontSize: 13,
    color: "#ffffff"
  }
};

function mapStateToProp(mstate) {
  return {
    mIndentifying_key: mstate.MainScreenReducer
  };
}

export default connect(
  mapStateToProp,
  { one }
)(SplashScreen);
