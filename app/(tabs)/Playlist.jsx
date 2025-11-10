import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import PlaylistCard from "../components/PlaylistCard";
import CuratedListItem from "../components/CuratedListItem";

export default function Playlist() {
  const myPlaylists = [
    {
      id: 1,
      title: "My Hypertension Daily Plan",
      icon: "heart",
      color: "#FFF6E5",
      episodes: 6,
      updated: "03.06.2025",
    },
    {
      id: 2,
      title: "My Post-Surgery Recovery",
      icon: "stethoscope",
      color: "#E5EEFF",
      episodes: 3,
      updated: "03.06.2025",
    },
  ];

  const doctorPlaylists = [
    { id: 1, title: "Chronic Pain", episodes: 8 },
    { id: 2, title: "Mindfulness for Sleep", episodes: 8 },
    { id: 3, title: "Healthy Heart Basics", episodes: 12 },
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Header />

      <Text style={styles.heading}>Playlists</Text>
      <Text style={styles.subheading}>
        Personalized audio-care plans, curated by you
      </Text>

      <SearchBar placeholder="Search for name, symptom or condition..." />

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>My Playlists (10)</Text>
        <TouchableOpacity>
          <Text style={styles.seeAll}>See all</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.myPlaylistContainer}
      >
        {myPlaylists.map((item) => (
          <PlaylistCard key={item.id} {...item} />
        ))}
      </ScrollView>

      <TouchableOpacity style={styles.createButton}>
        <Text style={styles.createButtonText}> + Create new custom playlist</Text>
      </TouchableOpacity>

      {/* Doctor-Curated Section */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Doctor-Curated Playlists (12)</Text>
        <TouchableOpacity>
          <Text style={styles.seeAll}>See all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.curatedList}>
        {doctorPlaylists.map((item) => (
          <CuratedListItem key={item.id} {...item} />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal:20,
    paddingTop: 40,
    backgroundColor: "#F8FAFD",
  },
  heading: {
    fontSize:35,
    fontWeight: "700",
    color: "#111",
  },
  subheading: {
    color: "#555",
    marginBottom:25,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop:40,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#111",
  },
  seeAll: {
    color: "#0A66C2",
    fontWeight: "500",
  },
  myPlaylistContainer: 
  {
    flexDirection:"row",
    gap:20,
    marginTop:20,
  },
  createButton:{
    marginTop:20,
    backgroundColor: "#E9EFFD",
    borderStyle: "dashed",
    borderWidth: 1,
    borderColor: "#B0C4F1",
    borderRadius: 12,
    padding:19,
    alignItems: "center",
  },
  createButtonText: {
    color: "#2A4D9B",
    fontWeight: "800",
  },
  curatedList:{
    marginTop:17,
    gap:10,
    marginBottom:40,
  },
});
