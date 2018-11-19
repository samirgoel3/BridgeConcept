import React, { Component } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { BarChart } from "react-native-svg-charts";

class GraphItem extends Component {
  state = {};
  render() {
    const fill = "#2ecc71";
    const data = [50, 300, 40, 95, 24, 50, 80];
    return (
      <View style={styles.parent}>
        <View style={styles.container}>
          <View style={styles.dateselector_container}>
            <Text style={styles.date_bold}>Date Range</Text>
            <Text style={styles.dateregular}>5 November - 11 November</Text>
          </View>
          <View style={styles.linecontiner}>
            <View style={styles.line_vertical} />
            <View style={styles.yaxis} />
            <View style={styles.line_one} />
            <View style={styles.line_two} />
            <View style={styles.line_three} />
          </View>
          <BarChart
            style={styles.bar_layout}
            data={data}
            svg={{ fill }}
            contentInset={{ top: 30, bottom: 50 }}
          />

          <View style={styles.day_container_parent}>
            <View style={styles.day_container}>
              <Text style={styles.day_text}>M</Text>
              <Text style={styles.day_text}>T</Text>
              <Text style={styles.day_text}>W</Text>
              <Text style={styles.day_text}>T</Text>
              <Text style={styles.day_text}>F</Text>
              <Text style={styles.day_text}>SA</Text>
              <Text style={styles.day_text_sunday}>SU</Text>
            </View>
          </View>
          <View style={styles.y_value_container}>
            <Text style={styles.y_value_one}>34$</Text>
            <Text style={styles.y_value_two}>56$</Text>
            <Text style={styles.y_value_three}>24.3$</Text>
            <Text style={styles.y_value_four}>1.0$</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default GraphItem;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#252525",
    borderRadius: 5
  },
  parent: {
    width: "100%",
    height: 420,
    padding: 10
  },
  dateselector_container: {
    width: 150,
    height: 40,
    borderRadius: 5,
    backgroundColor: "#000000",
    position: "absolute",
    right: 10,
    top: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  date_bold: {
    color: "#f1c40f",
    fontFamily: "GoogleSans-Bold",
    fontSize: 10
  },
  dateregular: {
    color: "#f1c40f",
    fontFamily: "GoogleSans-Regular",
    fontSize: 10
  },
  bar_layout: {
    height: "100%",
    width: "100%",
    paddingTop: 40,
    paddingLeft: 52,
    paddingRight: 20,
    paddingBottom: 25
  },
  line_one: {
    width: "100%",
    height: 1,
    backgroundColor: "#bbbbbb",
    bottom: 100
  },
  line_two: {
    width: "100%",
    height: 1,
    backgroundColor: "#bbbbbb",
    bottom: 200
  },
  line_three: {
    width: "100%",
    height: 1,
    backgroundColor: "#bbbbbb",
    bottom: 283
  },
  line_vertical: {
    width: 1,
    height: "100%",
    backgroundColor: "#ffffff"
  },
  yaxis: { width: "100%", height: 1, backgroundColor: "#ffffff" },
  linecontiner: {
    height: "100%",
    width: "100%",
    position: "absolute",
    paddingLeft: 50,
    paddingRight: 22,
    paddingBottom: 50,
    paddingTop: 70
  },
  day_text: {
    fontFamily: "GoogleSans-Regular",
    color: "#ffffff",
    width: "14.3%",
    fontSize: 15,
    textAlign: "center",
    top: 5
  },
  day_container_parent: {
    width: "100%",
    height: 45,
    position: "absolute",
    bottom: 0,
    paddingLeft: 50,
    paddingRight: 22
  },
  day_container: {
    width: "100%",
    height: "100%",
    flexDirection: "row"
  },
  day_text_sunday: {
    fontFamily: "GoogleSans-Regular",
    color: "#f1c40f",
    width: "14.3%",
    fontSize: 15,
    textAlign: "center",
    top: 5
  },
  y_value_container: {
    width: 50,
    height: "100%",
    flexDirection: "column",
    position: "absolute",
    left: 0
  },
  y_value_one: {
    color: "#ffffff",
    fontFamily: "GoogleSans-Bold",
    fontSize: 10,
    alignContent: "center",
    right: 3,
    position: "absolute",
    top: 60,
    left: 20
  },
  y_value_two: {
    color: "#ffffff",
    fontFamily: "GoogleSans-Bold",
    fontSize: 10,
    alignContent: "center",
    right: 3,
    position: "absolute",
    top: 140,
    left: 20
  },
  y_value_three: {
    color: "#ffffff",
    fontFamily: "GoogleSans-Bold",
    alignContent: "center",
    fontSize: 10,
    right: 3,
    position: "absolute",
    top: 240,
    left: 20
  },
  y_value_four: {
    color: "#ffffff",
    fontFamily: "GoogleSans-Bold",
    alignContent: "center",
    right: 3,
    fontSize: 10,
    position: "absolute",
    top: 340,
    left: 20
  }
});
