import React, { Component } from "react";
import { View, Text, Image, TouchableHighlight } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";

class AcceptRejectScreen extends Component {
  state = {};

  constructor(props) {
    super(props);
    this.state = { progress: 60 };
  }

  _startTimer = () => {
    // this.setState({ progress: 10 });
    // setInterval(() => {
    //   console.log("***", "some code goes here ********");
    //   this.setState({
    //     progress: this.state.progress - 1
    //   });
    // }, 5000);
  };

  _accept_ride() {
    alert("Alert", " Call Api here");
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text_one}>Normal</Text>
        <Text style={styles.package_name}>Package Name</Text>
        <Text style={styles.ride_type}>Normal - Rental</Text>
        <View style={styles.progress_container}>
          <AnimatedCircularProgress
            size={200}
            width={5}
            fill={this.state.progress}
            tintColor="#2ecc71"
            onAnimationComplete={this._startTimer}
            backgroundColor="#3d5875"
          />
          <Image
            style={styles.mapimage}
            source={{ uri: "https://i.stack.imgur.com/2gi7h.png" }}
          />

          <Text style={styles.counter_text}>45</Text>
        </View>
        <Text style={styles.payment_types}>CASH</Text>
        <Text style={styles.timedistance}>11 Min | 3.0Km</Text>
        <Text style={{ color: "#ffffff", top: 25 }}>
          - - - - - - - - - - - - - - - - - - - -
        </Text>
        <Text style={styles.pickfrom}>Pick From</Text>
        <Text style={styles.pickfrom_text}>
          Spaze I-tech park, Sec 49 Gurugram, Haryana, 122018, India
        </Text>
        <TouchableHighlight
          style={styles.cancel_container}
          onPress={this._accept_ride}
        >
          <Text style={styles.cancel_text}>Cancel</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.accept_container}
          onPress={this._accept_ride}
        >
          <Text style={styles.accept_text}>Accept Ride</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = {
  text_one: {
    fontFamily: "GoogleSans-Bold",
    fontSize: 20,
    color: "#ffffff"
  },
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#333333",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "flex-start",
    paddingTop: 20
  },
  mapimage: {
    width: 180,
    height: 180,
    position: "absolute",
    alignSelf: "center",
    borderRadius: 200,
    top: 10
  },
  counter_text: {
    position: "absolute",
    fontFamily: "GoogleSans-Bold",
    color: "#2ecc71",
    fontSize: 100,
    alignSelf: "center",
    top: 30
  },
  ride_type: {
    color: "#f39c12",
    fontFamily: "GoogleSans-Bold",
    fontSize: 25,
    top: 5
  },
  payment_types: {
    fontFamily: "GoogleSans-Bold",
    color: "#2ecc71",
    fontSize: 30,
    top: 28
  },
  progress_container: { width: 200, height: 200, top: 30 },
  package_name: {
    color: "#f1c40f",
    fontFamily: "GoogleSans-Regular",
    fontSize: 15,
    top: 10
  },
  timedistance: {
    color: "#f1c40f",
    fontFamily: "GoogleSans-Regular",
    top: 30,
    fontSize: 17
  },
  pickfrom: {
    color: "#ffffff",
    top: 30,
    fontFamily: "GoogleSans-Regular",
    fontSize: 15
  },
  pickfrom_text: {
    color: "#ffffff",
    fontFamily: "GoogleSans-Bold",
    fontSize: 20,
    top: 27,
    width: "80%",
    textAlign: "center"
  },
  cancel_container: {
    width: 70,
    height: 40,
    borderRadius: 5,
    backgroundColor: "#e74c3c",
    position: "absolute",
    right: 10,
    top: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  cancel_text: {
    fontFamily: "GoogleSans-Bold",
    color: "#ffffff"
  },
  accept_container: {
    width: "100%",
    height: 50,
    backgroundColor: "#2ecc71",
    position: "absolute",
    bottom: 0,
    alignItems: "center",
    justifyContent: "center"
  },
  accept_text: {
    color: "#ffffff",
    fontFamily: "GoogleSans-Bold",
    fontSize: 20
  }
};

export default AcceptRejectScreen;
