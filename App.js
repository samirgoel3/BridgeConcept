/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet } from "react-native";
import SplashScreen from "./screens/SplashScreen";
import { createStackNavigator } from "react-navigation";
import MainScreen from "./screens/MainScreen";
import WeeklyStatementScreen from "./screens/WeeklyStatementScreen";
import SpecificRideDetailScreen from "./screens/SpecificRideDetailScreen";
import SignUpScreen from "./screens/SignUpScreen";
import LoginScreen from "./screens/LoginScreen";
import AcceptRejectScreen from "./screens/AcceptRejectScreen";
import TrackingScreen from "./screens/TrackingScreen";
import VehicleCreationScreen from "./screens/VehicleCreationScreen";

// import OneSignal from "react-native-onesignal";

const TAG_ONE_SIGNAL = "OneSignal ";

const Navigationstack = createStackNavigator({
  SplashScreen: {
    screen: SplashScreen,
    navigationOptions: {
      header: null
    }
  },
  WeeklyStatementScreen: {
    screen: WeeklyStatementScreen,
    navigationOptions: {
      header: null
    }
  },
  SpecificRideDetailScreen: {
    screen: SpecificRideDetailScreen
  },
  LoginScreen: {
    screen: LoginScreen,
    navigationOptions: {
      header: null
    }
  },
  SignUpScreen: {
    screen: SignUpScreen,
    navigationOptions: {
      header: null
    }
  },
  AcceptRejectScreen: {
    screen: AcceptRejectScreen,
    navigationOptions: {
      header: null
    }
  },
  TrackingScreen: {
    screen: TrackingScreen,
    navigationOptions: {
      header: null
    }
  },
  VehicleCreationScreen: {
    screen: VehicleCreationScreen,
    navigationOptions: {
      header: null
    }
  },
  MainScreen: {
    screen: MainScreen,
    navigationOptions: {
      header: null
    }
  }
});

export default class App extends React.Component {
  constructor(props) {
    super(props);
    // OneSignal.init("6e45abb5-645b-4a78-973b-50b7fd4b9dca");
    // OneSignal.addEventListener("received", this.onReceived);
    // OneSignal.addEventListener("opened", this.onOpened);
    // OneSignal.addEventListener("ids", this.onIds);
  }

  // componentWillUnmount() {
  //   OneSignal.removeEventListener("received", this.onReceived);
  //   OneSignal.removeEventListener("opened", this.onOpened);
  //   OneSignal.removeEventListener("ids", this.onIds);
  // }

  // onReceived = notification => {
  //   console.log(TAG_ONE_SIGNAL + "Notification received: ", notification);

  //   ToastAndroid.show(
  //     "A pikachu appeared nearby !" + JSON.stringify(this.props),
  //     ToastAndroid.SHORT
  //   );
  // };

  // onOpened(openResult) {
  //   // console.log(
  //   //   TAG_ONE_SIGNAL + "Message: ",
  //   //   openResult.notification.payload.body
  //   // );
  //   // console.log(
  //   //   TAG_ONE_SIGNAL + "Data: ",
  //   //   openResult.notification.payload.additionalData
  //   // );
  //   // console.log(
  //   //   TAG_ONE_SIGNAL + "isActive: ",
  //   //   openResult.notification.isAppInFocus
  //   // );
  //   // console.log(TAG_ONE_SIGNAL + "openResult: ", openResult);
  // }

  // onIds(device) {
  //   // console.log(TAG_ONE_SIGNAL + "Device info: ", device);
  // }

  render() {
    return <Navigationstack />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
