import React, { Component } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Receiptitem from "../listitems/receipt_item";

class Calculatedbillitem extends Component {
  state = {};
  render() {
    return (
      <View
        style={{
          flexDirection: "column",
          padding: 10,
          backgroundColor: "#ffffff"
        }}
      >
        <Receiptitem
          data={{
            highlighted_text: "Bill details",
            short_info_text: "",
            value: ""
          }}
        />
        <Receiptitem
          data={{
            highlighted_text: "",
            short_info_text: "Night Charges",
            value: "Rs. 20",
            visualr_formulla: "5644B1"
          }}
        />
        <Receiptitem
          data={{
            highlighted_text: "",
            short_info_text: "Distance Charges",
            value: "Rs.90.76",
            visualr_formulla: "333333"
          }}
        />
        <Receiptitem
          data={{
            highlighted_text: "",
            short_info_text: "Night Charges",
            value: "Rs. 56.78",
            visualr_formulla: "E224AB"
          }}
        />

        <Receiptitem
          data={{
            highlighted_text: "",
            short_info_text: "Night Charges",
            value: "Rs. 56.78",
            visualr_formulla: "E224AB"
          }}
        />
        <Receiptitem
          data={{
            highlighted_text: "",
            short_info_text: "Night Charges",
            value: "Rs. 56.78",
            visualr_formulla: "E224AB"
          }}
        />
        <Receiptitem
          data={{
            highlighted_text: "",
            short_info_text: "Night Charges",
            value: "Rs. 56.78",
            visualr_formulla: "E224AB"
          }}
        />
      </View>
    );
  }
}

export default Calculatedbillitem;
