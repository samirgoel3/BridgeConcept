import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ToastAndroid,
  Image,
  Modal,
  TouchableHighlight
} from "react-native";
import EventBus from "eventing-bus";

import MapView, { AnimatedRegion, Marker } from "react-native-maps";
import MAP_MARKER_CAR_ICON from "../assets/car.png";
import Bell from "../components/Bell";
import Activatedvehiclecomponent from "../components/ActivatedvehicleComponent";

import { connect } from "react-redux";
import { currentLocation } from "../actions";

class HomeScreen extends Component {
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
    },
    rotation: {
      value: 0
    }
  };

  constructor(props) {
    super(props);
  }

  // componentDidMount() {
  //   setInterval(() => {
  //     navigator.geolocation.getCurrentPosition((success, error, option) => {
  //       console.log(
  //         "####",
  //         " fetch location here " +
  //           success.coords.latitude +
  //           "," +
  //           success.coords.longitude
  //       );
  //       console.log("***", "" + JSON.stringify(error));

  //       this.setState({
  //         location: {
  //           latitude: Number(success.coords.latitude),
  //           longitude: Number(success.coords.longitude)
  //         }
  //       });
  //     });

  //     ToastAndroid.show("Location fetched successfuly", ToastAndroid.SHORT);
  //   }, 5000);
  // }

  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require("../assets/home.png")}
        style={{ width: 20, height: 20, tintColor: tintColor }}
      />
    )
  };

  _onPressButton = () => {
    //alert("You tapped ----> ..... " + JSON.stringify(this.props));
    // this.props.navigation.navigate("WeeklyStatementScreen");
    EventBus.publish("exampleEventName", "Watson");
  };

  _animateMarker = () => {
    setTimeout(() => {
      console.log("#######", "ekrfhhfkrhfehfehiuh");
      if (this.marker) {
        console.log("####", "animating marker ");
        this.setState({ rotation: { value: 45 } });
        this.marker._component.animateMarkerToCoordinate(
          { latitude: 28.444919, longitude: 77.033597 },
          1000
        );
      } else {
        console.log("####", " marker not found fr animation ");
      }
    }, 5000);
  };

  // _startCurrentLocationInterval() {
  //   navigator.geolocation.getCurrentPosition(position => {
  //     console.log("Home screen ", "" + JSON.stringify(position));
  //   });
  // }

  _startLocationTimmer() {
    _callSomeReducres = () => {
      setInterval(() => {
        navigator.geolocation.getCurrentPosition(position => {
          var data = {
            location: {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude
            }
          };
          console.log("$$$$$$", "" + data);
          this.props.location_key.currentLocation(data);
        });
      }, 5000);

      alert("**", " checking call ");
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top_bar}>
          <Text style={styles.topbar}>Apporio Driver</Text>
          <Text style={{ fontFamily: "GoogleSans-Regular", top: 10 }}>
            A Demo product in react native.
          </Text>
        </View>
        <View style={styles.map_container}>
          <MapView
            style={{ width: "100%", height: "100%" }}
            showsUserLocation={false}
            initialRegion={this.state.locationregion}
          >
            <MapView.Marker.Animated
              ref={marker => {
                this.marker = marker;
              }}
              coordinate={this.props.location_key.location}
              title={"some tittle"}
              anchor={{ x: 0.5, y: 0.5 }}
              zIndex={4}
              rotation={this.state.rotation.value}
              image={MAP_MARKER_CAR_ICON}
            />
          </MapView>
          <Bell />
          <Activatedvehiclecomponent />
        </View>
        {this._startLocationTimmer()}
        {/* {this._animateMarker()} */}
      </View>
    );
  }
}

function mapStateToProp(mstate) {
  return {
    location_key: mstate.MainScreenReducer
  };
}

// export default HomeScreen;
export default connect(
  mapStateToProp,
  { currentLocation }
)(HomeScreen);

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center"
  },
  top_bar: {
    width: "100%",
    height: "10%",
    backgroundColor: "#ffffff",
    alignItems: "center",
    elevation: 5
  },
  map_container: {
    width: "100%",
    height: "90%",
    backgroundColor: "#ffffff",
    alignItems: "center"
  },
  topbar: {
    fontSize: 20,
    fontFamily: "GoogleSans-Bold",
    color: "#333333",
    top: 8
  }
});
