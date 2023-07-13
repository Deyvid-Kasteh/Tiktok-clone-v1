import { useRef } from "react";
import { View, StyleSheet, Text, Pressable, Dimensions } from "react-native";

import { Audio, Video } from "expo-av";

const { height: heightScreen } = Dimensions.get("screen");

export function FeedIdem({ data }) {
    const video = useRef(null);
    function handlePlayer() { alert('TESTE')}
  return (
    <Pressable onPress={handlePlayer}>
      <Video
        ref={video}
        style={{ width: "100%", height: heightScreen }}
        source={{ uri: data?.video }}
        resizeMode="cover"
        shouldPlay={false}
              isMuted={false}
              isLooping={true}
      />

      {/* <Text style={{ color: "white" }}>{data.name}</Text> */}
    </Pressable>
  );
}

const styles = StyleSheet.create({});