import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
const filters = ["Categories","Symptoms","Duration"];
export default function CategoryFilter() {
  return(
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.container}>
      {filters.map((item,index)=>(


        <View key={index} style={styles.chip}>
          <Text style={styles.text}>{item}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:
  {
    flexDirection:"row",
    marginTop:30,
    gap:15,
    marginBottom:10,
  },
  chip:{
    paddingHorizontal:30,
    backgroundColor: "#E9EFFD",
    paddingVertical:10,
    borderRadius: 20,},
  text:{
    color: "#2A4D9B",
    fontWeight: "700",}
    ,});
