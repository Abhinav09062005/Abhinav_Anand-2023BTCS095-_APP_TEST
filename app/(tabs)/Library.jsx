import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import EpisodeCard from "../components/EpisodeCard";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
export default function Library() {
  const episodes=[
    {
      id: 1,
      title: "Body Systems",
      subtitle1: "How your heart works",
      subtitle2: "Breathing and the lungs",
      color: "#E0F7F5",
      icon: "lungs",
      episodes: 12,
      updated: "3 Jun",
    },
    {
      id: 2,
      title: "Medical Conditions",
      subtitle1: "Managing high blood pressure",
      subtitle2: "Understanding depression",
      color: "#FFF4E1",
      icon: "clipboard",
      episodes: 27,
      updated: "1 Jun",
    },
    {
      id: 3,
      title: "Diagnostics",
      subtitle1: "Understanding your ECG results",
      subtitle2: "What an MRI can tell you",
      color: "#F2F4F8",
      icon: "checkmark-circle",
      episodes: 12,
      updated: "29 May",
    },
  ];

  return(
    <ScrollView 
    style={styles.container} showsVerticalScrollIndicator={false}>
      <Header/>  

      <Text style={styles.heading}>
        Library
        </Text>
      <Text style={styles.subheading}>
        Doctor's approved audio episodes
        </Text>
      <SearchBar placeholder="Search for symptom or condition..."/>
      <CategoryFilter 
      />
      <View style={styles.cardsContainer}>
        {
        episodes.map((item) => (
          <EpisodeCard key={item.id} {...item} />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingHorizontal:25,
       paddingTop:40,
    backgroundColor: "#F8FAFD",
  },
  heading:
    {
    fontSize:50,
    fontWeight: "700",
    color: "#111",
  },
  subheading: {
    color: "#555",
         marginBottom:30,
  },
  cardsContainer:
  {
      gap:30,
         marginTop:10,
    marginBottom:30,
  },
});
