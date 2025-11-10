import React from "react";
import { View, Text, StyleSheet } from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

export default function PlaylistCard({ title, icon, color, episodes, updated }) {
  return (
    <View style={[styles.card, { backgroundColor: color }]}>
      <View style={styles.iconBox}>


        <FontAwesome5 name={icon} size={22} color="#0A66C2" solid />
      </View>


      <Text style={styles.title}>{title}</Text>
      <Text style={styles.meta}>{episodes} Episodes</Text>
      <Text style={styles.updated}>Updated: {updated}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card:{
    width:160,
    borderRadius:16,
   
   
    padding:10,
    shadowColor: "#000",
   
    shadowOpacity: 0.05,
    shadowRadius:5,
  },
  iconBox: {
    width:45,
    height:45,
    
    borderRadius:12,
    
    backgroundColor: "#fff",
    justifyContent: "center",
    
    alignItems: "center",
    marginBottom:24,
  },
  title: {
    fontSize: 15,
    fontWeight: "600",
    color: "#111",
  },
  meta: {
    fontSize: 13,
    color: "#444",
    marginTop:9,
  },
  updated: {
    fontSize: 12,
    color: "#777",
    marginTop: 1,
  },
});
