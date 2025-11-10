import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.leftSection}>



        <Ionicons name="pulse-outline" size={30} color="#0A66C2" />
        <Text style={styles.brand}>HealthCast</Text>
      </View>

      <Image
        source={{ uri: "https://tse1.mm.bing.net/th/id/OIP.25iSkbJTm4F-Rq0g1JR8NgHaHa?pid=Api&P=0&h=180" }}
        style={styles.avatar}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: 
  {
    flexDirection:"row",
    
    justifyContent:"space-between",
    alignItems: "center",
    
    paddingVertical: 15,
    marginBottom:8,
  },
  leftSection: 
  {
    flexDirection: "row",
    alignItems: "center",

    gap:14,
  },
  brand: {
    fontSize: 20,


    fontWeight: "600",
    color: "#0A66C2",
  },
  avatar: {
    width: 35,
    height: 35,

    borderRadius: 20,
  },
});
