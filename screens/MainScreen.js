import React, { Component } from "react";
import { View, Platform } from "react-native";

import HomeScreen from "./HomeScreen";
import Triphistoryscreen from "./Triphistoryscreen";
import Account from "./Account";
import EarningsScreen from "./EarningsScreen";
import Settings from "./Settings";
import EventBus from "eventing-bus";
import { StackActions, NavigationActions } from "react-navigation";

import {
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";

const Navigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Triphistory: {
      screen: Triphistoryscreen
    },
    Account: {
      screen: Account
    },
    Earnings: {
      screen: EarningsScreen
    },
    Settings: {
      screen: Settings
    }
  },
  {
    animationEnabled: true,
    swipeEnabled: true,
    tabBarPosition: "bottom",
    tabBarOptions: {
      style: {
        ...Platform.select({
          android: {
            backgroundColor: "white"
          }
        })
      },
      labelStyle: {
        fontFamily: "GoogleSans-Bold"
      },
      activeTintColor: "#444444",
      inactiveTintColor: "#C2C2C2",
      showLabel: true,
      showIcon: true
    }
  }
);

class MainScreen extends Component {
  state = {};

  onScroll = () => {
    console.log("**&*&*&****", "working fine with events ");
    this.props.navigation.navigate("WeeklyStatementScreen");
  };

  OpenSpecificRideDetailScreen = () => {
    // const resetAction = StackActions.reset(
    //   {
    //     index: 0,
    //     actions: [NavigationActions.navigate({ routeName: "MainScreen" })]
    //   },
    //   {
    //     index: 1,
    //     actions: [
    //       NavigationActions.navigate({ routeName: "SpecificRideDetailScreen" })
    //     ]
    //   }
    // );

    // this.props.navigation.dispatch(resetAction);
    this.props.navigation.navigate("SpecificRideDetailScreen");
  };

  componentDidMount() {
    console.log("****", "componentDidMount");
    EventBus.on("exampleEventName", this.onScroll);
    EventBus.on("even_on_past_item_click", this.OpenSpecificRideDetailScreen);
  }
  componentWillUnmount() {
    console.log("****", "componentWillUnmount");
  }

  render() {
    return <Navigator />;
  }
}

export default MainScreen;
