import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const Profile = () => {
  return (
      <View style={styles.container}>
        <Text style={styles.text}>profile</Text>
      </View>
    );
}

export default Profile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F8FAFD", 
  },
  text: {
    fontSize: 24,
    fontWeight: "600",
    color: "#0A66C2",
  },
});
