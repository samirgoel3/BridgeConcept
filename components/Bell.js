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

import Mainscreenbellitem from "../modals/main_screen_bell_item";

class Bell extends Component {
  state = { modalVisible: false };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
    return (
      <View style={{ paddingRight: 45 }}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            alert("Modal has been closed.");
            this.setState({ modalVisible: false });
          }}
        >
          <Mainscreenbellitem />
        </Modal>

        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
          }}
          style={styles.touch_layout}
        >
          <Image
            style={styles.bell_image}
            source={require("../assets/bell.png")}
          />
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = {
  touch_layout: {
    position: "absolute",
    borderRadius: 30,
    bottom: 5,
    height: 50,
    width: 50,
    backgroundColor: "#333333",
    alignItems: "center",
    justifyContent: "center"
  },
  bell_image: { width: 25, height: 25 }
};

export default Bell;
