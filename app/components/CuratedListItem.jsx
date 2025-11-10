import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
export default function CuratedListItem({title,episodes}){
  return(
    <View style={styles.item}>
      <View style={styles.left}>
        
        <Ionicons name="musical-notes-outline" size={20} color="#0A66C2"/>
        <View>
          <Text style={styles.title}>{title}</Text>


          <Text style={styles.subtitle}>{episodes} episodes</Text>
        
        </View>
      </View>
      <Ionicons name="chevron-forward" size={18} color="#888" />
    </View>
  );
}

const styles = StyleSheet.create({
  item:{
    backgroundColor: "#fff",
    
    borderRadius:12,
      padding:19,
    
      shadowColor:"#000",
        flexDirection:"row",
       
       
        shadowRadius:3,
   
        justifyContent:"space-between",
    alignItems:"center",
    shadowOpacity:0.03,
  },
  left:{
    flexDirection:"row",
   
    alignItems: "center",
    gap: 10,
  },
  title: 
  {
    fontSize:18,
   
    fontWeight: "600",
    color: "#111",
  },
  subtitle: {
    fontSize:15,
   
    color: "#666",
  },
});
