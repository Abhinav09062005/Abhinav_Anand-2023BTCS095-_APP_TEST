import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function SearchBar({ placeholder }) {
  return (
    <View style={styles.container}>
      <Ionicons name="search" size={20} color="#777" />
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="#777"
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: 
  {
    flexDirection:"row",
   
    alignItems:"center",
    backgroundColor:"#fff",
    
    
  paddingHorizontal:16,
    borderRadius:10,
    height: 45,
  
    borderWidth: 1,
  
    borderColor: "#E6E8EB",
  },
  input: {
    flex:1,
    
    marginLeft: 8,
    
    fontSize:15,
    color: "#333",
  },
});
