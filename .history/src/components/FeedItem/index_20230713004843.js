import { useRef, useState } from "react";
import { View, StyleSheet, Text, Pressable, Dimensions } from "react-native";

import { Audio, Video } from "expo-av";

const { height: heightScreen } = Dimensions.get("screen");

export function FeedIdem({ data }) {
  const video = useRef(null);
  const [status, setStatus] = useState({});
  function handlePlayer() {
    status.isP
  }
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
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({});
