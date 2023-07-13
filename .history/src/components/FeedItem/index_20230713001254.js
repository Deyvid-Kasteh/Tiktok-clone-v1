import { View, StyleSheet, Text, Pressable } from "react-native";

import { Audio, Video } from "expo-av";

export function FeedIdem({ data }) {
  return (
    <Pressable>
      <Video />

      {/* <Text style={{ color: "white" }}>{data.name}</Text> */}
    </Pressable>
  );
}

const styles = StyleSheet.create({});
