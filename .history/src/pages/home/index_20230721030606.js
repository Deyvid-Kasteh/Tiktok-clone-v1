import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  StatusBar,
  Platform,
  FlatList,
} from "react-native";


import { FeedIdem } from "../../components/FeedItem";
import { useState } from "react";

export function Home() {
  let feedItems = [
    {
      id: "1",
      video: "https://i.imgur.com/Cnz1CPK.mp4",
      name: "@sujeitoprogramador",
      description: "Criando o ShortDev do zero com RN",
    },
    {
      id: "2",
      video: "https://i.imgur.com/E0tK2bY.mp4",
      name: "@henriquesilva",
      description:
        "Fala turma, estou aprendendo React Native com sujeito programador",
    },
    {
      id: "3",
      video: "https://i.imgur.com/mPFvFyX.mp4",
      name: "@sujeitoprogramador",
      description: "Aprendendo a trabalhar com Drag and Drop no React Native",
    },
  ];

  const [showItem, setShowItem] = useState(feedItems[]);


  return (
    <View style={styles.container}>
      <View style={styles.labels}>
        <TouchableOpacity>
          <Text style={styles.labelText}>Seguindo</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.labelText}>Pra você</Text>
          <View style={styles.indicator}></View>
        </TouchableOpacity>
      </View>

          <FlatList data={feedItems} renderItem={({ item }) => <FeedIdem data={item}/>} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  labels: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 18,
    position: "absolute",
    top: 6,
    left: 0,
    right: 0,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 55,
    zIndex: 99,
  },
  labelText: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 2,
  },
  indicator: {
    backgroundColor: "white",
    width: 32,
    height: 2,
    alignSelf: "center",
  },
});
