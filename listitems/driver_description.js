import React, { Component } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

class Driverdescriptionitem extends Component {
  state = {};
  render() {
    return (
      <View style={styles.s9cbafa35}>
        <Image
          style={styles.s3ec0d8e7}
          source={{
            uri:
              "https://relayfm.s3.amazonaws.com/uploads/user/avatar/68/user_avatar_Davidsmith_artwork.png"
          }}
        />
        <Text style={styles.s62aa7ad0}>Senior Robert Downy junior</Text>
        <Text style={styles.s2a8d789f}>robertjunior@apporio.com</Text>
        <Text style={styles.s64bf4577}>You Rated</Text>
        <Text style={styles.s48a5240d}>4.5</Text>
      </View>
    );
  }
}

export default Driverdescriptionitem;
const styles = StyleSheet.create({
  s3ec0d8e7: {
    backgroundColor: `rgba(149, 137, 212, 1)`,
    borderRadius: 500,
    height: 50,
    width: 50
  },
  s62aa7ad0: {
    color: `rgba(0, 0, 0, 1)`,
    left: 60,
    position: `absolute`,
    top: 10
  },
  s2a8d789f: {
    color: `rgba(105, 105, 105, 1)`,
    left: 60,
    position: `absolute`,
    top: 27
  },
  s64bf4577: {
    color: `rgba(134, 112, 239, 1)`,
    fontWeight: `bold`,
    position: `absolute`,
    right: 10,
    top: 10
  },
  s48a5240d: {
    color: `rgba(0, 0, 0, 1)`,
    position: `absolute`,
    right: 40,
    top: 27
  },
  s9cbafa35: {
    backgroundColor: `rgba(255, 255, 255, 1)`,
    flex: 1,
    maxHeight: 60,
    padding: 5
  }
});
