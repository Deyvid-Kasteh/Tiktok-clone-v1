import { useRef } from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";

import { Audio, Video } from "expo-av";

export function FeedIdem({ data }) {
    const video = useRef(null)
  return (
    <Pressable>
      <Video ref={video} style={{width: '100%', height: 500}} />

      {/* <Text style={{ color: "white" }}>{data.name}</Text> */}
    </Pressable>
  );
}

const styles = StyleSheet.create({});
