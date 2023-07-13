import { View, StyleSheet, Text, Pressable } from "react-native";

import { Audio, Video } from "expo-av";
import { useRef } from "react";

export function FeedIdem({ data }) {
    const video = useRef
  return (
    <Pressable>
      <Video ref={}/>

      {/* <Text style={{ color: "white" }}>{data.name}</Text> */}
    </Pressable>
  );
}

const styles = StyleSheet.create({});
