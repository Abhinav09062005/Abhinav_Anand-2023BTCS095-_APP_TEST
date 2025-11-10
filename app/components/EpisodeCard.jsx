import React from "react";
import { View, Text, StyleSheet } from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

export default function EpisodeCard({
  title,
  subtitle1,
  subtitle2,
  color,
  icon,
  episodes,
  updated,
}) {
  return (
    <View style={[styles.card, { backgroundColor: color }]}>
          <View style={styles.iconContainer}>
        <FontAwesome5 name={icon} size={28} color="#0A66C2" solid />
         </View>

      <View style={styles.info}>
              <Text style={styles.title}>{title}</Text>
           <Text style={styles.meta}>
          {episodes}Episodes•Updated{updated}
        </Text>
        <Text style={styles.detail}>•{subtitle1}</Text>



        <Text style={styles.detail}>•{subtitle2}</Text>
                <Text style={styles.more}>+ 10 more</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    gap:20,
    borderRadius:20,
    
    
    padding:20,
    
    flexDirection: "row",
    alignItems: "flex-start",
  },
  iconContainer: {
   
   
    width:50,
   
    height:50,
    borderRadius:12,
  
    backgroundColor: "#fff",
    
    justifyContent: "center",
    alignItems: "center",
  },
  info:{flex:1},
  title: 
  { 
    fontSize: 23,
     fontWeight: "600", 
     color: "#111" 
    },
  meta: 
  { color: "#777",
     fontSize: 12, 
     marginBottom:15},
  detail: 
  { fontSize: 14, 
    color: "#333" 
  },
  more: { fontSize: 13, color: "#0A66C2", marginTop:3},
});
